"use client";

import type { FormEvent } from "react";
import { useState, useRef } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const website = data.get("website") as string;
    const budget = data.get("budget") as string;
    const industry = data.get("industry") as string;
    const message = data.get("message") as string;

    const subject = `Website Inquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      website ? `Website: ${website}` : null,
      budget ? `Monthly Ad Budget: ${budget}` : null,
      industry ? `Industry: ${industry}` : null,
      ``,
      `Message:`,
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:hello@urebarif.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
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
          Message received!
        </h3>
        <p className="text-muted">
          I&apos;ll get back to you within 24 hours. Looking forward to learning
          about your business.
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
        Send me a message
      </h3>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Name
          </label>
          <input
            id="name"
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
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="website"
          className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
        >
          Website
        </label>
        <input
          id="website"
          name="website"
          type="url"
          autoComplete="url"
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          placeholder="https://yoursite.com"
        />
      </div>

      <div>
        <label
          htmlFor="budget"
          className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
        >
          Monthly Ad Budget (USD)
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        >
          <option value="">Select a range</option>
          <option value="Under $5,000">Under $5,000</option>
          <option value="$5,000 - $15,000">$5,000 – $15,000</option>
          <option value="$15,000 - $50,000">$15,000 – $50,000</option>
          <option value="$50,000+">$50,000+</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="industry"
          className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
        >
          Industry
        </label>
        <select
          id="industry"
          name="industry"
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        >
          <option value="">Select your industry</option>
          <option value="Automotive">Automotive</option>
          <option value="Rehab & Recovery">Rehab & Recovery</option>
          <option value="Exterior Cleaning">Exterior Cleaning</option>
          <option value="E-commerce">E-commerce</option>
          <option value="SaaS">SaaS</option>
          <option value="Local Services">Local Services</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
        >
          Tell me about your business
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
          placeholder="What are you looking to achieve? What's your biggest marketing challenge right now?"
        />
      </div>

      <button
        type="submit"
        className="btn-shine w-full bg-foreground text-white font-semibold py-4 rounded-xl hover:bg-foreground-secondary transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
      >
        Send Message
      </button>

      <p className="text-xs text-muted text-center">
        Or email me directly at{" "}
        <a
          href="mailto:hello@urebarif.com"
          className="text-accent hover:underline"
        >
          hello@urebarif.com
        </a>
      </p>
    </form>
  );
}
