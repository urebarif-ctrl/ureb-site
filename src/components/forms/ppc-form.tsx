"use client";

import type { FormEvent } from "react";
import { useState, useRef } from "react";

const API_URL = "#";

export function PpcForm() {
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
          body: JSON.stringify({ formType: "ppc", ...data }),
        });
      }
      window.gtag?.("event", "form_submission", {
        form_type: "ppc",
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
          Request received!
        </h3>
        <p className="text-muted">
          I&apos;ll review your PPC requirements and get back to you within 24
          hours with a tailored proposal.
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
        PPC &amp; Paid Advertising Inquiry
      </h3>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="ppc-name"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Full Name *
          </label>
          <input
            id="ppc-name"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label
            htmlFor="ppc-company"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Company
          </label>
          <input
            id="ppc-company"
            name="company"
            type="text"
            autoComplete="organization"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="Company name"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="ppc-email"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Email *
          </label>
          <input
            id="ppc-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label
            htmlFor="ppc-phone"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Phone
          </label>
          <input
            id="ppc-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="ppc-website"
          className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
        >
          Website
        </label>
        <input
          id="ppc-website"
          name="website"
          type="url"
          autoComplete="url"
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          placeholder="https://yoursite.com"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="ppc-platform"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Advertising Platform *
          </label>
          <select
            id="ppc-platform"
            name="platform"
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">Select platform</option>
            <option value="Meta Ads">Meta Ads</option>
            <option value="Google Ads">Google Ads</option>
            <option value="Both">Both</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="ppc-budget"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Current Monthly Ad Spend
          </label>
          <select
            id="ppc-budget"
            name="monthlySpend"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">Select a range</option>
            <option value="Under $1,000">Under $1,000</option>
            <option value="$1,000 - $5,000">$1,000 - $5,000</option>
            <option value="$5,000 - $15,000">$5,000 - $15,000</option>
            <option value="$15,000 - $50,000">$15,000 - $50,000</option>
            <option value="$50,000+">$50,000+</option>
            <option value="Not running ads yet">Not running ads yet</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="ppc-market"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Target Market *
          </label>
          <select
            id="ppc-market"
            name="targetMarket"
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">Select market</option>
            <option value="US">US</option>
            <option value="UK">UK</option>
            <option value="UAE">UAE</option>
            <option value="Global">Global</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="ppc-objective"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Primary Objective *
          </label>
          <select
            id="ppc-objective"
            name="objective"
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">Select objective</option>
            <option value="Lead Generation">Lead Generation</option>
            <option value="E-commerce Sales">E-commerce Sales</option>
            <option value="Brand Awareness">Brand Awareness</option>
            <option value="App Installs">App Installs</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="ppc-challenges"
          className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
        >
          Current Challenges
        </label>
        <textarea
          id="ppc-challenges"
          name="challenges"
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
          placeholder="What challenges are you facing with your current ad campaigns?"
        />
      </div>

      <div>
        <label
          htmlFor="ppc-start"
          className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
        >
          Desired Start Date
        </label>
        <input
          id="ppc-start"
          name="startDate"
          type="date"
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="ppc-consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
        />
        <label htmlFor="ppc-consent" className="text-xs text-muted leading-relaxed">
          I agree to the Privacy Policy and consent to being contacted.
        </label>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-shine w-full bg-foreground text-white font-semibold py-4 rounded-xl hover:bg-foreground-secondary transition-all duration-300 hover:-translate-y-0.5 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Submitting..." : "Submit PPC Inquiry"}
      </button>
    </form>
  );
}
