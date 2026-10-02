"use client";

import { FormEvent, useEffect, useState } from "react";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const openCallback = () => {
      setStatus("idle");
      setOpen(true);
    };
    window.addEventListener("open-whatsapp-callback", openCallback);
    return () => window.removeEventListener("open-whatsapp-callback", openCallback);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "WhatsApp callback request from urebarif.com");
    data.append("_template", "table");
    data.append("_captcha", "false");
    data.append("source_page", window.location.pathname);

    try {
      const response = await fetch("https://formsubmit.co/ajax/hello@urebarif.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
      window.gtag?.("event", "whatsapp_callback_request", { page: window.location.pathname });
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <button
        onClick={() => { setOpen(true); setStatus("idle"); }}
        aria-label="Request a WhatsApp callback"
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-foreground px-4 py-3.5 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-foreground-secondary print:hidden ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#25D366]">
          <svg className="h-4.5 w-4.5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
          </svg>
        </span>
        <span className="hidden sm:block">Request WhatsApp callback</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="whatsapp-callback-title">
          <button className="absolute inset-0 cursor-default" onClick={() => setOpen(false)} aria-label="Close callback form" />
          <div className="relative w-full max-w-lg rounded-t-3xl bg-white p-7 shadow-2xl sm:rounded-3xl sm:p-9">
            <button onClick={() => setOpen(false)} className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-surface text-muted hover:text-foreground" aria-label="Close">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 6l12 12M18 6 6 18" strokeWidth="2" strokeLinecap="round" /></svg>
            </button>

            {status === "success" ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-accent/10 text-accent">
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m5 12 4 4L19 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h2 id="whatsapp-callback-title" className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold">Request received</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">I’ll contact you on WhatsApp within 12 hours. No group messages, no automated sales sequence.</p>
                <button onClick={() => setOpen(false)} className="mt-7 rounded-xl bg-foreground px-6 py-3 text-sm font-bold text-white">Done</button>
              </div>
            ) : (
              <>
                <p className="text-accent text-xs font-bold uppercase tracking-widest">WhatsApp callback</p>
                <h2 id="whatsapp-callback-title" className="mt-3 font-[family-name:var(--font-jakarta)] text-2xl font-extrabold tracking-tight">Leave your number. I’ll message you.</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">Share the best WhatsApp number and a little context. I’ll personally get back to you within 12 hours.</p>

                <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                  <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                  <div>
                    <label htmlFor="callback-name" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">Name</label>
                    <input id="callback-name" name="name" required autoComplete="name" placeholder="Your name" className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
                  </div>
                  <div>
                    <label htmlFor="callback-phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">WhatsApp number</label>
                    <input id="callback-phone" name="whatsapp_number" required inputMode="tel" autoComplete="tel" placeholder="+1 305 555 0123" className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
                  </div>
                  <div>
                    <label htmlFor="callback-message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">What do you need help with?</label>
                    <textarea id="callback-message" name="message" rows={3} placeholder="Meta Ads, Google Ads, SEO, growth strategy..." className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
                  </div>
                  {status === "error" && <p className="text-sm font-medium text-red-600">The form did not go through. Please email hello@urebarif.com and I’ll reply there.</p>}
                  <button disabled={status === "sending"} className="w-full rounded-xl bg-foreground px-5 py-4 text-sm font-bold text-white transition hover:bg-foreground-secondary disabled:cursor-wait disabled:opacity-60">
                    {status === "sending" ? "Sending request..." : "Request WhatsApp callback"}
                  </button>
                  <p className="text-center text-[11px] leading-relaxed text-muted-light">Your number is used only to respond to this request.</p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
