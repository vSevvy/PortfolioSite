import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata = { title: "Projects — vsevvy" };

export default function ProjectsIndex() {
  const hasProjects = projects.length > 0;

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-bold">Projects</h1>

      {hasProjects ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-white/5 p-10 text-center backdrop-blur">
          <h2 className="text-xl font-semibold">Coming soon</h2>
          <p className="mt-2 text-gray-400">
            New builds are in the works. Keep your eyes peeled.
          </p>
        </div>
      )}
    </main>
  );
}
