"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

export type Conversation = {
  initial: string;
  name: string;
  preview: string;
  time: string;
  status: string;
  bookingHref?: string;
};

const starterMessages = [
  { direction: "incoming", text: "Halo, saya siap membantu kebutuhan terkait masa tinggal dan properti Anda." },
  { direction: "outgoing", text: "Terima kasih. Saya ingin memastikan semua kebutuhan sebelum check-in sudah lengkap." },
  { direction: "incoming", text: "Tentu. Detail dan pembaruan berikutnya akan saya kirim melalui percakapan ini." },
] as const;

export function MessageCenter({ conversations, owner = false }: { conversations: Conversation[]; owner?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [draft, setDraft] = useState("");
  const [sentMessages, setSentMessages] = useState<Record<number, string[]>>({});
  const [notice, setNotice] = useState("");
  const active = conversations[activeIndex];
  const messages = useMemo(() => sentMessages[activeIndex] ?? [], [activeIndex, sentMessages]);

  function sendMessage(event: FormEvent) {
    event.preventDefault();
    const message = draft.trim();
    if (!message) {
      setNotice("Tulis pesan terlebih dahulu.");
      return;
    }
    setSentMessages((current) => ({ ...current, [activeIndex]: [...(current[activeIndex] ?? []), message] }));
    setDraft("");
    setNotice("Pesan dummy berhasil dikirim.");
  }

  return (
    <div className={`message-layout ${owner ? "workspace-messages" : ""}`}>
      <aside aria-label="Daftar percakapan">
        {conversations.map((conversation, index) => (
          <button key={conversation.name} type="button" className={activeIndex === index ? "is-active" : ""} onClick={() => { setActiveIndex(index); setNotice(""); }}>
            <span>{conversation.initial}</span>
            <p><strong>{conversation.name}</strong><small>{conversation.preview}</small></p>
            <time>{conversation.time}</time>
          </button>
        ))}
      </aside>
      <section>
        <header>
          <span>{active.initial}</span>
          <p><strong>{active.name}</strong><small>{active.status}</small></p>
          {active.bookingHref ? <Link className="button button--secondary button--small" href={active.bookingHref}>Detail booking</Link> : <i aria-hidden="true" />}
        </header>
        <div className="chat-thread" aria-live="polite">
          <time>HARI INI</time>
          {starterMessages.map((message, index) => <div key={index} className={`chat-bubble chat-bubble--${message.direction}`}>{index === 0 ? `${active.name.split(" · ")[0]}, ${message.text.toLowerCase()}` : message.text}</div>)}
          {messages.map((message, index) => <div key={`${message}-${index}`} className="chat-bubble chat-bubble--outgoing">{message}</div>)}
        </div>
        {notice ? <p className="compose-notice" role="status">{notice}</p> : null}
        <form className="message-compose" onSubmit={sendMessage}>
          <button type="button" onClick={() => setNotice("Pemilih lampiran dummy dibuka.")} aria-label="Tambah lampiran">+</button>
          <input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Tulis pesan..." aria-label="Tulis pesan" />
          <button type="submit">Kirim</button>
        </form>
      </section>
    </div>
  );
}
