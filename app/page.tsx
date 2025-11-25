// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1200); // how long the initials stay up before fading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* SPLASH OVERLAY */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-primary text-primary-foreground transition-opacity duration-700 ${
          showSplash ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="text-center">
    <div className="text-4xl font-semibold tracking-[0.35em] md:text-5xl">
      EM
    </div>
    <div className="mt-3 text-xs uppercase tracking-[0.3em] md:text-sm">
      Software Developer
    </div>
  </div>
      </div>

      {/* MAIN CONTENT (fades in after splash) */}
      <div
        className={`transition-opacity duration-700 ${
          showSplash ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* NAVBAR */}
        <header className="border-b border-border bg-background/80 backdrop-blur">
          <div className="page-shell flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-xs font-semibold text-secondary-foreground">
                EM
              </span>
              <span className="text-sm font-semibold tracking-wide text-primary">
                Evan McCullough · Software Engineer
              </span>
            </Link>

            <nav className="flex items-center gap-4 text-xs text-muted-foreground md:text-sm">
              <Link href="/projects" className="hover:text-primary">
                Projects
              </Link>
            </nav>
          </div>
        </header>

        <main>
          {/* HERO / BANNER */}
          <section className="border-b border-border bg-card/40">
            <div className="section-hero flex flex-col gap-10 md:flex-row md:items-center">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  Software Developer · .NET · Full Stack
                </div>

                <div className="space-y-4">
                  <h1 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">
                    Building Digital Solutions That Matter
                  </h1>
                  <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                    I&apos;m a Software Engineer who transforms ideas into
                    scalable, user-focused applications. With professional
                    experience from a 10-month placement and my current role as
                    a Software Developer, I combine technical expertise with a
                    drive to solve real-world problems through clean, efficient
                    code.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link href="/projects" className="btn-secondary">
                    View my projects
                  </Link>
                </div>
              </div>

              <aside className="flex-1">
                <div className="card-section space-y-4">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    At a glance
                  </h2>
                  <dl className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start justify-between gap-4">
                      <dt className="text-xs uppercase tracking-[0.18em]">
                        Location
                      </dt>
                      <dd className="text-right">
                        Based in Northern Ireland, open to hybrid and remote
                        roles.
                      </dd>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <dt className="text-xs uppercase tracking-[0.18em]">
                        Current role
                      </dt>
                      <dd className="text-right">
                        Currently employed as a Software Developer, working
                        across the stack in a .NET-focused environment.
                      </dd>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <dt className="text-xs uppercase tracking-[0.18em]">
                        Experience
                      </dt>
                      <dd className="text-right">
                        10 months as a Placement Software Engineer plus
                        post-graduation experience as a Software Developer.
                      </dd>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <dt className="text-xs uppercase tracking-[0.18em]">
                        Stage
                      </dt>
                      <dd className="text-right">
                        Software Engineering graduate (BEng, July 2025) from
                        Queen&apos;s University Belfast.
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
                  I&apos;m a 23-year-old Software Engineer and Software
                  Engineering graduate with a Bachelor of Engineering from
                  Queen&apos;s University Belfast, graduating in July 2025. I
                  have 10 months of professional experience as a Placement
                  Software Engineer and I am currently employed as a Software
                  Developer. My journey in tech is driven by curiosity,
                  continuous learning, and a commitment to writing code
                  that&apos;s both functional and elegant.
                </p>
                <p className="text-sm text-muted-foreground">
                  My approach combines solid engineering fundamentals with
                  modern development practices. I believe in building solutions
                  that are maintainable, scalable, and genuinely useful. Whether
                  I&apos;m architecting backend systems or crafting intuitive
                  user interfaces, I focus on delivering value through
                  thoughtful design and clean implementation.
                </p>
                <p className="text-sm text-muted-foreground">
                  When I&apos;m not coding, I&apos;m exploring emerging
                  technologies, contributing to open-source projects, or finding
                  new ways to optimise workflows and improve development
                  processes.
                </p>
              </div>

              <div className="card-section space-y-4">
                <h3 className="text-sm font-semibold text-primary">
                  What Drives Me
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">
                      Continuous Improvement:
                    </span>{" "}
                    always seeking ways to write better code and build better
                    solutions.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">
                      Modern Development:
                    </span>{" "}
                    staying current with industry trends and emerging
                    technologies.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">
                      User-Centric Design:
                    </span>{" "}
                    creating applications that people actually enjoy using.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">
                      Collaborative Growth:
                    </span>{" "}
                    learning from experienced developers while sharing my own
                    insights.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">
                      Problem Solving:
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
                  ecosystem and quality-driven development.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="card-section space-y-3">
                <h3 className="text-sm font-semibold text-primary">
                  Programming Languages &amp; Frameworks
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">
                      Backend Development:
                    </span>{" "}
                    C#, ASP.NET MVC, .NET Framework
                  </li>
                  <li>
                    <span className="font-medium text-foreground">
                      Object-Oriented Programming:
                    </span>{" "}
                      Java, C++
                  </li>
                  <li>
                    <span className="font-medium text-foreground">
                      Frontend Development:
                    </span>{" "}
                    HTML5, CSS3, Bootstrap
                  </li>
                  <li>
                    <span className="font-medium text-foreground">
                      Database Management:
                    </span>{" "}
                    SQL, database design &amp; optimisation
                  </li>
                </ul>
              </div>

              <div className="card-section space-y-3">
                <h3 className="text-sm font-semibold text-primary">
                  Professional Skills &amp; What I Bring
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Software testing &amp; quality assurance</li>
                  <li>Automated testing &amp; regression testing</li>
                  <li>Technical documentation</li>
                  <li>Bug diagnosis &amp; resolution</li>
                  <li>Customer support &amp; communication</li>
                  <li>Team collaboration &amp; agile development</li>
                </ul>

                <div className="pt-3 space-y-1 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">What I bring:</p>
                  <ul className="space-y-1">
                    <li>
                      · Full-stack development capabilities with a focus on the
                      .NET ecosystem.
                    </li>
                    <li>
                      · Strong foundation in object-oriented programming
                      principles.
                    </li>
                    <li>
                      · Experience with automated testing frameworks and quality
                      assurance.
                    </li>
                    <li>
                      · Proven ability to work across the complete software
                      development lifecycle.
                    </li>
                    <li>
                      · Excellent problem-solving skills and attention to
                      detail.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* PROFESSIONAL EXPERIENCE */}
          <section className="section-muted border-b border-border">
            <div className="space-y-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-primary">
                    Professional Experience
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Hands-on experience across the full software development
                    lifecycle in both placement and post-graduate roles.
                  </p>
                </div>
              </div>

              {/* CURRENT ROLE */}
              <article className="card-section space-y-3">
                <header className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-primary">
                      Software Developer · Northern Ireland
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      2025 – Present
                    </p>
                  </div>
                  <span className="badge-success">Currently employed</span>
                </header>

                <p className="text-sm text-muted-foreground">
                  Currently employed as a Software Developer, working primarily
                  in a .NET-focused environment. I contribute to the design,
                  development, and maintenance of production web applications
                  while collaborating with cross-functional teams to deliver
                  stable, maintainable solutions.
                </p>

                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  <li>
                    · Develop and maintain features across the stack in existing
                    and new web applications.
                  </li>
                  <li>
                    · Work with C#, ASP.NET, and SQL to build reliable, scalable
                    backend services.
                  </li>
                  <li>
                    · Implement responsive user interfaces and refine existing
                    UI/UX patterns.
                  </li>
                  <li>
                    · Diagnose and resolve bugs, performance issues, and edge
                    cases in production systems.
                  </li>
                  <li>
                    · Participate in code reviews, sharing feedback and
                    improving code quality across the team.
                  </li>
                </ul>
              </article>

              {/* PLACEMENT ROLE – NO COMPANY NAME */}
              <article className="card-section space-y-3">
                <header className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-primary">
                      Placement Software Engineer · Holywood
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      June 2023 – March 2024 (10 Months)
                    </p>
                  </div>
                <span className="badge-neutral">
                  Enterprise product development
                </span>
              </header>

              <p className="text-sm text-muted-foreground">
                Participated in all phases of product development, from concept
                through delivery and subsequent support. Gained comprehensive
                hands-on experience across the full software development
                lifecycle while working on enterprise-level applications.
              </p>

              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>
                  · Worked across the complete product lifecycle from concept to
                  delivery and ongoing support.
                </li>
                <li>
                  · Developed and maintained web applications using ASP.NET MVC
                  and .NET Framework.
                </li>
                <li>
                  · Conducted development, testing, and bug ticket diagnosis
                  across multiple projects.
                </li>
                <li>
                  · Provided customer support and technical assistance to
                  clients.
                </li>
                <li>
                  · Specialised in quality and testing assurance during the
                  final six months.
                </li>
                <li>
                  · Executed automated testing frameworks and created
                  comprehensive technical documentation.
                </li>
                <li>
                  · Performed regression testing to ensure software stability
                  and reliability.
                </li>
                <li>
                  · Collaborated with cross-functional teams to deliver
                  production-ready solutions.
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section border-b border-border">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-section space-y-3">
              <h2 className="text-sm font-semibold text-primary">Education</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">
                    Bachelor of Engineering in Software Engineering
                  </p>
                  <p>Queen&apos;s University Belfast</p>
                  <p className="text-xs text-muted-foreground">
                    September 2021 – July 2025 (Graduated)
                  </p>
                  <p className="mt-2">
                    A comprehensive foundation in computer science principles,
                    software architecture, algorithms, and modern development
                    methodologies. My academic background equipped me with both
                    theoretical knowledge and practical skills that I apply in
                    professional settings.
                  </p>
                </div>

                <div className="pt-3">
                  <p className="font-medium text-foreground">
                    BTech Level 3 Extended Diploma
                  </p>
                  <p>Northern Regional College, Ballymena</p>
                  <p className="text-xs text-muted-foreground">
                    September 2019 – June 2021
                  </p>
                  <p className="mt-2">
                    Achieved D*D*D* (equivalent to three A&apos;s at A-Level)
                    and received the Highest Achieving Student award.
                  </p>
                </div>
              </div>
            </div>

            {/* UNIVERSITY PROJECTS */}
            <div className="card-section space-y-4">
              <h2 className="text-sm font-semibold text-primary">
                University Projects
              </h2>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">
                    Software Design Principles – Vending Machine Project
                  </p>
                  <p className="mt-1">
                    Developed a fully functional vending machine system capable
                    of accepting multiple payment types. I was responsible for
                    coding the paper money transaction system and the location
                    handler functionality.
                  </p>
                  <p className="mt-1">
                    The project included comprehensive JUNIT test cases and
                    thorough documentation for seamless team integration,
                    achieving a mark of 72 in the module through clean,
                    well-documented code.
                  </p>
                </div>

                <div className="pt-3">
                  <p className="font-medium text-foreground">
                    Object-Oriented Programming – Warehouse Management System
                  </p>
                  <p className="mt-1">
                    Designed and developed a warehouse management system in Java
                    utilising object-oriented principles. The system enabled
                    users to add new products with persistent data storage.
                  </p>
                  <p className="mt-1">
                    Implemented constructor classes with complete getter and
                    setter methods for product variables, delivering a
                    functional and maintainable solution that achieved a 2:1
                    grade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LET'S CONNECT */}
        <section className="section-muted border-b border-border">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-primary">
                Let&apos;s Connect
              </h2>
              <p className="text-sm text-muted-foreground">
                I&apos;m always interested in discussing new opportunities,
                interesting projects, or just talking tech. Whether you&apos;re
                looking for a dedicated developer to join your team or want to
                collaborate on something innovative, I&apos;d love to hear from
                you.
              </p>
              <p className="text-sm text-muted-foreground">
                I&apos;m open to software development roles, particularly those
                that challenge me technically and allow me to keep growing as an
                engineer.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/evan-mccullough-173052388"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  View LinkedIn
                </a>
                <a
                  href="https://github.com/vSevvy"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  View GitHub
                </a>
              </div>

              <div className="text-xs text-muted-foreground">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:evanmccdev2025@gmail.com"
                    className="text-link hover:text-link-hover"
                  >
                    evanmccdev2025@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
  );
}
