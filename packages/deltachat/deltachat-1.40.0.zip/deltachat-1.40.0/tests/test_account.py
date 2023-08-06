from __future__ import print_function
import pytest
import os
import sys
import queue
import time
from deltachat import const, Account
from deltachat.message import Message
from deltachat.hookspec import account_hookimpl
from datetime import datetime, timedelta


@pytest.mark.parametrize("msgtext,res", [
    ("Member Me (tmp1@x.org) removed by tmp2@x.org.",
        ("removed", "tmp1@x.org", "tmp2@x.org")),
    ("Member With space (tmp1@x.org) removed by tmp2@x.org.",
        ("removed", "tmp1@x.org", "tmp2@x.org")),
    ("Member With space (tmp1@x.org) removed by Another member (tmp2@x.org).",
        ("removed", "tmp1@x.org", "tmp2@x.org")),
    ("Member With space (tmp1@x.org) removed by me",
        ("removed", "tmp1@x.org", "me")),
    ("Member tmp1@x.org added by tmp2@x.org.", ("added", "tmp1@x.org", "tmp2@x.org")),
    ("Member nothing bla bla", None),
    ("Another unknown system message", None),
])
def test_parse_system_add_remove(msgtext, res):
    from deltachat.message import parse_system_add_remove

    out = parse_system_add_remove(msgtext)
    assert out == res


class TestOfflineAccountBasic:
    def test_wrong_db(self, tmpdir):
        p = tmpdir.join("hello.db")
        p.write("123")
        with pytest.raises(ValueError):
            Account(p.strpath)

    def test_os_name(self, tmpdir):
        p = tmpdir.join("hello.db")
        # we can't easily test if os_name is used in X-Mailer
        # outgoing messages without a full Online test
        # but we at least check Account accepts the arg
        ac1 = Account(p.strpath, os_name="solarpunk")
        ac1.get_info()

    def test_preconfigure_keypair(self, acfactory, data):
        ac = acfactory.get_unconfigured_account()
        alice_public = data.read_path("key/alice-public.asc")
        alice_secret = data.read_path("key/alice-secret.asc")
        assert alice_public and alice_secret
        ac._preconfigure_keypair("alice@example.com", alice_public, alice_secret)

    def test_getinfo(self, acfactory):
        ac1 = acfactory.get_unconfigured_account()
        d = ac1.get_info()
        assert d["arch"]
        assert d["number_of_chats"] == "0"
        assert d["bcc_self"] == "0"

    def test_is_not_configured(self, acfactory):
        ac1 = acfactory.get_unconfigured_account()
        assert not ac1.is_configured()
        with pytest.raises(ValueError):
            ac1.check_is_configured()

    def test_wrong_config_keys(self, acfactory):
        ac1 = acfactory.get_unconfigured_account()
        with pytest.raises(KeyError):
            ac1.set_config("lqkwje", "value")
        with pytest.raises(KeyError):
            ac1.get_config("lqkwje")

    def test_has_savemime(self, acfactory):
        ac1 = acfactory.get_unconfigured_account()
        assert "save_mime_headers" in ac1.get_config("sys.config_keys").split()

    def test_has_bccself(self, acfactory):
        ac1 = acfactory.get_unconfigured_account()
        assert "bcc_self" in ac1.get_config("sys.config_keys").split()
        assert ac1.get_config("bcc_self") == "0"

    def test_selfcontact_if_unconfigured(self, acfactory):
        ac1 = acfactory.get_unconfigured_account()
        assert not ac1.get_self_contact().addr

    def test_selfcontact_configured(self, acfactory):
        ac1 = acfactory.get_configured_offline_account()
        me = ac1.get_self_contact()
        assert me.display_name
        assert me.addr

    def test_get_config_fails(self, acfactory):
        ac1 = acfactory.get_unconfigured_account()
        with pytest.raises(KeyError):
            ac1.get_config("123123")

    def test_empty_group_bcc_self_enabled(self, acfactory):
        ac1 = acfactory.get_configured_offline_account()
        ac1.set_config("bcc_self", "1")
        chat = ac1.create_group_chat(name="group1")
        msg = chat.send_text("msg1")
        assert msg in chat.get_messages()

    def test_empty_group_bcc_self_disabled(self, acfactory):
        ac1 = acfactory.get_configured_offline_account()
        ac1.set_config("bcc_self", "0")
        chat = ac1.create_group_chat(name="group1")
        msg = chat.send_text("msg1")
        assert msg in chat.get_messages()


class TestOfflineContact:
    def test_contact_attr(self, acfactory):
        ac1 = acfactory.get_configured_offline_account()
        contact1 = ac1.create_contact("some1@example.org", name="some1")
        contact2 = ac1.create_contact("some1@example.org", name="some1")
        str(contact1)
        repr(contact1)
        assert contact1 == contact2
        assert contact1.id
        assert contact1.addr == "some1@example.org"
        assert contact1.display_name == "some1"
        assert not contact1.is_blocked()
        assert not contact1.is_verified()

    def test_get_contacts_and_delete(self, acfactory):
        ac1 = acfactory.get_configured_offline_account()
        contact1 = ac1.create_contact("some1@example.org", name="some1")
        contacts = ac1.get_contacts()
        assert len(contacts) == 1
        assert contact1 in contacts

        assert not ac1.get_contacts(query="some2")
        assert ac1.get_contacts(query="some1")
        assert not ac1.get_contacts(only_verified=True)
        assert len(ac1.get_contacts(with_self=True)) == 2

        assert ac1.delete_contact(contact1)
        assert contact1 not in ac1.get_contacts()

    def test_get_contacts_and_delete_fails(self, acfactory):
        ac1 = acfactory.get_configured_offline_account()
        contact1 = ac1.create_contact("some1@example.com", name="some1")
        msg = contact1.create_chat().send_text("one message")
        assert not ac1.delete_contact(contact1)
        assert not msg.filemime

    def test_create_chat_flexibility(self, acfactory):
        ac1 = acfactory.get_configured_offline_account()
        ac2 = acfactory.get_configured_offline_account()
        chat1 = ac1.create_chat(ac2)
        chat2 = ac1.create_chat(ac2.get_self_contact().addr)
        assert chat1 == chat2
        ac3 = acfactory.get_unconfigured_account()
        with pytest.raises(ValueError):
            ac1.create_chat(ac3)


