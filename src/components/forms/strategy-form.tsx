"use client";

import type { FormEvent } from "react";
import { useState, useRef } from "react";

const API_URL = "#";

export function StrategyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setSubmitting(true);

    const data = Object.fromEntries(new FormData(form));

    try {
      if (API_URL !== "#") {
        await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ formType: "strategy", ...data }),
        });
      }
      window.gtag?.("event", "form_submission", {
        form_type: "strategy_call",
        page: window.location.pathname,
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-surface border border-border rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold mb-2">
          Call booked!
        </h3>
        <p className="text-muted">
          I&apos;ll confirm your strategy call details within 24 hours. Looking
          forward to connecting.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-surface border border-border rounded-2xl p-8 md:p-10 space-y-5"
    >
      <h3 className="font-[family-name:var(--font-jakarta)] text-xl font-extrabold mb-2">
        Book a Strategy Call
      </h3>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="strategy-name"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Name *
          </label>
          <input
            id="strategy-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="strategy-email"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Email *
          </label>
          <input
            id="strategy-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="strategy-phone"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Phone
          </label>
          <input
            id="strategy-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="+1 (555) 000-0000"
          />
        </div>
        <div>
          <label
            htmlFor="strategy-company"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Company
          </label>
          <input
            id="strategy-company"
            name="company"
            type="text"
            autoComplete="organization"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="Company name"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="strategy-website"
          className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
        >
          Website
        </label>
        <input
          id="strategy-website"
          name="website"
          type="url"
          autoComplete="url"
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          placeholder="https://yoursite.com"
        />
      </div>

      <div>
        <label
          htmlFor="strategy-service"
          className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
        >
          Service of Interest *
        </label>
        <select
          id="strategy-service"
          name="serviceInterest"
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        >
          <option value="">Select a service</option>
          <option value="Meta Ads">Meta Ads</option>
          <option value="Google Ads">Google Ads</option>
          <option value="SEO">SEO</option>
          <option value="Growth Consulting">Growth Consulting</option>
          <option value="Not Sure">Not Sure</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="strategy-summary"
          className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
        >
          Project Summary
        </label>
        <textarea
          id="strategy-summary"
          name="projectSummary"
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
          placeholder="Brief overview of what you're looking to achieve"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="strategy-date"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Preferred Date
          </label>
          <input
            id="strategy-date"
            name="preferredDate"
            type="date"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="strategy-timezone"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Time Zone
          </label>
          <select
            id="strategy-timezone"
            name="timezone"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">Select time zone</option>
            <option value="EST (UTC-5)">EST (UTC-5)</option>
            <option value="CST (UTC-6)">CST (UTC-6)</option>
            <option value="MST (UTC-7)">MST (UTC-7)</option>
            <option value="PST (UTC-8)">PST (UTC-8)</option>
            <option value="GMT (UTC+0)">GMT (UTC+0)</option>
            <option value="CET (UTC+1)">CET (UTC+1)</option>
            <option value="GST (UTC+4)">GST (UTC+4)</option>
            <option value="PKT (UTC+5)">PKT (UTC+5)</option>
            <option value="IST (UTC+5:30)">IST (UTC+5:30)</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input
          id="strategy-consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
        />
        <label htmlFor="strategy-consent" className="text-xs text-muted leading-relaxed">
          I agree to the Privacy Policy and consent to being contacted.
        </label>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-shine w-full bg-foreground text-white font-semibold py-4 rounded-xl hover:bg-foreground-secondary transition-all duration-300 hover:-translate-y-0.5 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Submitting..." : "Book Strategy Call"}
      </button>
    </form>
  );
}
