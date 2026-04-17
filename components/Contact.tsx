export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-32">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Contact</p>
        <h2 className="text-3xl font-semibold text-slate-100">Clients & collaborators</h2>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="rounded-2xl border border-white/5 bg-slate-900/70 p-6">
          <p className="text-lg text-slate-200">
            I schedule spare-time sprints for hobby projects, consulting, and experimental deployments. Tell me about your idea, the level of DevOps polish you need, and I’ll respond within a couple of days.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Form entries submit via your email client; no backend is necessary yet. You can also reach me directly via email or GitHub for faster responses.
          </p>
          <form
            className="mt-6 flex flex-col gap-4"
            action="mailto:hello@yourdomain.dev?subject=Portfolio%20Inquiry"
            method="POST"
            encType="text/plain"
          >
            <input
              className="w-full rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
            <input
              className="w-full rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <textarea
              className="min-h-[140px] rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
              name="message"
              placeholder="Tell me about your project or collab idea"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-950 transition hover:bg-emerald-400"
            >
              Send request
            </button>
          </form>
        </div>
        <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Stay in touch</p>
          <div className="mt-4 space-y-2 text-base text-slate-200">
            <p>
              <span className="font-semibold text-emerald-300">Email:</span> hello@yourdomain.dev
            </p>
            <p>
              <span className="font-semibold text-emerald-300">LinkedIn:</span>{" "}
              <a className="text-emerald-300 underline" href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                /in/yourprofile
              </a>
            </p>
            <p>
              <span className="font-semibold text-emerald-300">GitHub:</span>{" "}
              <a className="text-emerald-300 underline" href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                github.com/yourusername
              </a>
            </p>
          </div>
          <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-900 to-slate-950 p-4 text-sm text-slate-300">
            <p className="font-semibold text-emerald-300">DevOps note</p>
            <p className="text-xs text-slate-400">
              Hobby deployments run on Vercel with GitHub Actions, while Express APIs live on Render or custom Docker rigs. Need a deployment review? I can audit pipelines, containers, and uptime automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