class TestOfflineChat:
    @pytest.fixture
    def ac1(self, acfactory):
        return acfactory.get_configured_offline_account()

    @pytest.fixture
    def chat1(self, ac1):
        return ac1.create_contact("some1@example.org", name="some1").create_chat()

    def test_display(self, chat1):
        str(chat1)
        repr(chat1)

    def test_is_group(self, chat1):
        assert not chat1.is_group()

    def test_chat_by_id(self, chat1):
        chat2 = chat1.account.get_chat_by_id(chat1.id)
        assert chat2 == chat1
        with pytest.raises(ValueError):
            chat1.account.get_chat_by_id(123123)

    def test_chat_idempotent(self, chat1, ac1):
        contact1 = chat1.get_contacts()[0]
        chat2 = contact1.create_chat()
        assert chat2.id == chat1.id
        assert chat2.get_name() == chat1.get_name()
        assert chat1 == chat2
        assert not (chat1 != chat2)

        for ichat in ac1.get_chats():
            if ichat.id == chat1.id:
                break
        else:
            pytest.fail("could not find chat")

    def test_group_chat_add_second_account(self, acfactory):
        ac1 = acfactory.get_configured_offline_account()
        ac2 = acfactory.get_configured_offline_account()
        chat = ac1.create_group_chat(name="title1")
        with pytest.raises(ValueError):
            chat.add_contact(ac2.get_self_contact())
        contact = chat.add_contact(ac2)
        assert contact.addr == ac2.get_config("addr")
        assert contact.name == ac2.get_config("displayname")
        assert contact.account == ac1
        chat.remove_contact(ac2)

    def test_group_chat_creation(self, ac1):
        contact1 = ac1.create_contact("some1@example.org", name="some1")
        contact2 = ac1.create_contact("some2@example.org", name="some2")
        chat = ac1.create_group_chat(name="title1", contacts=[contact1, contact2])
        assert chat.get_name() == "title1"
        assert contact1 in chat.get_contacts()
        assert contact2 in chat.get_contacts()
        assert not chat.is_promoted()
        chat.set_name("title2")
        assert chat.get_name() == "title2"

        d = chat.get_summary()
        print(d)
        assert d["id"] == chat.id
        assert d["type"] == chat.get_type()
        assert d["name"] == chat.get_name()
        assert d["archived"] == chat.is_archived()
        # assert d["param"] == chat.param
        assert d["color"] == chat.get_color()
        assert d["profile_image"] == "" if chat.get_profile_image() is None else chat.get_profile_image()
        assert d["draft"] == "" if chat.get_draft() is None else chat.get_draft()

    def test_group_chat_creation_with_translation(self, ac1):
        ac1.set_stock_translation(const.DC_STR_NEWGROUPDRAFT, "xyz %1$s")
        ac1._evtracker.consume_events()
        with pytest.raises(ValueError):
            ac1.set_stock_translation(const.DC_STR_NEWGROUPDRAFT, "xyz %2$s")
        ac1._evtracker.get_matching("DC_EVENT_WARNING")
        with pytest.raises(ValueError):
            ac1.set_stock_translation(500, "xyz %1$s")
        ac1._evtracker.get_matching("DC_EVENT_WARNING")
        contact1 = ac1.create_contact("some1@example.org", name="some1")
        contact2 = ac1.create_contact("some2@example.org", name="some2")
        chat = ac1.create_group_chat(name="title1", contacts=[contact1, contact2])
        assert chat.get_name() == "title1"
        assert contact1 in chat.get_contacts()
        assert contact2 in chat.get_contacts()
        assert not chat.is_promoted()
        msg = chat.get_draft()
        assert msg.text == "xyz title1"

    @pytest.mark.parametrize("verified", [True, False])
    def test_group_chat_qr(self, acfactory, ac1, verified):
        ac2 = acfactory.get_configured_offline_account()
        chat = ac1.create_group_chat(name="title1", verified=verified)
        assert chat.is_group()
        qr = chat.get_join_qr()
        assert ac2.check_qr(qr).is_ask_verifygroup

    def test_get_set_profile_image_simple(self, ac1, data):
        chat = ac1.create_group_chat(name="title1")
        p = data.get_path("d.png")
        chat.set_profile_image(p)
        p2 = chat.get_profile_image()
        assert open(p, "rb").read() == open(p2, "rb").read()
        chat.remove_profile_image()
        assert chat.get_profile_image() is None

    def test_mute(self, ac1):
        chat = ac1.create_group_chat(name="title1")
        assert not chat.is_muted()
        chat.mute()
        assert chat.is_muted()
        chat.unmute()
        assert not chat.is_muted()
        chat.mute(50)
        assert chat.is_muted()
        with pytest.raises(ValueError):
            chat.mute(-51)

    def test_delete_and_send_fails(self, ac1, chat1):
        chat1.delete()
        ac1._evtracker.wait_next_messages_changed()
        with pytest.raises(ValueError):
            chat1.send_text("msg1")

    def test_prepare_message_and_send(self, ac1, chat1):
        msg = chat1.prepare_message(Message.new_empty(chat1.account, "text"))
        msg.set_text("hello world")
        assert msg.text == "hello world"
        assert msg.id > 0
        chat1.send_prepared(msg)
        assert "Sent" in msg.get_message_info()
        str(msg)
        repr(msg)
        assert msg == ac1.get_message_by_id(msg.id)

    def test_prepare_file(self, ac1, chat1):
        blobdir = ac1.get_blobdir()
        p = os.path.join(blobdir, "somedata.txt")
        with open(p, "w") as f:
            f.write("some data")
        message = chat1.prepare_message_file(p)
        assert message.id > 0
        message.set_text("hello world")
        assert message.is_out_preparing()
        assert message.text == "hello world"
        chat1.send_prepared(message)
        assert "Sent" in message.get_message_info()

    def test_message_eq_contains(self, chat1):
        msg = chat1.send_text("msg1")
        assert msg in chat1.get_messages()
        assert not (msg not in chat1.get_messages())
        str(msg)
        repr(msg)

    def test_message_send_text(self, chat1):
        msg = chat1.send_text("msg1")
        assert msg
        assert msg.is_text()
        assert not msg.is_audio()
        assert not msg.is_video()
        assert not msg.is_gif()
        assert not msg.is_file()
        assert not msg.is_image()

        assert not msg.is_in_fresh()
        assert not msg.is_in_noticed()
        assert not msg.is_in_seen()
        assert msg.is_out_pending()
        assert not msg.is_out_failed()
        assert not msg.is_out_delivered()
        assert not msg.is_out_mdn_received()

    def test_message_image(self, chat1, data, lp):
        with pytest.raises(ValueError):
            chat1.send_image(path="notexists")
        fn = data.get_path("d.png")
        lp.sec("sending image")
        chat1.account._evtracker.consume_events()
        msg = chat1.send_image(fn)
        chat1.account._evtracker.get_matching("DC_EVENT_NEW_BLOB_FILE")
        assert msg.is_image()
        assert msg
        assert msg.id > 0
        assert os.path.exists(msg.filename)
        assert msg.filemime == "image/png"

    @pytest.mark.parametrize("typein,typeout", [
            (None, "application/octet-stream"),
            ("text/plain", "text/plain"),
            ("image/png", "image/png"),
    ])
    def test_message_file(self, ac1, chat1, data, lp, typein, typeout):
        lp.sec("sending file")
        fn = data.get_path("r.txt")
        msg = chat1.send_file(fn, typein)
        assert msg
        assert msg.id > 0
        assert msg.is_file()
        assert os.path.exists(msg.filename)
        assert msg.filename.endswith(msg.basename)
        assert msg.filemime == typeout
        msg2 = chat1.send_file(fn, typein)
        assert msg2 != msg
        assert msg2.filename != msg.filename

    def test_create_contact(self, acfactory):
        ac1 = acfactory.get_configured_offline_account()
        email = "hello <hello@example.org>"
        contact1 = ac1.create_contact(email)
        assert contact1.addr == "hello@example.org"
        assert contact1.display_name == "hello"
        contact1 = ac1.create_contact(email, name="world")
        assert contact1.display_name == "world"
        contact2 = ac1.create_contact("display1 <x@example.org>", "real")
        assert contact2.display_name == "real"

    def test_create_chat_simple(self, acfactory):
        ac1 = acfactory.get_configured_offline_account()
        contact1 = ac1.create_contact("some1@example.org", name="some1")
        contact1.create_chat().send_text("hello")

    def test_chat_message_distinctions(self, ac1, chat1):
        past1s = datetime.utcnow() - timedelta(seconds=1)
        msg = chat1.send_text("msg1")
        ts = msg.time_sent
        assert msg.time_received is None
        assert ts.strftime("Y")
        assert past1s < ts
        contact = msg.get_sender_contact()
        assert contact == ac1.get_self_contact()

    def test_set_config_after_configure_is_forbidden(self, ac1):
        assert ac1.get_config("mail_pw")
        assert ac1.is_configured()
        with pytest.raises(ValueError):
            ac1.set_config("addr", "123@example.org")

    def test_import_export_one_contact(self, acfactory, tmpdir):
        backupdir = tmpdir.mkdir("backup")
        ac1 = acfactory.get_configured_offline_account()
        chat = ac1.create_contact("some1 <some1@example.org>").create_chat()
        # send a text message
        msg = chat.send_text("msg1")
        # send a binary file
        bin = tmpdir.join("some.bin")
        with bin.open("w") as f:
            f.write("\00123" * 10000)
        msg = chat.send_file(bin.strpath)
        contact = msg.get_sender_contact()
        assert contact == ac1.get_self_contact()
        assert not backupdir.listdir()
        path = ac1.export_all(backupdir.strpath)
        assert os.path.exists(path)
        ac2 = acfactory.get_unconfigured_account()
        ac2.import_all(path)
        contacts = ac2.get_contacts(query="some1")
        assert len(contacts) == 1
        contact2 = contacts[0]
        assert contact2.addr == "some1@example.org"
        chat2 = contact2.create_chat()
        messages = chat2.get_messages()
        assert len(messages) == 2
        assert messages[0].text == "msg1"
        assert os.path.exists(messages[1].filename)

    def test_ac_setup_message_fails(self, ac1):
        with pytest.raises(RuntimeError):
            ac1.initiate_key_transfer()

    def test_set_get_draft(self, chat1):
        msg = Message.new_empty(chat1.account, "text")
        msg1 = chat1.prepare_message(msg)
        msg1.set_text("hello")
        chat1.set_draft(msg1)
        msg1.set_text("obsolete")
        msg2 = chat1.get_draft()
        assert msg2.text == "hello"
        chat1.set_draft(None)
        assert chat1.get_draft() is None

    def test_qr_setup_contact(self, acfactory, lp):
        ac1 = acfactory.get_configured_offline_account()
        ac2 = acfactory.get_configured_offline_account()
        qr = ac1.get_setup_contact_qr()
        assert qr.startswith("OPENPGP4FPR:")
        res = ac2.check_qr(qr)
        assert res.is_ask_verifycontact()
        assert not res.is_ask_verifygroup()
        assert res.contact_id == 10

    def test_group_chat_many_members_add_remove(self, ac1, lp):
        lp.sec("ac1: creating group chat with 10 other members")
        chat = ac1.create_group_chat(name="title1")
        # promote chat
        chat.send_text("hello")
        assert chat.is_promoted()

        # activate local plugin
        in_list = []

        class InPlugin:
            @account_hookimpl
            def ac_member_added(self, chat, contact, actor):
                in_list.append(("added", chat, contact, actor))

            @account_hookimpl
            def ac_member_removed(self, chat, contact, actor):
                in_list.append(("removed", chat, contact, actor))

        ac1.add_account_plugin(InPlugin())

        # perform add contact many times
        contacts = []
        for i in range(10):
            lp.sec("create contact")
            contact = ac1.create_contact("some{}@example.org".format(i))
            contacts.append(contact)
            lp.sec("add contact")
            chat.add_contact(contact)

        assert chat.num_contacts() == 11

        # let's make sure the events perform plugin hooks
        def wait_events(cond):
            now = time.time()
            while time.time() < now + 5:
                if cond():
                    break
                time.sleep(0.1)
            else:
                pytest.fail("failed to get events")

        wait_events(lambda: len(in_list) == 10)

        assert len(in_list) == 10
        chat_contacts = chat.get_contacts()
        for in_cmd, in_chat, in_contact, in_actor in in_list:
            assert in_cmd == "added"
            assert in_chat == chat
            assert in_contact in chat_contacts
            assert in_actor is None
            chat_contacts.remove(in_contact)

        assert chat_contacts[0].id == 1  # self contact

        in_list[:] = []

        lp.sec("ac1: removing two contacts and checking things are right")
        chat.remove_contact(contacts[9])
        chat.remove_contact(contacts[3])
        assert chat.num_contacts() == 9

        wait_events(lambda: len(in_list) == 2)
        assert len(in_list) == 2
        assert in_list[0][0] == "removed"
        assert in_list[0][1] == chat
        assert in_list[0][2] == contacts[9]
        assert in_list[1][0] == "removed"
        assert in_list[1][1] == chat
        assert in_list[1][2] == contacts[3]


