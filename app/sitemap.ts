import { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';


export default function sitemap(): MetadataRoute.Sitemap {
const base = 'https://vsevvy.com';
const staticRoutes: MetadataRoute.Sitemap = [
{ url: `${base}/`, lastModified: new Date() },
{ url: `${base}/projects`, lastModified: new Date() },
{ url: `${base}/contact`, lastModified: new Date() },
];
const projectRoutes: MetadataRoute.Sitemap = projects.map(p => ({
url: `${base}/projects/${p.slug}`,
lastModified: new Date(),
}));
return [...staticRoutes, ...projectRoutes];
}