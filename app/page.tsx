import Hero from "@/components/sections/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const hasProjects = projects.length > 0;

  return (
    <main>
      <Hero />

      <section id="projects" className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="mb-6 text-2xl font-bold">Selected Projects</h2>

        {hasProjects ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-white/5 p-8 text-center backdrop-blur">
            <p className="text-lg font-medium">Projects coming soon.</p>
            <p className="mt-2 text-sm text-gray-400">
              I’m polishing case studies — check back shortly.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