def test_basic_imap_api(acfactory, tmpdir):
    ac1, ac2 = acfactory.get_two_online_accounts()
    chat12 = acfactory.get_accepted_chat(ac1, ac2)

    imap2 = ac2.direct_imap

    imap2.idle_start()
    chat12.send_text("hello")
    ac2._evtracker.wait_next_incoming_message()

    imap2.idle_check(terminate=True)
    assert imap2.get_unread_cnt() == 1
    imap2.mark_all_read()
    assert imap2.get_unread_cnt() == 0

    imap2.dump_imap_structures(tmpdir, logfile=sys.stdout)
    imap2.shutdown()


class TestOnlineAccount:
    @pytest.mark.ignored
    def test_configure_generate_key(self, acfactory, lp):
        # A slow test which will generate new keys.
        ac1 = acfactory.get_online_configuring_account(
            pre_generated_key=False,
            config={"key_gen_type": str(const.DC_KEY_GEN_RSA2048)}
        )
        ac2 = acfactory.get_online_configuring_account(
            pre_generated_key=False,
            config={"key_gen_type": str(const.DC_KEY_GEN_ED25519)}
        )
        # rsa key gen can be slow especially on CI, adjust timeout
        ac1._evtracker.set_timeout(120)
        acfactory.wait_configure_and_start_io()
        chat = acfactory.get_accepted_chat(ac1, ac2)

        lp.sec("ac1: send unencrypted message to ac2")
        chat.send_text("message1")
        lp.sec("ac2: waiting for message from ac1")
        ev = ac2._evtracker.get_matching("DC_EVENT_INCOMING_MSG")
        msg_in = ac2.get_message_by_id(ev.data2)
        assert msg_in.text == "message1"
        assert not msg_in.is_encrypted()

        lp.sec("ac2: send encrypted message to ac1")
        msg_in.chat.send_text("message2")
        lp.sec("ac1: waiting for message from ac2")
        ev = ac1._evtracker.get_matching("DC_EVENT_INCOMING_MSG")
        msg2_in = ac1.get_message_by_id(ev.data2)
        assert msg2_in.text == "message2"
        assert msg2_in.is_encrypted()

        lp.sec("ac1: send encrypted message to ac2")
        msg2_in.chat.send_text("message3")
        lp.sec("ac2: waiting for message from ac1")
        ev = ac2._evtracker.get_matching("DC_EVENT_INCOMING_MSG")
        msg3_in = ac1.get_message_by_id(ev.data2)
        assert msg3_in.text == "message3"
        assert msg3_in.is_encrypted()

    def test_configure_canceled(self, acfactory):
        ac1 = acfactory.get_online_configuring_account()
        ac1._configtracker.wait_progress()
        ac1.stop_ongoing()
        try:
            ac1._configtracker.wait_finish()
        except Exception:
            pass

    def test_export_import_self_keys(self, acfactory, tmpdir):
        ac1, ac2 = acfactory.get_two_online_accounts()

        dir = tmpdir.mkdir("exportdir")
        export_files = ac1.export_self_keys(dir.strpath)
        assert len(export_files) == 2
        for x in export_files:
            assert x.startswith(dir.strpath)
        ac1._evtracker.consume_events()
        ac2.import_self_keys(dir.strpath)

    def test_one_account_send_bcc_setting(self, acfactory, lp):
        ac1 = acfactory.get_online_configuring_account()
        ac2 = acfactory.get_online_configuring_account()

        # Clone the first account: we will test if sent messages
        # are copied to it via BCC.
        ac1_clone = acfactory.clone_online_account(ac1)

        acfactory.wait_configure_and_start_io()

        chat = acfactory.get_accepted_chat(ac1, ac2)

        self_addr = ac1.get_config("addr")
        other_addr = ac2.get_config("addr")

        lp.sec("send out message without bcc to ourselves")
        ac1.set_config("bcc_self", "0")
        msg_out = chat.send_text("message1")
        assert not msg_out.is_forwarded()

        # wait for send out (no BCC)
        ev = ac1._evtracker.get_matching("DC_EVENT_SMTP_MESSAGE_SENT")
        assert ac1.get_config("bcc_self") == "0"

        # make sure we are not sending message to ourselves
        assert self_addr not in ev.data2
        assert other_addr in ev.data2
        ev = ac1._evtracker.get_matching("DC_EVENT_DELETED_BLOB_FILE")

        lp.sec("ac1: setting bcc_self=1")
        ac1.set_config("bcc_self", "1")

        lp.sec("send out message with bcc to ourselves")
        ac1.direct_imap.idle_start()
        msg_out = chat.send_text("message2")

        # wait for send out (BCC)
        ev = ac1._evtracker.get_matching("DC_EVENT_SMTP_MESSAGE_SENT")
        assert ac1.get_config("bcc_self") == "1"

        # now make sure we are sending message to ourselves too
        assert self_addr in ev.data2
        assert other_addr in ev.data2
        ev = ac1._evtracker.get_matching("DC_EVENT_DELETED_BLOB_FILE")
        assert ac1.direct_imap.idle_wait_for_seen()

        # Second client receives only second message, but not the first
        ev_msg = ac1_clone._evtracker.wait_next_messages_changed()
        assert ev_msg.text == msg_out.text

    def test_send_file_twice_unicode_filename_mangling(self, tmpdir, acfactory, lp):
        ac1, ac2 = acfactory.get_two_online_accounts()
        chat = acfactory.get_accepted_chat(ac1, ac2)

        basename = "somedäüta.html.zip"
        p = os.path.join(tmpdir.strpath, basename)
        with open(p, "w") as f:
            f.write("some data")

        def send_and_receive_message():
            lp.sec("ac1: prepare and send attachment + text to ac2")
            msg1 = Message.new_empty(ac1, "file")
            msg1.set_text("withfile")
            msg1.set_file(p)
            chat.send_msg(msg1)

            lp.sec("ac2: receive message")
            ev = ac2._evtracker.get_matching("DC_EVENT_INCOMING_MSG")
            assert ev.data2 > const.DC_CHAT_ID_LAST_SPECIAL
            return ac2.get_message_by_id(ev.data2)

        msg = send_and_receive_message()
        assert msg.text == "withfile"
        assert open(msg.filename).read() == "some data"
        assert msg.filename.endswith(basename)

        msg2 = send_and_receive_message()
        assert msg2.text == "withfile"
        assert open(msg2.filename).read() == "some data"
        assert msg2.filename.endswith("html.zip")
        assert msg.filename != msg2.filename

    def test_send_file_html_attachment(self, tmpdir, acfactory, lp):
        ac1, ac2 = acfactory.get_two_online_accounts()
        chat = acfactory.get_accepted_chat(ac1, ac2)

        basename = "test.html"
        content = "<html><body>text</body>data"

        p = os.path.join(tmpdir.strpath, basename)
        with open(p, "w") as f:
            # write wrong html to see if core tries to parse it
            # (it shouldn't as it's a file attachment)
            f.write(content)

        lp.sec("ac1: prepare and send attachment + text to ac2")
        chat.send_file(p, mime_type="text/html")

        lp.sec("ac2: receive message")
        ev = ac2._evtracker.get_matching("DC_EVENT_INCOMING_MSG")
        assert ev.data2 > const.DC_CHAT_ID_LAST_SPECIAL
        msg = ac2.get_message_by_id(ev.data2)

        assert open(msg.filename).read() == content
        assert msg.filename.endswith(basename)

    def test_mvbox_sentbox_threads(self, acfactory, lp):
        lp.sec("ac1: start with mvbox thread")
        ac1 = acfactory.get_online_configuring_account(mvbox=True, move=True, sentbox=True)

        lp.sec("ac2: start without mvbox/sentbox threads")
        ac2 = acfactory.get_online_configuring_account()

        lp.sec("ac2 and ac1: waiting for configuration")
        acfactory.wait_configure_and_start_io()

        lp.sec("ac1: send message and wait for ac2 to receive it")
        acfactory.get_accepted_chat(ac1, ac2).send_text("message1")
        assert ac2._evtracker.wait_next_incoming_message().text == "message1"

    def test_move_works(self, acfactory):
        ac1 = acfactory.get_online_configuring_account()
        ac2 = acfactory.get_online_configuring_account(mvbox=True, move=True)
        acfactory.wait_configure_and_start_io()
        chat = acfactory.get_accepted_chat(ac1, ac2)
        chat.send_text("message1")
        ev = ac2._evtracker.get_matching("DC_EVENT_INCOMING_MSG")
        assert ev.data2 > const.DC_CHAT_ID_LAST_SPECIAL
        ac2._evtracker.get_matching("DC_EVENT_IMAP_MESSAGE_MOVED")

    def test_move_works_on_self_sent(self, acfactory):
        ac1 = acfactory.get_online_configuring_account(mvbox=True, move=True)
        ac2 = acfactory.get_online_configuring_account()
        acfactory.wait_configure_and_start_io()
        ac1.set_config("bcc_self", "1")

        chat = acfactory.get_accepted_chat(ac1, ac2)
        chat.send_text("message1")
        chat.send_text("message2")
        chat.send_text("message3")
        ac1._evtracker.get_matching("DC_EVENT_IMAP_MESSAGE_MOVED")
        ac1._evtracker.get_matching("DC_EVENT_IMAP_MESSAGE_MOVED")
        ac1._evtracker.get_matching("DC_EVENT_IMAP_MESSAGE_MOVED")

    def test_forward_messages(self, acfactory, lp):
        ac1, ac2 = acfactory.get_two_online_accounts()
        chat = ac1.create_chat(ac2)

        lp.sec("ac1: send message to ac2")
        msg_out = chat.send_text("message2")

        lp.sec("ac2: wait for receive")
        ev = ac2._evtracker.get_matching("DC_EVENT_INCOMING_MSG|DC_EVENT_MSGS_CHANGED")
        assert ev.data2 == msg_out.id
        msg_in = ac2.get_message_by_id(msg_out.id)
        assert msg_in.text == "message2"

        lp.sec("ac2: check that the message arrive in deaddrop")
        chat2 = msg_in.chat
        assert msg_in in chat2.get_messages()
        assert not msg_in.is_forwarded()
        assert chat2.is_deaddrop()
        assert chat2 == ac2.get_deaddrop_chat()

        lp.sec("ac2: create new chat and forward message to it")
        chat3 = ac2.create_group_chat("newgroup")
        assert not chat3.is_promoted()
        ac2.forward_messages([msg_in], chat3)

        lp.sec("ac2: check new chat has a forwarded message")
        assert chat3.is_promoted()
        messages = chat3.get_messages()
        msg = messages[-1]
        assert msg.is_forwarded()
        ac2.delete_messages(messages)
        assert not chat3.get_messages()

    def test_forward_own_message(self, acfactory, lp):
        ac1, ac2 = acfactory.get_two_online_accounts()
        chat = acfactory.get_accepted_chat(ac1, ac2)

        lp.sec("sending message")
        msg_out = chat.send_text("message2")

        lp.sec("receiving message")
        ev = ac2._evtracker.get_matching("DC_EVENT_INCOMING_MSG")
        msg_in = ac2.get_message_by_id(ev.data2)
        assert msg_in.text == "message2"
        assert not msg_in.is_forwarded()

        lp.sec("ac1: creating group chat, and forward own message")
        group = ac1.create_group_chat("newgroup2")
        group.add_contact(ac2)
        ac1.forward_messages([msg_out], group)

        # wait for other account to receive
        ev = ac2._evtracker.get_matching("DC_EVENT_INCOMING_MSG")
        msg_in = ac2.get_message_by_id(ev.data2)
        assert msg_in.text == "message2"
        assert msg_in.is_forwarded()

    def test_send_self_message_and_empty_folder(self, acfactory, lp):
        ac1 = acfactory.get_one_online_account(mvbox=True, move=True)
        lp.sec("ac1: create self chat")
        chat = ac1.get_self_contact().create_chat()
        chat.send_text("hello")
        ac1._evtracker.get_matching("DC_EVENT_SMTP_MESSAGE_SENT")
        ac1.empty_server_folders(inbox=True, mvbox=True)
        ev1 = ac1._evtracker.get_matching("DC_EVENT_IMAP_FOLDER_EMPTIED")
        ev2 = ac1._evtracker.get_matching("DC_EVENT_IMAP_FOLDER_EMPTIED")
        boxes = [ev1.data2, ev2.data2]
        boxes.remove("INBOX")
        assert len(boxes) == 1 and boxes[0].endswith("DeltaChat")

    def test_send_and_receive_message_markseen(self, acfactory, lp):
        ac1, ac2 = acfactory.get_two_online_accounts()

        # make DC's life harder wrt to encodings
        ac1.set_config("displayname", "ä name")

        lp.sec("ac1: create chat with ac2")
        chat = ac1.create_chat(ac2)

        lp.sec("sending text message from ac1 to ac2")
        msg1 = chat.send_text("message1")
        ac1._evtracker.wait_msg_delivered(msg1)

        lp.sec("wait for ac2 to receive message")
        msg2 = ac2._evtracker.wait_next_messages_changed()
        assert msg2.text == "message1"
        assert not msg2.is_forwarded()
        assert msg2.get_sender_contact().display_name == ac1.get_config("displayname")

        lp.sec("check the message arrived in contact-requests/deaddrop")
        chat2 = msg2.chat
        assert msg2 in chat2.get_messages()
        assert chat2.is_deaddrop()
        assert chat2.count_fresh_messages() == 0
        assert msg2.time_received >= msg1.time_sent

        lp.sec("create new chat with contact and verify it's proper")
        chat2b = msg2.create_chat()
        assert not chat2b.is_deaddrop()
        assert chat2b.count_fresh_messages() == 1

        lp.sec("mark chat as noticed")
        chat2b.mark_noticed()
        assert chat2b.count_fresh_messages() == 0

        ac2._evtracker.consume_events()

        lp.sec("sending a second message from ac1 to ac2")
        msg3 = chat.send_text("message2")

        lp.sec("wait for ac2 to receive second message")
        msg4 = ac2._evtracker.wait_next_incoming_message()

        lp.sec("mark messages as seen on ac2, wait for changes on ac1")
        ac2.direct_imap.idle_start()
        ac1.direct_imap.idle_start()
        ac2.mark_seen_messages([msg2, msg4])
        ac2.direct_imap.idle_check(terminate=True)
        lp.step("1")
        for i in range(2):
            ev = ac1._evtracker.get_matching("DC_EVENT_MSG_READ")
            assert ev.data1 > const.DC_CHAT_ID_LAST_SPECIAL
            assert ev.data2 > const.DC_MSG_ID_LAST_SPECIAL
        lp.step("2")
        ac1.direct_imap.idle_wait_for_seen()  # Check that ac1 marks the read receipt as read

        assert msg1.is_out_mdn_received()
        assert msg3.is_out_mdn_received()

        lp.sec("try check that a second call to mark_seen doesn't happen")
        ac2._evtracker.consume_events()
        msg2.mark_seen()
        try:
            ac2._evtracker.get_matching("DC_EVENT_MSG_READ", timeout=0.01)
        except queue.Empty:
            pass  # mark_seen_messages() has generated events before it returns

    def test_mdn_asymetric(self, acfactory, lp):
        ac1, ac2 = acfactory.get_two_online_accounts(move=True)

        lp.sec("ac1: create chat with ac2")
        chat = ac1.create_chat(ac2)
        ac2.create_chat(ac1)

        # make sure mdns are enabled (usually enabled by default already)
        ac1.set_config("mdns_enabled", "1")
        ac2.set_config("mdns_enabled", "1")

        lp.sec("sending text message from ac1 to ac2")
        msg_out = chat.send_text("message1")

        assert len(chat.get_messages()) == 1

        lp.sec("disable ac1 MDNs")
        ac1.set_config("mdns_enabled", "0")

        lp.sec("wait for ac2 to receive message")
        msg = ac2._evtracker.wait_next_incoming_message()

        assert len(msg.chat.get_messages()) == 1

        lp.sec("ac2: mark incoming message as seen")
        ac2.mark_seen_messages([msg])

        lp.sec("ac1: waiting for incoming activity")
        # MDN should be moved even though MDNs are already disabled
        ac1._evtracker.get_matching("DC_EVENT_IMAP_MESSAGE_MOVED")

        assert len(chat.get_messages()) == 1

        # MDN is received even though MDNs are already disabled
        assert msg_out.is_out_mdn_received()

    def test_send_and_receive_will_encrypt_decrypt(self, acfactory, lp):
        ac1, ac2 = acfactory.get_two_online_accounts()

        lp.sec("ac1: create chat with ac2")
        chat = ac1.create_chat(ac2)

        lp.sec("sending text message from ac1 to ac2")
        chat.send_text("message1")

        lp.sec("wait for ac2 to receive message")
        msg2 = ac2._evtracker.wait_next_messages_changed()
        assert msg2.text == "message1"

        lp.sec("create new chat with contact and send back (encrypted) message")
        chat2b = msg2.create_chat()
        chat2b.send_text("message-back")

        lp.sec("wait for ac1 to receive message")
        msg3 = ac1._evtracker.wait_next_incoming_message()
        assert msg3.text == "message-back"
        assert msg3.is_encrypted() and msg3.is_in_fresh()

        # test get_fresh_messages
        fresh_msgs = list(ac1.get_fresh_messages())
        assert len(fresh_msgs) == 1
        assert fresh_msgs[0] == msg3
        msg3.mark_seen()
        assert not list(ac1.get_fresh_messages())

        # Test that we do not gossip peer keys in 1-to-1 chat,
        # as it makes no sense to gossip to peers their own keys.
        # Gossip is only sent in encrypted messages,
        # and we sent encrypted msg_back right above.
        assert chat2b.get_summary()["gossiped_timestamp"] == 0

        lp.sec("create group chat with two members, one of which has no encrypt state")
        chat = ac1.create_group_chat("encryption test")
        chat.add_contact(ac2)
        chat.add_contact(ac1.create_contact("notexisting@testrun.org"))
        msg = chat.send_text("test not encrypt")
        assert not msg.is_encrypted()
        ac1._evtracker.get_matching("DC_EVENT_SMTP_MESSAGE_SENT")

    def test_send_first_message_as_long_unicode_with_cr(self, acfactory, lp):
        ac1, ac2 = acfactory.get_two_online_accounts()
        ac2.set_config("save_mime_headers", "1")

        lp.sec("ac1: create chat with ac2")
        chat = acfactory.get_accepted_chat(ac1, ac2)

        lp.sec("sending multi-line non-unicode message from ac1 to ac2")
        text1 = "hello\nworld"
        msg_out = chat.send_text(text1)
        assert not msg_out.is_encrypted()

        lp.sec("wait for ac2 to receive multi-line non-unicode message")
        msg_in = ac2._evtracker.wait_next_incoming_message()
        assert msg_in.text == text1

        lp.sec("sending multi-line unicode text message from ac1 to ac2")
        text2 = "äalis\nthis is ßßÄ"
        msg_out = chat.send_text(text2)
        assert not msg_out.is_encrypted()

        lp.sec("wait for ac2 to receive multi-line unicode message")
        msg_in = ac2._evtracker.wait_next_incoming_message()
        assert msg_in.text == text2
        assert ac1.get_config("addr") in [x.addr for x in msg_in.chat.get_contacts()]

    def test_reply_encrypted(self, acfactory, lp):
        ac1, ac2 = acfactory.get_two_online_accounts()

        lp.sec("ac1: create chat with ac2")
        chat = ac1.create_chat(ac2)

        lp.sec("sending text message from ac1 to ac2")
        msg1 = chat.send_text("message1")
        assert not msg1.is_encrypted()

        lp.sec("wait for ac2 to receive message")
        msg2 = ac2._evtracker.wait_next_messages_changed()
        assert msg2.text == "message1"
        assert not msg2.is_encrypted()

        lp.sec("create new chat with contact and send back (encrypted) message")
        msg2.create_chat().send_text("message-back")

        lp.sec("wait for ac1 to receive message")
        msg3 = ac1._evtracker.wait_next_incoming_message()
        assert msg3.text == "message-back"
        assert msg3.is_encrypted()

        lp.sec("ac1: e2ee_enabled=0 and see if reply is encrypted")
        print("ac1: e2ee_enabled={}".format(ac1.get_config("e2ee_enabled")))
        print("ac2: e2ee_enabled={}".format(ac2.get_config("e2ee_enabled")))
        ac1.set_config("e2ee_enabled", "0")

        # Set unprepared and unencrypted draft to test that it is not
        # taken into account when determining whether last message is
        # encrypted.
        msg_draft = Message.new_empty(ac1, "text")
        msg_draft.set_text("message2 -- should be encrypted")
        chat.set_draft(msg_draft)

        # Get the draft, prepare and send it.
        msg_draft = chat.get_draft()
        msg_out = chat.prepare_message(msg_draft)
        chat.send_prepared(msg_out)

        chat.set_draft(None)
        assert chat.get_draft() is None

        lp.sec("wait for ac2 to receive message")
        ev = ac2._evtracker.get_matching("DC_EVENT_INCOMING_MSG")
        msg_in = ac2.get_message_by_id(ev.data2)
        assert msg_in.text == "message2 -- should be encrypted"
        assert msg_in.is_encrypted()

    def test_saved_mime_on_received_message(self, acfactory, lp):
        ac1, ac2 = acfactory.get_two_online_accounts()

        lp.sec("configure ac2 to save mime headers, create ac1/ac2 chat")
        ac2.set_config("save_mime_headers", "1")
        chat = ac1.create_chat(ac2)

        lp.sec("sending text message from ac1 to ac2")
        msg_out = chat.send_text("message1")
        ac1._evtracker.wait_msg_delivered(msg_out)
        assert msg_out.get_mime_headers() is None

        lp.sec("wait for ac2 to receive message")
        ev = ac2._evtracker.get_matching("DC_EVENT_MSGS_CHANGED")
        in_id = ev.data2
        mime = ac2.get_message_by_id(in_id).get_mime_headers()
        assert mime.get_all("From")
        assert mime.get_all("Received")

    def test_send_mark_seen_clean_incoming_events(self, acfactory, lp, data):
        ac1, ac2 = acfactory.get_two_online_accounts()
        chat = acfactory.get_accepted_chat(ac1, ac2)

        message_queue = queue.Queue()

        class InPlugin:
            @account_hookimpl
            def ac_incoming_message(self, message):
                message_queue.put(message)

        ac1.add_account_plugin(InPlugin())

        lp.sec("sending one message from ac1 to ac2")
        chat.send_text("hello")

        lp.sec("ac2: waiting to receive")
        msg = ac2._evtracker.wait_next_incoming_message()
        assert msg.text == "hello"

        lp.sec("ac2: mark seen {}".format(msg))
        msg.mark_seen()

        for ev in ac1._evtracker.iter_events():
            if ev.name == "DC_EVENT_INCOMING_MSG":
                pytest.fail("MDN arrived as regular incoming message")
            elif ev.name == "DC_EVENT_MSG_READ":
                break

    def test_send_and_receive_image(self, acfactory, lp, data):
        ac1, ac2 = acfactory.get_two_online_accounts()
        chat = ac1.create_chat(ac2)

        message_queue = queue.Queue()

        class InPlugin:
            @account_hookimpl
            def ac_incoming_message(self, message):
                message_queue.put(message)

        delivered = queue.Queue()
        out = queue.Queue()

        class OutPlugin:
            @account_hookimpl
            def ac_message_delivered(self, message):
                delivered.put(message)

            @account_hookimpl
            def ac_outgoing_message(self, message):
                out.put(message)

        ac1.add_account_plugin(OutPlugin())
        ac2.add_account_plugin(InPlugin())

        lp.sec("sending image message from ac1 to ac2")
        path = data.get_path("d.png")
        msg_out = chat.send_image(path)
        ac1._evtracker.wait_msg_delivered(msg_out)
        m = out.get()
        assert m == msg_out
        m = delivered.get()
        assert m == msg_out

        lp.sec("wait for ac2 to receive message")
        ev = ac2._evtracker.get_matching("DC_EVENT_MSGS_CHANGED|DC_EVENT_INCOMING_MSG")
        assert ev.data2 == msg_out.id
        msg_in = ac2.get_message_by_id(msg_out.id)
        assert msg_in.is_image()
        assert os.path.exists(msg_in.filename)
        assert os.stat(msg_in.filename).st_size == os.stat(path).st_size
        m = message_queue.get()
        assert m == msg_in

    def test_import_export_online_all(self, acfactory, tmpdir, lp):
        ac1 = acfactory.get_one_online_account()

        lp.sec("create some chat content")
        contact1 = ac1.create_contact("some1@example.org", name="some1")
        contact1.create_chat().send_text("msg1")
        assert len(ac1.get_contacts(query="some1")) == 1
        backupdir = tmpdir.mkdir("backup")

        lp.sec("export all to {}".format(backupdir))
        path = ac1.export_all(backupdir.strpath)
        assert os.path.exists(path)
        t = time.time()

        lp.sec("get fresh empty account")
        ac2 = acfactory.get_unconfigured_account()

        lp.sec("get latest backup file")
        path2 = ac2.get_latest_backupfile(backupdir.strpath)
        assert path2 == path

        lp.sec("import backup and check it's proper")
        ac2.import_all(path)
        contacts = ac2.get_contacts(query="some1")
        assert len(contacts) == 1
        contact2 = contacts[0]
        assert contact2.addr == "some1@example.org"
        chat2 = contact2.create_chat()
        messages = chat2.get_messages()
        assert len(messages) == 1
        assert messages[0].text == "msg1"

        # wait until a second passed since last backup
        # because get_latest_backupfile() shall return the latest backup
        # from a UI it's unlikely anyone manages to export two
        # backups in one second.
        time.sleep(max(0, 1 - (time.time() - t)))
        lp.sec("Second-time export all to {}".format(backupdir))
        path2 = ac1.export_all(backupdir.strpath)
        assert os.path.exists(path2)
        assert path2 != path
        assert ac2.get_latest_backupfile(backupdir.strpath) == path2

    def test_ac_setup_message(self, acfactory, lp):
        # note that the receiving account needs to be configured and running
        # before ther setup message is send. DC does not read old messages
        # as of Jul2019
        ac1 = acfactory.get_online_configuring_account()
        ac2 = acfactory.clone_online_account(ac1)
        acfactory.wait_configure_and_start_io()

        lp.sec("trigger ac setup message and return setupcode")
        assert ac1.get_info()["fingerprint"] != ac2.get_info()["fingerprint"]
        setup_code = ac1.initiate_key_transfer()
        ac2._evtracker.set_timeout(30)
        ev = ac2._evtracker.get_matching("DC_EVENT_INCOMING_MSG|DC_EVENT_MSGS_CHANGED")
        msg = ac2.get_message_by_id(ev.data2)
        assert msg.is_setup_message()
        assert msg.get_setupcodebegin() == setup_code[:2]
        lp.sec("try a bad setup code")
        with pytest.raises(ValueError):
            msg.continue_key_transfer(str(reversed(setup_code)))
        lp.sec("try a good setup code")
        print("*************** Incoming ASM File at: ", msg.filename)
        print("*************** Setup Code: ", setup_code)
        msg.continue_key_transfer(setup_code)
        assert ac1.get_info()["fingerprint"] == ac2.get_info()["fingerprint"]

    def test_ac_setup_message_twice(self, acfactory, lp):
        ac1 = acfactory.get_online_configuring_account()
        ac2 = acfactory.clone_online_account(ac1)
        ac2._evtracker.set_timeout(30)
        acfactory.wait_configure_and_start_io()

        lp.sec("trigger ac setup message but ignore")
        assert ac1.get_info()["fingerprint"] != ac2.get_info()["fingerprint"]
        ac1.initiate_key_transfer()
        ac2._evtracker.get_matching("DC_EVENT_INCOMING_MSG|DC_EVENT_MSGS_CHANGED")

        lp.sec("trigger second ac setup message, wait for receive ")
        setup_code2 = ac1.initiate_key_transfer()
        ev = ac2._evtracker.get_matching("DC_EVENT_INCOMING_MSG|DC_EVENT_MSGS_CHANGED")
        msg = ac2.get_message_by_id(ev.data2)
        assert msg.is_setup_message()
        assert msg.get_setupcodebegin() == setup_code2[:2]

        lp.sec("process second setup message")
        msg.continue_key_transfer(setup_code2)
        assert ac1.get_info()["fingerprint"] == ac2.get_info()["fingerprint"]

    def test_qr_setup_contact(self, acfactory, lp):
        ac1, ac2 = acfactory.get_two_online_accounts()
        lp.sec("ac1: create QR code and let ac2 scan it, starting the securejoin")
        qr = ac1.get_setup_contact_qr()

        lp.sec("ac2: start QR-code based setup contact protocol")
        ch = ac2.qr_setup_contact(qr)
        assert ch.id >= 10
        ac1._evtracker.wait_securejoin_inviter_progress(1000)

    def test_qr_join_chat(self, acfactory, lp):
        ac1, ac2 = acfactory.get_two_online_accounts()
        lp.sec("ac1: create QR code and let ac2 scan it, starting the securejoin")
        chat = ac1.create_group_chat("hello")
        qr = chat.get_join_qr()
        lp.sec("ac2: start QR-code based join-group protocol")
        ch = ac2.qr_join_chat(qr)
        lp.sec("ac2: qr_join_chat() returned")
        assert ch.id >= 10
        # check that at least some of the handshake messages are deleted
        ac1._evtracker.get_matching("DC_EVENT_IMAP_MESSAGE_DELETED")
        ac2._evtracker.get_matching("DC_EVENT_IMAP_MESSAGE_DELETED")
        ac1._evtracker.wait_securejoin_inviter_progress(1000)

    def test_qr_verified_group_and_chatting(self, acfactory, lp):
        ac1, ac2 = acfactory.get_two_online_accounts()
        lp.sec("ac1: create verified-group QR, ac2 scans and joins")
        chat1 = ac1.create_group_chat("hello", verified=True)
        assert chat1.is_verified()
        qr = chat1.get_join_qr()
        lp.sec("ac2: start QR-code based join-group protocol")
        chat2 = ac2.qr_join_chat(qr)
        assert chat2.id >= 10
        ac1._evtracker.wait_securejoin_inviter_progress(1000)

        lp.sec("ac2: read member added message")
        msg = ac2._evtracker.wait_next_incoming_message()
        assert msg.is_encrypted()
        assert "added" in msg.text.lower()

        lp.sec("ac1: send message")
        msg_out = chat1.send_text("hello")
        assert msg_out.is_encrypted()

        lp.sec("ac2: read message and check it's verified chat")
        msg = ac2._evtracker.wait_next_incoming_message()
        assert msg.text == "hello"
        assert msg.chat.is_verified()
        assert msg.is_encrypted()

        lp.sec("ac2: send message and let ac1 read it")
        chat2.send_text("world")
        msg = ac1._evtracker.wait_next_incoming_message()
        assert msg.text == "world"
        assert msg.is_encrypted()

    def test_set_get_contact_avatar(self, acfactory, data, lp):
        lp.sec("configuring ac1 and ac2")
        ac1, ac2 = acfactory.get_two_online_accounts()

        lp.sec("set ac1 and ac2 profile images")
        p = data.get_path("d.png")
        ac1.set_avatar(p)
        ac2.set_avatar(p)

        lp.sec("ac1: send message to ac2")
        ac1.create_chat(ac2).send_text("with avatar!")

        lp.sec("ac2: wait for receiving message and avatar from ac1")
        msg2 = ac2._evtracker.wait_next_messages_changed()
        assert msg2.chat.is_deaddrop()
        received_path = msg2.get_sender_contact().get_profile_image()
        assert open(received_path, "rb").read() == open(p, "rb").read()

        lp.sec("ac2: send back message")
        msg3 = msg2.create_chat().send_text("yes, i received your avatar -- how do you like mine?")
        assert msg3.is_encrypted()

        lp.sec("ac1: wait for receiving message and avatar from ac2")
        msg4 = ac1._evtracker.wait_next_incoming_message()
        received_path = msg4.get_sender_contact().get_profile_image()
        assert received_path is not None, "did not get avatar through encrypted message"
        assert open(received_path, "rb").read() == open(p, "rb").read()

        ac2._evtracker.consume_events()
        ac1._evtracker.consume_events()

        lp.sec("ac1: delete profile image from chat, and send message to ac2")
        ac1.set_avatar(None)
        msg5 = ac1.create_chat(ac2).send_text("removing my avatar")
        assert msg5.is_encrypted()

        lp.sec("ac2: wait for message along with avatar deletion of ac1")
        msg6 = ac2._evtracker.wait_next_incoming_message()
        assert msg6.get_sender_contact().get_profile_image() is None

    def test_add_remove_member_remote_events(self, acfactory, lp):
        ac1, ac2 = acfactory.get_two_online_accounts()
        ac1_addr = ac1.get_config("addr")
        # activate local plugin for ac2
        in_list = queue.Queue()

        class EventHolder:
            def __init__(self, **kwargs):
                self.__dict__.update(kwargs)

        class InPlugin:
            @account_hookimpl
            def ac_incoming_message(self, message):
                # we immediately accept the sender because
                # otherwise we won't see member_added contacts
                message.create_chat()

            @account_hookimpl
            def ac_chat_modified(self, chat):
                in_list.put(EventHolder(action="chat-modified", chat=chat))

            @account_hookimpl
            def ac_member_added(self, chat, contact, message):
                in_list.put(EventHolder(action="added", chat=chat, contact=contact, message=message))

            @account_hookimpl
            def ac_member_removed(self, chat, contact, message):
                in_list.put(EventHolder(action="removed", chat=chat, contact=contact, message=message))

        ac2.add_account_plugin(InPlugin())

        lp.sec("ac1: create group chat with ac2")
        chat = ac1.create_group_chat("hello", contacts=[ac2])

        lp.sec("ac1: send a message to group chat to promote the group")
        chat.send_text("afterwards promoted")
        ev = in_list.get(timeout=10)
        assert ev.action == "chat-modified"
        assert chat.is_promoted()
        assert sorted(x.addr for x in chat.get_contacts()) == \
            sorted(x.addr for x in ev.chat.get_contacts())

        lp.sec("ac1: add address2")
        # note that if the above create_chat() would not
        # happen we would not receive a proper member_added event
        contact2 = chat.add_contact("devnull@testrun.org")
        ev = in_list.get(timeout=10)
        assert ev.action == "chat-modified"
        ev = in_list.get(timeout=10)
        assert ev.action == "added"
        assert ev.message.get_sender_contact().addr == ac1_addr
        assert ev.contact.addr == "devnull@testrun.org"

        lp.sec("ac1: remove address2")
        chat.remove_contact(contact2)
        ev = in_list.get(timeout=10)
        assert ev.action == "chat-modified"
        ev = in_list.get(timeout=10)
        assert ev.action == "removed"
        assert ev.contact.addr == contact2.addr
        assert ev.message.get_sender_contact().addr == ac1_addr

        lp.sec("ac1: remove ac2 contact from chat")
        chat.remove_contact(ac2)
        ev = in_list.get(timeout=10)
        assert ev.action == "chat-modified"
        ev = in_list.get(timeout=10)
        assert ev.action == "removed"
        assert ev.message.get_sender_contact().addr == ac1_addr

    def test_set_get_group_image(self, acfactory, data, lp):
        ac1, ac2 = acfactory.get_two_online_accounts()

        lp.sec("create unpromoted group chat")
        chat = ac1.create_group_chat("hello")
        p = data.get_path("d.png")

        lp.sec("ac1: set profile image on unpromoted chat")
        chat.set_profile_image(p)
        ac1._evtracker.get_matching("DC_EVENT_CHAT_MODIFIED")
        assert not chat.is_promoted()

        lp.sec("ac1: send text to promote chat (XXX without contact added)")
        # XXX first promote the chat before adding contact
        # because DC does not send out profile images for unpromoted chats
        # otherwise
        chat.send_text("ac1: initial message to promote chat (workaround)")
        assert chat.is_promoted()
        assert chat.get_profile_image()

        lp.sec("ac2: check that initial message arrived")
        ac2.create_contact(ac1).create_chat()
        ac2._evtracker.get_matching("DC_EVENT_MSGS_CHANGED")

        lp.sec("ac1: add ac2 to promoted group chat")
        chat.add_contact(ac2)  # sends one message

        lp.sec("ac1: send a first message to ac2")
        chat.send_text("hi")  # sends another message
        assert chat.is_promoted()

        lp.sec("ac2: wait for receiving message from ac1")
        msg1 = ac2._evtracker.wait_next_incoming_message()
        msg2 = ac2._evtracker.wait_next_incoming_message()
        assert msg1.text == "hi" or msg2.text == "hi"
        assert msg1.chat.id == msg2.chat.id

        lp.sec("ac2: see if chat now has got the profile image")
        p2 = msg1.chat.get_profile_image()
        assert p2 is not None
        assert open(p2, "rb").read() == open(p, "rb").read()

        ac2._evtracker.consume_events()
        ac1._evtracker.consume_events()

        lp.sec("ac2: delete profile image from chat")
        msg1.chat.remove_profile_image()
        msg_back = ac1._evtracker.wait_next_incoming_message()
        assert msg_back.chat == chat
        assert chat.get_profile_image() is None

    def test_send_receive_locations(self, acfactory, lp):
        now = datetime.utcnow()
        ac1, ac2 = acfactory.get_two_online_accounts()

        lp.sec("ac1: create chat with ac2")
        chat1 = ac1.create_chat(ac2)
        chat2 = ac2.create_chat(ac1)

        assert not chat1.is_sending_locations()
        with pytest.raises(ValueError):
            ac1.set_location(latitude=0.0, longitude=10.0)

        ac1._evtracker.consume_events()
        ac2._evtracker.consume_events()

        lp.sec("ac1: enable location sending in chat")
        chat1.enable_sending_locations(seconds=100)
        assert chat1.is_sending_locations()
        ac1._evtracker.get_matching("DC_EVENT_SMTP_MESSAGE_SENT")

        ac1.set_location(latitude=2.0, longitude=3.0, accuracy=0.5)
        ac1._evtracker.get_matching("DC_EVENT_LOCATION_CHANGED")
        chat1.send_text("hello")
        ac1._evtracker.get_matching("DC_EVENT_SMTP_MESSAGE_SENT")

        lp.sec("ac2: wait for incoming location message")

        # currently core emits location changed before event_incoming message
        ac2._evtracker.get_matching("DC_EVENT_LOCATION_CHANGED")

        locations = chat2.get_locations()
        assert len(locations) == 1
        assert locations[0].latitude == 2.0
        assert locations[0].longitude == 3.0
        assert locations[0].accuracy == 0.5
        assert locations[0].timestamp > now

        contact = ac2.create_contact(ac1)
        locations2 = chat2.get_locations(contact=contact)
        assert len(locations2) == 1
        assert locations2 == locations

        contact = ac2.create_contact("nonexisting@example.org")
        locations3 = chat2.get_locations(contact=contact)
        assert not locations3

    def test_undecipherable_group(self, acfactory, lp):
        """Test how group messages that cannot be decrypted are
        handled.

        Group name is encrypted and plaintext subject is set to "..." in
        this case, so we should assign the messages to existing chat
        instead of creating a new one. Since there is no existing group
        chat, the messages should be assigned to 1-1 chat with the sender
        of the message.
        """

        lp.sec("creating and configuring three accounts")
        ac1, ac2, ac3 = acfactory.get_many_online_accounts(3)

        acfactory.introduce_each_other([ac1, ac2, ac3])

        lp.sec("ac3 reinstalls DC and generates a new key")
        ac3.stop_io()
        ac4 = acfactory.clone_online_account(ac3, pre_generated_key=False)
        ac4._configtracker.wait_finish()
        # Create contacts to make sure incoming messages are not treated as contact requests
        chat41 = ac4.create_chat(ac1)
        chat42 = ac4.create_chat(ac2)
        ac4.start_io()

        lp.sec("ac1: creating group chat with 2 other members")
        chat = ac1.create_group_chat("title", contacts=[ac2, ac3])

        lp.sec("ac1: send message to new group chat")
        msg = chat.send_text("hello")

        lp.sec("ac2: checking that the chat arrived correctly")
        msg = ac2._evtracker.wait_next_incoming_message()
        assert msg.text == "hello"
        assert msg.is_encrypted(), "Message is not encrypted"

        # ac4 cannot decrypt the message.
        # Error message should be assigned to the chat with ac1.
        lp.sec("ac4: checking that message is assigned to the sender chat")
        error_msg = ac4._evtracker.wait_next_incoming_message()
        assert error_msg.chat == chat41

        lp.sec("ac2: sending a reply to the chat")
        msg.chat.send_text("reply")
        reply = ac1._evtracker.wait_next_incoming_message()
        assert reply.text == "reply"
        assert reply.is_encrypted(), "Reply is not encrypted"

        lp.sec("ac4: checking that reply is assigned to ac2 chat")
        error_reply = ac4._evtracker.wait_next_incoming_message()
        assert error_reply.chat == chat42

        # Test that ac4 replies to error messages don't appear in the
        # group chat on ac1 and ac2.
        lp.sec("ac4: replying to ac1 and ac2")

        # Otherwise reply becomes a contact request.
        chat41.send_text("I can't decrypt your message, ac1!")
        chat42.send_text("I can't decrypt your message, ac2!")

        msg = ac1._evtracker.wait_next_incoming_message()
        assert msg.text == "I can't decrypt your message, ac1!"
        assert msg.is_encrypted(), "Message is not encrypted"
        assert msg.chat == ac1.create_chat(ac3)

        msg = ac2._evtracker.wait_next_incoming_message()
        assert msg.text == "I can't decrypt your message, ac2!"
        assert msg.is_encrypted(), "Message is not encrypted"
        assert msg.chat == ac2.create_chat(ac4)

    def test_immediate_autodelete(self, acfactory, lp):
        ac1 = acfactory.get_online_configuring_account()
        ac2 = acfactory.get_online_configuring_account(mvbox=False, move=False, sentbox=False)

        # "1" means delete immediately, while "0" means do not delete
        ac2.set_config("delete_server_after", "1")

        acfactory.wait_configure_and_start_io()

        imap2 = ac2.direct_imap
        imap2.idle_start()

        lp.sec("ac1: create chat with ac2")
        chat1 = ac1.create_chat(ac2)
        ac2.create_chat(ac1)

        sent_msg = chat1.send_text("hello")
        imap2.idle_check(terminate=False)

        msg = ac2._evtracker.wait_next_incoming_message()
        assert msg.text == "hello"

        imap2.idle_check(terminate=True)
        ac2._evtracker.get_info_contains("close/expunge succeeded")

        assert len(imap2.get_all_messages()) == 0

        # Mark deleted message as seen and check that read receipt arrives
        msg.mark_seen()
        ev = ac1._evtracker.get_matching("DC_EVENT_MSG_READ")
        assert ev.data1 == chat1.id
        assert ev.data2 == sent_msg.id

    def test_ephemeral_timer(self, acfactory, lp):
        ac1, ac2 = acfactory.get_two_online_accounts()

        lp.sec("ac1: create chat with ac2")
        chat1 = ac1.create_chat(ac2)
        chat2 = ac2.create_chat(ac1)

        lp.sec("ac1: set ephemeral timer to 60")
        chat1.set_ephemeral_timer(60)

        lp.sec("ac1: check that ephemeral timer is set for chat")
        assert chat1.get_ephemeral_timer() == 60
        chat1_summary = chat1.get_summary()
        assert chat1_summary["ephemeral_timer"] == {'Enabled': {'duration': 60}}

        lp.sec("ac2: receive system message about ephemeral timer modification")
        ac2._evtracker.get_matching("DC_EVENT_CHAT_EPHEMERAL_TIMER_MODIFIED")
        system_message1 = ac2._evtracker.wait_next_incoming_message()
        assert chat2.get_ephemeral_timer() == 60
        assert system_message1.is_system_message()

        # Disabled until markers are implemented
        # assert "Ephemeral timer: 60\n" in system_message1.get_message_info()

        lp.sec("ac2: send message to ac1")
        sent_message = chat2.send_text("message")
        assert sent_message.ephemeral_timer == 60
        assert "Ephemeral timer: 60\n" in sent_message.get_message_info()

        # Timer is started immediately for sent messages
        assert sent_message.ephemeral_timestamp is not None
        assert "Expires: " in sent_message.get_message_info()

        lp.sec("ac1: waiting for message from ac2")
        text_message = ac1._evtracker.wait_next_incoming_message()
        assert text_message.text == "message"
        assert text_message.ephemeral_timer == 60
        assert "Ephemeral timer: 60\n" in text_message.get_message_info()

        # Timer should not start until message is displayed
        assert text_message.ephemeral_timestamp is None
        assert "Expires: " not in text_message.get_message_info()
        text_message.mark_seen()
        text_message = ac1.get_message_by_id(text_message.id)
        assert text_message.ephemeral_timestamp is not None
        assert "Expires: " in text_message.get_message_info()

        lp.sec("ac2: set ephemeral timer to 0")
        chat2.set_ephemeral_timer(0)
        ac2._evtracker.get_matching("DC_EVENT_CHAT_EPHEMERAL_TIMER_MODIFIED")

        lp.sec("ac1: receive system message about ephemeral timer modification")
        ac1._evtracker.get_matching("DC_EVENT_CHAT_EPHEMERAL_TIMER_MODIFIED")
        system_message2 = ac1._evtracker.wait_next_incoming_message()
        assert system_message2.ephemeral_timer is None
        assert "Ephemeral timer: " not in system_message2.get_message_info()
        assert chat1.get_ephemeral_timer() == 0


