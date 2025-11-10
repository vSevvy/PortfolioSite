import Image from 'next/image';
import Link from 'next/link';


export type ProjectMeta = {
slug: string;
title: string;
summary: string;
ogImage: string;
};


export default function ProjectCard({ project }: { project: ProjectMeta }) {
return (
<Link href={`/projects/${project.slug}`} className="group block rounded-xl border border-gray-200 p-4 hover:shadow-md transition">
<div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100">
<Image src={project.ogImage} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition group-hover:scale-105" />
</div>
<h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
<p className="mt-2 text-gray-600">{project.summary}</p>
</Link>
);
}