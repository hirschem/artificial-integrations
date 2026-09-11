import type { Metadata } from "next";
import Link from "next/link";
import ArchitectureDiagram from "@/components/case-study/ArchitectureDiagram";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import MetricRow from "@/components/case-study/MetricRow";
import ScreenshotPlaceholder from "@/components/case-study/ScreenshotPlaceholder";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "ORB Engine | Artificial Integrations",
  description:
    "Algorithmic trading research, automation, testing, and observability infrastructure built with Python and FastAPI.",
};

const technologies = [
  "Python",
  "FastAPI",
  "Pandas",
  "NumPy",
  "PyYAML",
  "OpenAI",
  "Pydantic",
  "WebSockets",
  "Kraken",
  "Coinbase",
  "Interactive Brokers",
];

export default function OrbEnginePage() {
  return (
    <main>
      <section className="py-20 sm:py-28">
        <Container>
          <Link
            href="/#work"
            className="font-mono text-xs tracking-[0.16em] text-muted uppercase hover:text-foreground"
          >
            &lt;- Back to Work
          </Link>
          <div className="mt-16 max-w-4xl">
            <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
              01 / Flagship System
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              ORB Engine
            </h1>
            <p className="mt-4 text-base text-muted sm:text-lg">
              Algorithmic Trading &amp; Research Infrastructure
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground sm:text-xl">
              Modular infrastructure for researching, validating, monitoring,
              and operating Opening Range Breakout systems across multiple
              markets.
            </p>
          </div>

          <div className="mt-12">
            <MetricRow />
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted">
            {[
              "Python",
              "FastAPI",
              "Automation",
              "Testing",
            ].map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a
              href="https://github.com/hirschem/orb-engine"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground"
            >
              View source on GitHub -&gt;
            </a>
          </div>
        </Container>
      </section>

      <Container>
        <CaseStudySection eyebrow="01 / Overview" title="One system, multiple execution paths.">
          <p className="text-base leading-7 text-muted">
            ORB Engine needed to support research, validation, live session
            behavior, broker and data integrations, and observability without
            duplicating strategy logic across every process. The architecture
            keeps the core behavior consistent while allowing each path to
            handle its own inputs, timing, and operational concerns.
          </p>
          <p className="mt-5 text-base leading-7 text-muted">
            The result is a modular algorithmic trading research, execution,
            and observability platform built around Opening Range Breakout
            systems, with reliability and deterministic behavior treated as
            first-class engineering requirements.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="02 / Architecture" title="Shared logic, distinct operating paths." wide>
          <ArchitectureDiagram />
        </CaseStudySection>

        <CaseStudySection eyebrow="03 / Live and Streaming" title="Configuration-driven session runners.">
          <p className="text-base leading-7 text-muted">
            Twelve configured crypto ORB sessions cover four assets across
            three market windows. YAML configuration controls which sessions
            are enabled and how they operate, allowing concurrent runners to
            share infrastructure without turning session behavior into copied
            application code.
          </p>
          <p className="mt-5 text-base leading-7 text-muted">
            The live path ingests five-minute candles, computes opening ranges,
            and scans for break, retest, and rejection behavior. Weekend
            handling, configurable session behavior, and signal-only mode are
            treated as explicit operating concerns. Live crypto scanning and
            historical research now use Kraken Futures candle data by default,
            keeping the backtest and streaming paths aligned to the same
            contracts rather than validating behavior on one instrument and
            operating on another. OKX and Kraken spot remain supported data
            venues, but they are not the default research/live pairing. The
            crypto session runner is signal-only, while futures and margin
            runners have optional order-placement paths.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="04 / Research" title="A research path built to validate behavior.">
          <p className="text-base leading-7 text-muted">
            The backtesting subsystem is driven by YAML parameters and follows
            the same conceptual session flow: opening-range calculation,
            break, retest, and rejection detection, long and short support,
            stop and target evaluation, session limits, and outcome statistics.
          </p>
          <p className="mt-5 border-l border-accent pl-5 text-base leading-7 text-foreground">
            The research path exists to validate behavior, not to advertise
            returns.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="05 / Deterministic Parity" title="Live behavior should match researched behavior.">
          <p className="text-base leading-7 text-muted">
            Randomized parity testing verifies that the streaming signal engine
            produces the same decisions as the causal backtesting path. The
            parity harness now runs 200 randomized seeds across four
            configuration combinations, producing 800 automated live/backtest
            equivalence cases. The combinations represent base behavior,
            direction-aware rejection, close-related behavior, and combined
            close/range behavior.
          </p>
          <div className="mt-8 grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
            <div>
              <p className="text-3xl font-semibold tracking-tight">800</p>
              <p className="mt-2 font-mono text-xs leading-5 text-muted uppercase">
                Randomized parity cases
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold tracking-tight">817</p>
              <p className="mt-2 font-mono text-xs leading-5 text-muted uppercase">
                Backend tests passing
              </p>
            </div>
          </div>
          <p className="mt-8 text-base leading-7 text-muted">
            Separate replay validation has also compared the streaming scanner
            and causal backtest across 500 randomized sessions and 2,466
            emitted signals with zero mismatches.
          </p>
          <p className="mt-8 text-base leading-7 text-muted">
            Regression coverage also validates break selection and
            direction-aware rejection behavior, making parity a maintained
            contract rather than a one-time comparison.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="06 / Risk Controls" title="Operational safeguards are configuration, not guesswork.">
          <p className="text-base leading-7 text-muted">
            The system includes circuit-breaker logic, configurable
            consecutive-loss limits, cooldown sessions, session trade limits,
            stop-on-first-loss options, and signal-only mode. These controls
            are expressed through configuration-driven behavior so operating
            constraints remain visible, testable, and separate from the core
            signal logic.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="07 / Observability" title="Monitoring built around readable system state.">
          <p className="text-base leading-7 text-muted">
            A FastAPI monitoring surface provides health information, logs,
            log-file access, dashboard views, signals, and summaries or
            aggregations where appropriate. The monitoring path is read-only,
            with structured signal parsing and safe log-path handling that
            protects against path traversal.
          </p>
          <div className="mt-8">
            <ScreenshotPlaceholder label="Live system view" />
          </div>
        </CaseStudySection>

        <CaseStudySection eyebrow="08 / Applied AI" title="AI where it adds value. Deterministic systems where correctness matters.">
          <p className="text-base leading-7 text-muted">
            ORB Engine includes a structured post-session narration layer using
            OpenAI and Pydantic. The narrator summarizes completed sessions
            and produces structured output for interpretation after the system
            has finished its work.
          </p>
          <p className="mt-5 border-l border-accent pl-5 text-base leading-7 text-foreground">
            AI is intentionally isolated from deterministic trading and risk
            logic. It does not influence trade decisions, position sizing, or
            circuit-breaker behavior, and it fails gracefully when AI services
            are unavailable.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="09 / Technology" title="A compact system built from familiar tools.">
          <ul className="flex max-w-3xl flex-wrap gap-x-6 gap-y-3 font-mono text-sm text-muted">
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </CaseStudySection>

        <section className="border-t border-border/80 py-20 sm:py-24">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/#work"
              className="font-mono text-xs tracking-[0.16em] text-muted uppercase hover:text-foreground"
            >
              &lt;- Back to selected work
            </Link>
            <a
              href="https://github.com/hirschem/orb-engine"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-foreground"
            >
              View source on GitHub -&gt;
            </a>
          </div>
        </section>
      </Container>
    </main>
  );
}