class TestGroupStressTests:
    def test_group_many_members_add_leave_remove(self, acfactory, lp):
        accounts = acfactory.get_many_online_accounts(5)
        acfactory.introduce_each_other(accounts)
        ac1, ac5 = accounts.pop(), accounts.pop()

        lp.sec("ac1: creating group chat with 3 other members")
        chat = ac1.create_group_chat("title1", contacts=accounts)

        lp.sec("ac1: send message to new group chat")
        msg1 = chat.send_text("hello")
        assert msg1.is_encrypted()
        gossiped_timestamp = chat.get_summary()["gossiped_timestamp"]
        assert gossiped_timestamp > 0

        assert chat.num_contacts() == 3 + 1

        lp.sec("ac2: checking that the chat arrived correctly")
        ac2 = accounts[0]
        msg2 = ac2._evtracker.wait_next_incoming_message()
        assert msg2.text == "hello"
        print("chat is", msg2.chat)
        assert msg2.chat.num_contacts() == 4

        lp.sec("ac3: checking that 'ac4' is a known contact")
        ac3 = accounts[1]
        msg3 = ac3._evtracker.wait_next_incoming_message()
        assert msg3.text == "hello"
        ac3_contacts = ac3.get_contacts()
        assert len(ac3_contacts) == 4
        ac4_contacts = ac3.get_contacts(query=accounts[2].get_config("addr"))
        assert len(ac4_contacts) == 1

        lp.sec("ac2: removing one contact")
        to_remove = ac2.create_contact(accounts[-1])
        msg2.chat.remove_contact(to_remove)

        lp.sec("ac1: receiving system message about contact removal")
        sysmsg = ac1._evtracker.wait_next_incoming_message()
        assert to_remove.addr in sysmsg.text
        assert sysmsg.chat.num_contacts() == 3

        # Receiving message about removed contact does not reset gossip
        assert chat.get_summary()["gossiped_timestamp"] == gossiped_timestamp

        lp.sec("ac1: sending another message to the chat")
        chat.send_text("hello2")
        msg = ac2._evtracker.wait_next_incoming_message()
        assert msg.text == "hello2"
        assert chat.get_summary()["gossiped_timestamp"] == gossiped_timestamp

        lp.sec("ac1: adding fifth member to the chat")
        chat.add_contact(ac5)
        # Adding contact to chat resets gossiped_timestamp
        assert chat.get_summary()["gossiped_timestamp"] >= gossiped_timestamp

        lp.sec("ac2: receiving system message about contact addition")
        sysmsg = ac2._evtracker.wait_next_incoming_message()
        assert ac5.addr in sysmsg.text
        assert sysmsg.chat.num_contacts() == 4

        lp.sec("ac5: waiting for message about addition to the chat")
        sysmsg = ac5._evtracker.wait_next_incoming_message()
        msg = sysmsg.chat.send_text("hello!")
        # Message should be encrypted because keys of other members are gossiped
        assert msg.is_encrypted()

    def test_synchronize_member_list_on_group_rejoin(self, acfactory, lp):
        """
        Test that user recreates group member list when it joins the group again.
        ac1 creates a group with two other accounts: ac2 and ac3
        Then it removes ac2, removes ac3 and adds ac2 back.
        ac2 did not see that ac3 is removed, so it should rebuild member list from scratch.
        """
        lp.sec("setting up accounts, accepted with each other")
        accounts = acfactory.get_many_online_accounts(3)
        acfactory.introduce_each_other(accounts)
        ac1, ac2, ac3 = accounts

        lp.sec("ac1: creating group chat with 2 other members")
        chat = ac1.create_group_chat("title1", contacts=[ac2, ac3])
        assert not chat.is_promoted()

        lp.sec("ac1: send message to new group chat")
        msg = chat.send_text("hello")
        assert chat.is_promoted() and msg.is_encrypted()

        assert chat.num_contacts() == 3

        lp.sec("checking that the chat arrived correctly")
        for ac in accounts[1:]:
            msg = ac._evtracker.wait_next_incoming_message()
            assert msg.text == "hello"
            print("chat is", msg.chat)
            assert msg.chat.num_contacts() == 3

        lp.sec("ac1: removing ac2")
        chat.remove_contact(ac2)

        lp.sec("ac2: wait for a message about removal from the chat")
        msg = ac2._evtracker.wait_next_incoming_message()

        lp.sec("ac1: removing ac3")
        chat.remove_contact(ac3)

        lp.sec("ac1: adding ac2 back")
        # Group is promoted, message is sent automatically
        assert chat.is_promoted()
        chat.add_contact(ac2)

        lp.sec("ac2: check that ac3 is removed")
        msg = ac2._evtracker.wait_next_incoming_message()

        assert msg.chat.num_contacts() == chat.num_contacts()
        acfactory.dump_imap_summary(sys.stdout)


