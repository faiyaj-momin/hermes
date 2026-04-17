export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5 pt-6 text-sm text-slate-400">
      <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} JS Environment Portfolio. Crafted with Next.js + Tailwind.</p>
        <p>
          Deploy-ready pipeline &middot; Vercel + Render + custom Express hosts &middot; simple DevOps for hobby builds.
        </p>
      </div>
    </footer>
  );
}
