const heroBadges = [
  "Next.js",
  "React",
  "Express",
  "Node.js",
  "TailwindCSS",
  "DevOps",
  "Hobbyist Deployments",
];

export default function Hero() {
  return (
    <section id="hero" className="mt-24 scroll-mt-32 rounded-3xl bg-gradient-to-br from-slate-900/70 via-slate-950 to-slate-950 p-8 shadow-2xl shadow-emerald-500/20 sm:p-10">
      <div className="flex flex-col gap-6">
        <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">JS Environment Developer</p>
        <h1 className="text-4xl font-semibold leading-tight text-slate-50 md:text-5xl">
          Building resilient React + Next.js experiences, wiring Express APIs, and shepherding hobby projects into dependable deployments.
        </h1>
        <p className="max-w-3xl text-lg text-slate-300">
          I architect end-to-end JavaScript environments—crafting fast Next.js frontends, REST and realtime APIs on Node/Express, styling with Tailwind, and automating DevOps so each hobby build feels like production-ready code.
        </p>
        <div className="flex flex-wrap gap-3">
          {heroBadges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200"
            >
              {badge}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-emerald-400"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300 transition hover:border-emerald-400 hover:text-white"
          >
            Contact Me
          </a>
        </div>
        <p className="text-sm text-slate-400">
          Hobby builds are deployed via Vercel, Render, or self-managed Node servers—DevOps automation keeps uptime high and iterations fast.
        </p>
      </div>
    </section>
  );
}