class TestOnlineConfigureFails:
    def test_invalid_password(self, acfactory):
        ac1, configdict = acfactory.get_online_config()
        ac1.update_config(dict(addr=configdict["addr"], mail_pw="123"))
        configtracker = ac1.configure()
        configtracker.wait_progress(500)
        configtracker.wait_progress(0)
        ev = ac1._evtracker.get_matching("DC_EVENT_ERROR_NETWORK")
        assert "cannot login" in ev.data2.lower()

    def test_invalid_user(self, acfactory):
        ac1, configdict = acfactory.get_online_config()
        ac1.update_config(dict(addr="x" + configdict["addr"], mail_pw=configdict["mail_pw"]))
        configtracker = ac1.configure()
        configtracker.wait_progress(500)
        configtracker.wait_progress(0)
        ev = ac1._evtracker.get_matching("DC_EVENT_ERROR_NETWORK")
        assert "cannot login" in ev.data2.lower()

    def test_invalid_domain(self, acfactory):
        ac1, configdict = acfactory.get_online_config()
        ac1.update_config((dict(addr=configdict["addr"] + "x", mail_pw=configdict["mail_pw"])))
        configtracker = ac1.configure()
        configtracker.wait_progress(500)
        configtracker.wait_progress(0)
        ev = ac1._evtracker.get_matching("DC_EVENT_ERROR_NETWORK")
        assert "could not connect" in ev.data2.lower()
