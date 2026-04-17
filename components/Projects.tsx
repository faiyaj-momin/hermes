type Project = {
  name: string;
  description: string;
  stack: string[];
  result: string;
  link: string;
};

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="scroll-mt-32">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Projects</p>
        <h2 className="text-3xl font-semibold text-slate-100">Recent developments & hobby builds</h2>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-2xl border border-white/5 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-emerald-500/60"
          >
            <div className="flex items-center justify-between text-slate-100">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-300"
              >
                Live
              </a>
            </div>
            <p className="mt-3 text-sm text-slate-300">{project.description}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{project.result}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
