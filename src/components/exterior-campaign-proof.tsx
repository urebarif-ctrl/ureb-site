const months = [
  {
    month: "June 2026",
    total: "124 visible leads",
    cpl: "$12.05 visible CPL",
    rows: [
      ["Window Cleaning | ABO+", "87", "$10.39", "Off"],
      ["Window Cleaning | ABO+", "26", "$17.42", "Off"],
      ["Window Cleaning | ABO+", "11", "$12.48", "Off"],
    ],
  },
  {
    month: "July 2026",
    total: "157 visible leads",
    cpl: "$14.07 visible CPL",
    rows: [
      ["Window Cleaning | ABO+", "60", "$9.76", "Off"],
      ["Window Cleaning | ABO+", "46", "$14.61", "Off"],
      ["Pressure Washing", "31+", "Mixed", "Tested"],
    ],
  },
  {
    month: "August 2026",
    total: "167 visible leads",
    cpl: "$13.54 visible CPL",
    rows: [
      ["Window Cleaning | ABO+", "56", "$10.94", "Off"],
      ["Window Cleaning | ABO+", "26", "$12.32", "Off"],
      ["Window Cleaning | ABO+", "21", "$14.47", "Active"],
    ],
  },
];

export function ExteriorCampaignProof() {
  return (
    <section className="border-y border-border bg-[#f7f8fa] py-16 md:py-20" aria-labelledby="campaign-proof-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Campaign proof</p>
          <h2 id="campaign-proof-heading" className="mt-3 font-[family-name:var(--font-jakarta)] text-3xl font-extrabold tracking-tight md:text-5xl">
            Real Meta Ads Manager captures, translated into readable proof.
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            The underlying June, July and August 2026 Meta Ads Manager screenshots are client-safe captures with account identifiers redacted. I have kept the visible campaign context, lead counts and cost-per-lead figures while removing client identity.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {months.map((month) => (
            <article key={month.month} className="overflow-hidden rounded-2xl border border-[#d7dbe0] bg-white shadow-sm">
              <div className="border-b border-[#d7dbe0] bg-[#f1f3f5] px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#1877f2]">Meta Ads Manager</p>
                    <h3 className="mt-1 text-sm font-bold text-[#1c1e21]">{month.month}</h3>
                  </div>
                  <div className="rounded-md bg-white px-2.5 py-1.5 text-[10px] font-semibold text-[#606770] ring-1 ring-[#ccd0d5]">Columns: Performance</div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[430px] border-collapse text-left text-[11px]">
                  <thead className="bg-white text-[#606770]">
                    <tr>
                      <th className="border-b border-r border-[#e4e6eb] px-3 py-2 font-semibold">Campaign</th>
                      <th className="border-b border-r border-[#e4e6eb] px-3 py-2 font-semibold">Results</th>
                      <th className="border-b border-r border-[#e4e6eb] px-3 py-2 font-semibold">Cost / result</th>
                      <th className="border-b border-[#e4e6eb] px-3 py-2 font-semibold">Delivery</th>
                    </tr>
                  </thead>
                  <tbody>
                    {month.rows.map((row, index) => (
                      <tr key={index} className={index % 2 ? "bg-[#fafbfc]" : "bg-white"}>
                        <td className="border-b border-r border-[#edf0f2] px-3 py-2.5 font-medium text-[#1877f2]">{row[0]}</td>
                        <td className="border-b border-r border-[#edf0f2] px-3 py-2.5 font-semibold text-[#1c1e21]">{row[1]}</td>
                        <td className="border-b border-r border-[#edf0f2] px-3 py-2.5 text-[#1c1e21]">{row[2]}</td>
                        <td className="border-b border-[#edf0f2] px-3 py-2.5 text-[#606770]">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-2 border-t border-[#d7dbe0] bg-white">
                <div className="border-r border-[#d7dbe0] p-4">
                  <p className="text-[10px] uppercase tracking-wider text-muted">Visible month total</p>
                  <p className="mt-1 font-[family-name:var(--font-jakarta)] text-lg font-extrabold">{month.total}</p>
                </div>
                <div className="p-4">
                  <p className="text-[10px] uppercase tracking-wider text-muted">Visible average</p>
                  <p className="mt-1 font-[family-name:var(--font-jakarta)] text-lg font-extrabold">{month.cpl}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center rounded-2xl border border-border bg-white p-6 md:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Independent client proof</p>
            <h3 className="mt-2 font-[family-name:var(--font-jakarta)] text-2xl font-extrabold">5.0 public rating for the 35+ account engagement</h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
              The public client review confirms daily management and optimization across more than 35 window-cleaning and exterior-cleaning accounts, including performance troubleshooting, new strategy testing and scaling stronger approaches.
            </p>
          </div>
          <div className="rounded-2xl bg-foreground px-6 py-5 text-center text-white">
            <p className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold">35+</p>
            <p className="mt-1 text-xs text-white/65">ad accounts</p>
            <p className="mt-3 text-accent font-bold">★★★★★ 5.0</p>
          </div>
        </div>

        <p className="mt-5 text-xs leading-relaxed text-muted-light">
          Evidence note: client and account names remain intentionally redacted. The values shown above are limited to the visible campaign proof saved with this case study and should not be read as portfolio-wide averages.
        </p>
      </div>
    </section>
  );
}
