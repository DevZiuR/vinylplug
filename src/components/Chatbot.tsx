import React, { useMemo, useRef, useState, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "Welcome to VinylPlugFL. I can help with wraps, decals, chrome deletes, and tints — pricing, availability, and recommendations.",
      timestamp: Date.now(),
    },
  ]);

  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (viewportRef.current) {
      viewportRef.current.scrollTop = viewportRef.current.scrollHeight;
    }
  }, [messages, open]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simple concierge response for now (stub). Could be wired to an API later.
    const replyText = getAssistantReply(text);
    const assistantMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: replyText,
      timestamp: Date.now() + 1,
    };

    // Simulate slight delay for realism
    setTimeout(() => setMessages((prev) => [...prev, assistantMsg]), 450);
  };

  const headerGlow = "shadow-[0_0_30px]";

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Action Button */}
      {!open && (
        <button
          aria-label="Open chat"
          onClick={() => setOpen(true)}
          className="group relative flex items-center gap-2 rounded-full border border-primary/30 bg-[hsl(var(--card))] text-foreground px-5 py-3 shadow-glow backdrop-blur-md transition-all hover:scale-[1.03] hover:border-primary/50"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-10" />
          <MessageCircle className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium tracking-wide">Chat with us</span>
        </button>
      )}

      {/* Chat Panel */}
      {open && (
        <div
          className="w-[90vw] max-w-[360px] overflow-hidden rounded-2xl border border-border/60 bg-[hsl(var(--popover))] text-[hsl(var(--popover-foreground))] shadow-elegant backdrop-blur-xl animate-slide-up"
        >
          {/* Header */}
          <div className={`relative flex items-center justify-between px-4 py-3 bg-[hsl(var(--card))] border-b border-border/60 ${headerGlow}`}>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-wide">Concierge</div>
                <div className="text-[11px] text-muted-foreground">VinylPlugFL</div>
              </div>
            </div>
            <button
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            {/* Subtle glow border */}
            <div className="pointer-events-none absolute inset-0 rounded-t-2xl ring-1 ring-primary/10" />
          </div>

          {/* Messages */}
          <div
            ref={viewportRef}
            className="max-h-[50vh] overflow-y-auto px-4 py-3 bg-[linear-gradient(180deg,hsl(var(--popover)_/_96%)_0%,hsl(var(--card)_/_96%)_100%)]"
          >
            {messages.map((m) => (
              <div key={m.id} className="mb-3">
                <div
                  className={
                    m.role === "user"
                      ? "ml-auto max-w-[85%] rounded-xl rounded-br-sm bg-primary text-primary-foreground px-3 py-2 text-sm shadow-glow"
                      : "mr-auto max-w-[90%] rounded-xl rounded-bl-sm border border-border/60 bg-[hsl(var(--card))] px-3 py-2 text-sm text-foreground/90"
                  }
                >
                  {m.content}
                </div>
                <div className="mt-1 text-[10px] text-muted-foreground">
                  {formatTime(m.timestamp)}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-border/60 bg-[hsl(var(--card))] p-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-end gap-2"
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about wraps, tints, decals, chrome deletes, pricing or availability…"
                rows={1}
                className="min-h-[42px] max-h-[120px] grow resize-none rounded-xl border border-border/60 bg-[hsl(var(--popover))] px-3 py-2 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary/40 focus:shadow-glow"
              />
              <button
                type="submit"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-glow transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                disabled={!input.trim()}
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

function formatTime(ts: number) {
  const d = new Date(ts);
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function getAssistantReply(userText: string) {
  const t = userText.toLowerCase();
  if (/(price|cost|starting|quote)/.test(t)) {
    return "Full vehicle wraps start around $1,500–$1,800 depending on vehicle and material. Decals and chrome deletes are quoted by coverage, and tints vary by film and windows. Share your vehicle (year/make/model) and service, and I’ll estimate it for you.";
  }
  if (/(book|availability|schedule|appointment|when)/.test(t)) {
    return "We offer flexible scheduling. Tell me your preferred date/time window and service (wrap, tint, decals, or chrome delete), and I’ll check availability for Kissimmee / Central Florida.";
  }
  if (/(wrap|vinyl|tint|decal|chrome)/.test(t)) {
    return "We specialize in wraps, decals, chrome deletes, and tints using premium films (3M/Avery). Let me know your vehicle, color/finish (or tint %), and any deadlines, and I’ll recommend options.";
  }
  if (/(location|where|area|service area)/.test(t)) {
    return "We’re based in Kissimmee, FL and serve Central Florida. Mobile options are available depending on the service and workspace.";
  }
  return "Got it! To help you faster, please share your vehicle (year/make/model), the service (wrap/tint/decals/chrome delete), desired color/finish or tint %, timeframe, and budget range.";
}

export default Chatbot;
