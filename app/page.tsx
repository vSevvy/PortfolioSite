import Hero from '@/components/sections/Hero';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';


export default function HomePage() {
return (
<main>
<Hero />


<section id="projects" className="mx-auto max-w-5xl px-6 pb-24">
<h2 className="mb-6 text-2xl font-bold">Selected Projects</h2>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{projects.map(p => (
<ProjectCard key={p.slug} project={p} />
))}
</div>
</section>
</main>
);
}