import Link from "next/link";

const technologies = ["Python", "FastAPI", "Automation", "Testing"];
const verticalLines = ["left-[18%]", "left-[36%]", "left-[54%]", "left-[72%]", "left-[90%]"];
const horizontalLines = ["top-1/4", "top-1/2", "top-3/4"];

export default function FeaturedProject() {
  return (
    <article>
      <div
        className="relative aspect-[16/9] overflow-hidden border border-border bg-surface"
        aria-label="Placeholder for a future ORB Engine system view"
      >
        <div aria-hidden="true" className="absolute inset-0">
          {verticalLines.map((position) => (
            <span
              key={`vertical-${position}`}
              className={`absolute top-0 h-full w-px bg-border/60 ${position}`}
            />
          ))}
          {horizontalLines.map((position) => (
            <span
              key={`horizontal-${position}`}
              className={`absolute left-0 h-px w-full bg-border/60 ${position}`}
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-2xl border border-border/80 bg-background/60 p-5 sm:p-8">
            <div className="flex items-center justify-between gap-4 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              <span>ORB Engine</span>
              <span>System view</span>
            </div>
            <div className="mt-8 flex items-center gap-3 sm:mt-12">
              <span className="h-2 w-2 bg-accent" />
              <span className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
                Dashboard visual pending
              </span>
            </div>
            <div className="mt-5 h-px w-full bg-border" />
          </div>
        </div>
        <span className="absolute left-3 top-3 h-2 w-2 border-l border-t border-accent sm:left-5 sm:top-5" />
        <span className="absolute right-3 top-3 h-2 w-2 border-r border-t border-accent sm:right-5 sm:top-5" />
        <span className="absolute bottom-3 left-3 h-2 w-2 border-b border-l border-accent sm:bottom-5 sm:left-5" />
        <span className="absolute bottom-3 right-3 h-2 w-2 border-b border-r border-accent sm:bottom-5 sm:right-5" />
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,0.55fr)] lg:gap-16">
        <div>
          <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
            01 / Flagship
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            ORB Engine
          </h3>
          <p className="mt-2 text-sm text-muted">
            Algorithmic Trading &amp; Research Infrastructure
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
            Modular algorithmic trading infrastructure for researching,
            validating, monitoring, and operating Opening Range Breakout
            systems across multiple markets.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
          <Link
            href="/work/orb-engine"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent"
          >
            Explore System
            <span aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-1">
              -&gt;
            </span>
          </Link>
        </div>

        <dl className="grid grid-cols-3 gap-4 border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div>
            <dt className="font-mono text-[10px] leading-4 text-muted uppercase">
              ORB Sessions
            </dt>
            <dd className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              12
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] leading-4 text-muted uppercase">
              Backend Tests
            </dt>
            <dd className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              817
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] leading-4 text-muted uppercase">
              Parity Cases
            </dt>
            <dd className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              400
            </dd>
          </div>
        </dl>
      </div>

    </article>
  );
}
