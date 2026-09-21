"use client";

import type { FormEvent } from "react";
import { useState, useRef } from "react";

const API_URL = "#";

export function SeoForm() {
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
          body: JSON.stringify({ formType: "seo", ...data }),
        });
      }
      window.gtag?.("event", "form_submission", {
        form_type: "seo",
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
          I&apos;ll analyze your SEO needs and get back to you within 24 hours
          with a tailored strategy.
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
        SEO Services Inquiry
      </h3>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="seo-name"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Full Name *
          </label>
          <input
            id="seo-name"
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
            htmlFor="seo-company"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Company
          </label>
          <input
            id="seo-company"
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
            htmlFor="seo-email"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Email *
          </label>
          <input
            id="seo-email"
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
            htmlFor="seo-website"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Website *
          </label>
          <input
            id="seo-website"
            name="website"
            type="url"
            required
            autoComplete="url"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="https://yoursite.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="seo-locations"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Target Locations
          </label>
          <input
            id="seo-locations"
            name="targetLocations"
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="e.g. Miami FL, New York, Nationwide"
          />
        </div>
        <div>
          <label
            htmlFor="seo-services"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Main Services / Products
          </label>
          <input
            id="seo-services"
            name="mainServices"
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="e.g. Auto detailing, rehab centers"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="seo-status"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Current SEO Status
          </label>
          <select
            id="seo-status"
            name="seoStatus"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">Select status</option>
            <option value="Never done SEO">Never done SEO</option>
            <option value="Some basic SEO">Some basic SEO</option>
            <option value="Working with another provider">
              Working with another provider
            </option>
            <option value="In-house team">In-house team</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="seo-timeline"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Preferred Timeline
          </label>
          <select
            id="seo-timeline"
            name="timeline"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">Select timeline</option>
            <option value="ASAP">ASAP</option>
            <option value="Within 1 month">Within 1 month</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="Just exploring">Just exploring</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="seo-competitors"
          className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
        >
          Primary Competitors
        </label>
        <textarea
          id="seo-competitors"
          name="competitors"
          rows={2}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
          placeholder="List your main competitors (names or URLs)"
        />
      </div>

      <div>
        <label
          htmlFor="seo-goals"
          className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
        >
          SEO Goals
        </label>
        <textarea
          id="seo-goals"
          name="goals"
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
          placeholder="What do you want to achieve with SEO? (e.g. rank for specific keywords, increase organic traffic)"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="seo-consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
        />
        <label htmlFor="seo-consent" className="text-xs text-muted leading-relaxed">
          I agree to the Privacy Policy and consent to being contacted.
        </label>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-shine w-full bg-foreground text-white font-semibold py-4 rounded-xl hover:bg-foreground-secondary transition-all duration-300 hover:-translate-y-0.5 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Submitting..." : "Submit SEO Inquiry"}
      </button>
    </form>
  );
}
