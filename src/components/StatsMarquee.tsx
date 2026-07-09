const stats = [
  { value: "3", label: "Branches in Lahore" },
  { value: "5+", label: "Years of Experience" },
  { value: "ISF", label: "Certified Facility" },
  { value: "2", label: "Ladies & Gents Wings" },
  { value: "4", label: "Membership Plan Options" },
];

export default function StatsMarquee() {
  const doubled = [...stats, ...stats];
  return (
    <div className="overflow-hidden border-y border-line bg-canvas-soft py-6">
      <div className="flex w-max animate-marquee gap-16">
        {doubled.map((s, i) => (
          <div key={i} className="flex items-baseline gap-3 whitespace-nowrap">
            <span className="font-display text-3xl text-coral">{s.value}</span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}