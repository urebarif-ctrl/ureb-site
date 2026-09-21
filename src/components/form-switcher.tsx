"use client";

import { useState } from "react";
import { ContactForm } from "@/components/contact-form";
import { PpcForm } from "@/components/forms/ppc-form";
import { SeoForm } from "@/components/forms/seo-form";
import { StrategyForm } from "@/components/forms/strategy-form";

const TABS = [
  { id: "general", label: "General Inquiry" },
  { id: "ppc", label: "PPC & Ads" },
  { id: "seo", label: "SEO" },
  { id: "strategy", label: "Strategy Call" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function FormSwitcher() {
  const [activeTab, setActiveTab] = useState<TabId>("general");

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-foreground text-white shadow-md"
                : "bg-surface border border-border text-muted hover:text-foreground hover:border-border-strong"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "general" && <ContactForm />}
      {activeTab === "ppc" && <PpcForm />}
      {activeTab === "seo" && <SeoForm />}
      {activeTab === "strategy" && <StrategyForm />}
    </div>
  );
}
