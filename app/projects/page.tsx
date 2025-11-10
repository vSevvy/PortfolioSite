import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';


export const metadata = { title: 'Projects — Your Name' };


export default function ProjectsIndex() {
return (
<main className="mx-auto max-w-5xl px-6 py-16">
<h1 className="mb-6 text-3xl font-bold">Projects</h1>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{projects.map(p => (
<ProjectCard key={p.slug} project={p} />
))}
</div>
<p className="mt-10 text-gray-600">
Want the long form? Each card has a full MDX case study.
</p>
<p className="mt-2">
<Link className="text-brand underline" href="/">Back home</Link>
</p>
</main>
);
}