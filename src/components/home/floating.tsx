import { useEffect, useRef, useState } from "react";
import { ArrowUp, Bot, X } from "lucide-react";

import { WHATSAPP_URL } from "./shared";

type ChatMessage = { role: "user" | "assistant"; content: string };

const GREETING: ChatMessage = {
  role: "assistant",
  content:
    "Hi! I'm the Alligentics assistant. Ask me about our AI voice agents, chatbots, workflow automation, integrations, or how a discovery session works.",
};

function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.371-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 017.021 2.91 9.825 9.825 0 012.9 7.026c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.689 1.448h.005c6.558 0 11.893-5.335 11.896-11.893a11.821 11.821 0 00-3.488-8.413z" />
    </svg>
  );
}

function Chat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const next: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (!response.ok) throw new Error("Chat request failed");
      const data = (await response.json()) as { reply?: string };
      const reply = data.reply?.trim();
      if (!reply) throw new Error("Empty chat response");
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "I can't answer that right now. You can continue directly with the Alligentics team on WhatsApp.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {open ? (
        <div className="x-chatpanel" role="dialog" aria-label="Alligentics assistant">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div>
              <p className="font-display text-base font-semibold">Ask Alligentics</p>
              <p className="mt-0.5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--electric)]">
                <span className="x-live">
                  <i />
                </span>{" "}
                AI assistant
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
              className="x-iconbtn !h-9 !w-9"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div
            ref={scroller}
            className="space-y-3 overflow-y-auto p-4"
            style={{ height: "min(380px, 46vh)" }}
            aria-live="polite"
          >
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`x-chatmsg x-chatmsg--${message.role}`}
              >
                {message.content}
              </div>
            ))}
            {loading ? (
              <div className="x-chatmsg x-chatmsg--assistant">
                <i className="x-typing">
                  <b />
                  <b />
                  <b />
                </i>
              </div>
            ) : null}
          </div>

          <div className="border-t border-white/10 p-3">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    void send();
                  }
                }}
                placeholder="Ask about Alligentics…"
                aria-label="Message the Alligentics assistant"
                className="x-chatinput"
              />
              <button
                type="button"
                onClick={() => void send()}
                disabled={loading || !input.trim()}
                className="x-sendbtn"
                aria-label="Send message"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 py-1 text-xs font-medium text-[color:var(--electric)] hover:text-[color:var(--foreground)]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Continue on WhatsApp
            </a>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close Alligentics assistant" : "Open Alligentics assistant"}
        className="x-chatfab"
      >
        {open ? (
          <X className="h-5 w-5" />
        ) : (
          <Bot className="h-5 w-5 text-[color:var(--electric)]" />
        )}
        <span className="hidden sm:inline">{open ? "Close" : "Ask Alligentics"}</span>
      </button>
    </>
  );
}

export function FloatingActions() {
  return (
    <>
      <Chat />
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Alligentics on WhatsApp"
        title="Chat on WhatsApp"
        className="x-wafab"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </>
  );
}
