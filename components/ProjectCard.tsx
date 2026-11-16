import Image from 'next/image';
import Link from 'next/link';


export type ProjectMeta = {
slug: string;
title: string;
summary: string;
ogImage?: string;
liveUrl?: string;
};


export default function ProjectCard({ project }: { project: ProjectMeta }) {
return (
<article className="group block rounded-xl border border-border bg-card p-6 hover:shadow-md transition">
{project.ogImage && <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100">
<Image src={project.ogImage} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition group-hover:scale-105" />
</div>}
<h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
<p className="mt-2 text-muted-foreground">{project.summary}</p>
{project.liveUrl ? (
  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary mt-5">View Live Project<span className="sr-only"> (opens in a new tab)</span></a>
) : (
  <Link href={`/projects/${project.slug}`} className="btn-secondary mt-5">View Project</Link>
)}
</article>
);
}
