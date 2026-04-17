type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="testimonials" className="scroll-mt-32">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Testimonials</p>
        <h2 className="text-3xl font-semibold text-slate-100">What collaborators say</h2>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <article key={item.name} className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
            <p className="text-lg text-slate-200">“{item.quote}”</p>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-400">{item.role}</p>
            <p className="text-base font-semibold text-slate-50">{item.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
