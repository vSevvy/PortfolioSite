export default function Hero() {
return (
<section className="mx-auto max-w-5xl px-6 py-24 text-center">
<h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
Hello, I’m <span className="text-brand">vSevvy</span>
</h1>
<p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
I design and build fast, accessible web experiences.
</p>
<div className="mt-8 flex items-center justify-center gap-4">
<a href="#projects" className="rounded-lg bg-brand px-5 py-3 font-medium text-white hover:bg-brand-dark transition">View Projects</a>
<a href="/contact" className="rounded-lg border border-gray-300 px-5 py-3 font-medium hover:bg-gray-50 transition">Get in touch</a>
</div>
</section>
);
}