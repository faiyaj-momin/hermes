type JourneyItem = {
  year: string;
  title: string;
  description: string;
  highlights: string[];
};

type JourneyProps = {
  items: JourneyItem[];
};

export default function Journey({ items }: JourneyProps) {
  return (
    <section id="journey" className="scroll-mt-32">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Journey</p>
        <h2 className="text-3xl font-semibold text-slate-100">Steps along the JS path</h2>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-white/5 bg-slate-900/70 p-6 shadow-sm shadow-slate-950/40"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {item.year}
              </span>
              <span className="text-xs font-semibold tracking-wide text-slate-400">{item.title}</span>
            </div>
            <p className="mt-3 text-base leading-relaxed text-slate-300">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.highlights.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
