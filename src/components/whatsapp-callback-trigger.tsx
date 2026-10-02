"use client";

export function WhatsAppCallbackTrigger() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-whatsapp-callback"))}
      className="text-left text-sm font-semibold text-accent transition-colors hover:text-foreground"
    >
      Request a WhatsApp callback
    </button>
  );
}
