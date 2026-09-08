import Link from "next/link";
import ProjectVisual from "./ProjectVisual";

type ProjectCardProps = {
  index: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  href: string;
  visualSize?: "large" | "medium" | "small";
  metric?: string;
};

export default function ProjectCard({
  index,
  title,
  category,
  description,
  tags,
  href,
  visualSize = "medium",
  metric,
}: ProjectCardProps) {
  return (
    <article>
      <ProjectVisual
        index={index}
        size={visualSize}
      />
      <div className="mt-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
          <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
          {metric ? (
            <span className="font-mono text-xs text-muted">{metric}</span>
          ) : null}
        </div>
        <p className="mt-2 text-sm text-muted">{category}</p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
          {description}
        </p>
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-muted">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <Link
          href={href}
          className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent"
        >
          Explore Project
          <span
            aria-hidden="true"
            className="transition-transform duration-150 group-hover:translate-x-1"
          >
            -&gt;
          </span>
        </Link>
      </div>
    </article>
  );
}
