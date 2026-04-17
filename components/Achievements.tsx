type Achievement = {
  value: string;
  label: string;
  detail: string;
};

type AchievementsProps = {
  items: Achievement[];
};

export default function Achievements({ items }: AchievementsProps) {
  return (
    <section id="achievements" className="scroll-mt-32">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Achievements</p>
        <h2 className="text-3xl font-semibold text-slate-100">Metrics that matter</h2>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((stat) => (
          <article
            key={stat.label}
            className="rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/70 to-slate-950 p-6"
          >
            <p className="text-3xl font-bold text-emerald-400">{stat.value}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
            <p className="mt-3 text-sm text-slate-300">{stat.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
