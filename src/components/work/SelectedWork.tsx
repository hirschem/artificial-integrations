import ProjectCard from "./ProjectCard";

const projects = {
  mph: {
    index: "02 / Project",
    title: "MPH Field Docs",
    category: "AI Document Automation",
    description:
      "A full-stack field documentation system that turns job-site photos and handwritten content into structured proposals and reports.",
    tags: ["Next.js", "FastAPI", "Vision AI", "PDF"],
    href: "/work/mph-field-docs",
  },
  fieldscript: {
    index: "03 / Project",
    title: "Fieldscript API",
    category: "Backend API Engineering",
    description:
      "A production-style FastAPI backend demonstrating typed API design, validation, persistence, migrations, and automated testing.",
    tags: ["FastAPI", "Pydantic v2", "SQLAlchemy", "Alembic", "pytest"],
    href: "/work/fieldscript-api",
  },
  content: {
    index: "04 / Project",
    title: "AI Content Intelligence Pipeline",
    category: "AI & Data Pipeline",
    description:
      "A multi-stage content intelligence workflow that ingests source material, classifies it, summarizes it, and produces structured publishable output.",
    tags: ["Python", "LLM Pipeline", "Automation", "Structured Data"],
    href: "/work/ai-content-intelligence",
  },
  monaco: {
    index: "05 / Project",
    title: "North Monaco Place",
    category: "Client Website",
    description:
      "A polished production website built around a focused brand and responsive user experience.",
    tags: ["Frontend", "Responsive Design", "Production Deployment"],
    href: "/work/north-monaco-place",
  },
  sbfg: {
    index: "06 / Project",
    title: "SBFG",
    category: "Client Website",
    description:
      "A responsive production website built for a financial services brand with a clean, professional interface.",
    tags: ["Next.js", "Responsive Frontend", "Production Deployment"],
    href: "/work/sbfg",
  },
};

export default function SelectedWork() {
  return (
    <div className="mt-24 border-t border-border/80 pt-10 sm:mt-28 sm:pt-12">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
            Selected work
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Systems, products, and client work
          </h2>
        </div>
        <span className="hidden font-mono text-xs text-muted sm:block">
          05 projects
        </span>
      </div>

      <div className="space-y-20 sm:space-y-24">
        <ProjectCard {...projects.mph} visualSize="large" />

        <div className="grid gap-16 border-t border-border/80 pt-16 md:grid-cols-2 md:gap-10 md:pt-20">
          <ProjectCard
            {...projects.fieldscript}
            visualSize="medium"
            metric="77 Tests"
          />
          <ProjectCard {...projects.content} visualSize="medium" />
        </div>

        <div className="grid gap-16 border-t border-border/80 pt-16 md:grid-cols-2 md:gap-10 md:pt-20">
          <ProjectCard {...projects.monaco} visualSize="small" />
          <ProjectCard {...projects.sbfg} visualSize="small" />
        </div>
      </div>
    </div>
  );
}
