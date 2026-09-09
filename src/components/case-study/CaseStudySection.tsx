import type { ReactNode } from "react";

export default function CaseStudySection({
  eyebrow,
  title,
  children,
  wide = false,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <section className="border-t border-border/80 py-20 sm:py-24">
      <div className={wide ? "" : "max-w-3xl"}>
        <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
