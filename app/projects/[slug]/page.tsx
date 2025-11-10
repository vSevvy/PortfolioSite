// app/projects/[slug]/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

// 1) Your data shape
type Project = {
  slug: string;
  title: string;
  summary: string;
  ogImage: string;
};

// 2) Fetch a single project by slug (swap this for your CMS/filesystem call)
async function getProject(slug: string): Promise<Project | null> {
  // demo data; replace with real query
  const data: Project[] = [
    { slug: "alpha", title: "Project Alpha", summary: "Robust wee app", ogImage: "/alpha-og.png" },
  ];
  return data.find(p => p.slug === slug) ?? null;
}

// 3) Per-page metadata (SEO)
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const project = await getProject(params.slug);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title} — Your Name`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `https://yourdomain.com/projects/${project.slug}`,
      images: [{ url: project.ogImage, width: 1200, height: 630 }],
      type: "article",
    },
  };
}

// 4) The page component — NOW 'project' exists in scope
export default async function ProjectPage(
  { params }: { params: { slug: string } }
) {
  const project = await getProject(params.slug);
  if (!project) {
    // throw a 404 if you like: notFound();
    return <div>Awk, can’t find that project.</div>;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `https://yourdomain.com/projects/${project.slug}`,
    creator: { "@type": "Person", name: "Your Name" },
    image: project.ogImage
  };

  return (
    <main className="prose">
      <h1>{project.title}</h1>
      <p>{project.summary}</p>

      {/* Either use next/script... */}
      <Script id="ld-project" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(jsonLd)}
      </Script>

      {/* ...or plain <script> in a Server Component */}
      {/* <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
    </main>
  );
}
