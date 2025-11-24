// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <header className="border-b border-border bg-background/80 backdrop-blur">
        <div className="page-shell flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-xs font-semibold text-secondary-foreground">
              SE
            </span>
            <span className="text-sm font-semibold tracking-wide text-primary">
              Software Engineer Portfolio
            </span>
          </Link>

          <nav className="flex items-center gap-4 text-xs md:text-sm text-muted-foreground">
            <Link href="/projects" className="hover:text-primary">
              Projects
            </Link>
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="btn-cta hidden sm:inline-flex">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="border-b border-border">
          <div className="section flex flex-col gap-10 md:flex-row md:items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                Software Engineer · Full-stack · .NET
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">
                  Building Digital Solutions That Matter
                </h1>
                <p className="max-w-2xl text-sm md:text-base text-muted-foreground">
                  I&apos;m a 23-year-old Software Engineer who transforms ideas
                  into scalable, user-focused applications. With nearly two
                  years of hands-on development experience, I combine solid
                  engineering fundamentals with a drive to solve real-world
                  problems through clean, efficient code.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link href="/contact" className="btn-cta">
                  Let&apos;s work together
                </Link>
                <Link href="/projects" className="btn-secondary">
                  View my work
                </Link>
              </div>
            </div>

            <aside className="flex-1">
              <div className="card-section space-y-4">
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Snapshot
                </h2>
                <dl className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-xs uppercase tracking-[0.18em]">
                      Experience
                    </dt>
                    <dd className="text-right">
                      Nearly two years as a Junior Developer working on
                      enterprise web applications.
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-xs uppercase tracking-[0.18em]">
                      Focus
                    </dt>
                    <dd className="text-right">
                      Full-stack development in the .NET ecosystem with an
                      emphasis on maintainable, scalable solutions.
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-xs uppercase tracking-[0.18em]">
                      Mindset
                    </dt>
                    <dd className="text-right">
                      Curious, growth-driven, and committed to writing clean,
                      elegant code.
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </section>

        {/* ABOUT + WHAT DRIVES ME */}
        <section className="section-muted border-b border-border">
          <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-primary">About Me</h2>
              <p className="text-sm text-muted-foreground">
                I&apos;m a Software Engineer with a Bachelor of Engineering in
                Software Engineering and nearly two years of professional
                experience as a Junior Developer. My journey in tech is driven
                by curiosity, continuous learning, and a commitment to writing
                code that&apos;s both functional and elegant.
              </p>
              <p className="text-sm text-muted-foreground">
                My approach combines solid engineering fundamentals with modern
                development practices. Whether I&apos;m architecting backend
                systems or crafting intuitive user interfaces, I focus on
                building solutions that are maintainable, scalable, and genuinely
                useful.
              </p>
              <p className="text-sm text-muted-foreground">
                Outside of day-to-day development, I explore emerging
                technologies, contribute to open-source where I can, and look
                for ways to optimise workflows and improve development
                processes.
              </p>
            </div>

            <div className="card-section space-y-4">
              <h3 className="text-sm font-semibold text-primary">What Drives Me</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">
                    Continuous improvement:
                  </span>{" "}
                  always looking for better ways to write, test, and ship code.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Modern development:
                  </span>{" "}
                  staying current with tools, frameworks, and best practices.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    User-centric design:
                  </span>{" "}
                  building applications that people actually enjoy using.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Collaborative growth:
                  </span>{" "}
                  learning from experienced engineers and sharing what I learn.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Problem solving:
                  </span>{" "}
                  taking on challenges that push my technical abilities.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* TECHNICAL EXPERTISE */}
        <section className="section border-b border-border">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-primary">
                Technical Expertise
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Full-stack capabilities with a strong focus on the .NET
                ecosystem and solid engineering practices.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card-section space-y-3">
              <h3 className="text-sm font-semibold text-primary">
                Core Technologies
              </h3>
              <dl className="space-y-2 text-sm text-muted-foreground">
                <div>
                  <dt className="font-medium text-foreground">
                    Backend Development
                  </dt>
                  <dd>C#, ASP.NET MVC, .NET Framework.</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">
                    Frontend Development
                  </dt>
                  <dd>HTML5, CSS3, Bootstrap, responsive layouts.</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">
                    Database Management
                  </dt>
                  <dd>SQL, database design and optimisation.</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">
                    Development Practices
                  </dt>
                  <dd>MVC architecture, RESTful APIs, version control.</dd>
                </div>
              </dl>
            </div>

            <div className="card-section space-y-3">
              <h3 className="text-sm font-semibold text-primary">
                What I Bring
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>End-to-end development across backend and frontend.</li>
                <li>Strong understanding of object-oriented principles.</li>
                <li>Experience building mobile-first, responsive web apps.</li>
                <li>Comfortable designing and optimising relational databases.</li>
                <li>Collaborative mindset and pragmatic problem-solving.</li>
              </ul>

              <div className="pt-3">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                  Skills in progress
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Modern JavaScript frameworks, cloud platforms, DevOps
                  practices, and other tools that strengthen the delivery
                  pipeline.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section-muted border-b border-border">
          <div className="space-y-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-primary">
                  Professional Experience
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Nearly two years building and maintaining production-ready
                  web applications.
                </p>
              </div>
            </div>

            <article className="card-section space-y-3">
              <header className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-primary">
                    Junior Developer
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Building production-ready applications in an enterprise
                    environment.
                  </p>
                </div>
                <span className="badge-success">
                  Currently employed
                </span>
              </header>

              <p className="text-sm text-muted-foreground">
                I work across the full stack, from database design to frontend
                implementation, delivering features that meet both business
                requirements and user needs.
              </p>

              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>
                  · Develop and maintain web applications using ASP.NET MVC and
                  the .NET Framework.
                </li>
                <li>
                  · Design and implement database solutions using SQL Server.
                </li>
                <li>
                  · Create responsive user interfaces with HTML, CSS, and
                  Bootstrap.
                </li>
                <li>
                  · Collaborate with cross-functional teams in an agile
                  environment.
                </li>
                <li>
                  · Write clean, maintainable code following industry best
                  practices.
                </li>
                <li>
                  · Troubleshoot and resolve technical issues efficiently.
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* EDUCATION + CTA */}
        <section className="section">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)]">
            <div className="card-section space-y-3">
              <h2 className="text-sm font-semibold text-primary">Education</h2>
              <p className="text-sm text-muted-foreground">
                Bachelor of Engineering in Software Engineering, with a
                comprehensive foundation in computer science principles,
                software architecture, algorithms, and modern development
                methodologies.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-primary">
                Ready to Build Something Great?
              </h2>
              <p className="text-sm text-muted-foreground">
                I&apos;m currently exploring roles and projects where I can
                contribute my skills, learn from experienced teams, and keep
                pushing the quality of the software I build.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-cta">
                  Contact Me
                </Link>
                <Link href="/projects" className="btn-secondary">
                  See My Work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
