import type { Metadata } from "next";
import Link from "next/link";
import ArtifactFlow from "@/components/case-study/ArtifactFlow";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import ContentArchitecture from "@/components/case-study/ContentArchitecture";
import ContentPipeline from "@/components/case-study/ContentPipeline";
import StructuredOutputExample from "@/components/case-study/StructuredOutputExample";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "AI Content Intelligence Pipeline | Artificial Integrations",
  description:
    "Structured AI content pipeline demonstrating normalization, schema validation, deterministic orchestration, and controlled LLM integration.",
};

const technologies = [
  "Python 3.11+",
  "Pydantic",
  "feedparser",
  "python-dotenv",
  "OpenAI-compatible integration",
];

export default function AiContentIntelligencePage() {
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
              04 / AI Pipeline Engineering
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              AI Content Intelligence Pipeline
            </h1>
            <p className="mt-4 text-base text-muted sm:text-lg">
              Structured AI &amp; Data Pipeline
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground sm:text-xl">
              A modular pipeline for turning variable source material into
              normalized data, structured AI summaries, and deterministic
              publishing artifacts.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-xs text-muted">
            {["Python", "Pydantic", "feedparser", "Structured JSON"].map(
              (technology) => (
                <span key={technology}>{technology}</span>
              ),
            )}
            <span className="border border-border px-3 py-2 text-accent">
              NDA-safe reference implementation
            </span>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a
              href="https://github.com/hirschem/ai-content-intelligence-pipeline"
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
        <CaseStudySection
          eyebrow="01 / Context"
          title="Demonstrating the architecture without exposing the client."
        >
          <p className="text-base leading-7 text-muted">
            This public project is a sanitized implementation based on
            architectural patterns used in a larger client content-automation
            system. It preserves the interesting engineering ideas without
            exposing client-specific prompts, data, private integrations, or
            production infrastructure.
          </p>
          <p className="mt-5 text-base leading-7 text-muted">
            The repository is an NDA-safe reference implementation, not the
            complete production client system. It demonstrates workflow
            structure, data-processing patterns, AI integration boundaries,
            schema-driven output, and deterministic orchestration.
          </p>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="02 / Problem"
          title="Unstructured input does not become reliable output in one step."
        >
          <p className="text-base leading-7 text-muted">
            Source content can be missing fields, differently formatted,
            incomplete, noisy, or variable across sources. LLM output introduces
            another source of variability. A single prompt from raw input to
            final publication makes validation, debugging, failure isolation,
            and output consistency harder.
          </p>
          <p className="mt-6 border-l border-accent pl-5 text-base leading-7 text-foreground">
            The engineering question is how to introduce AI without surrendering
            control of the workflow. The answer is explicit stages with
            contracts between them.
          </p>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="03 / Pipeline"
          title="Progressive structure is the visual language of the system."
          wide
        >
          <ContentPipeline />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="04 / Ingestion"
          title="Sources enter through a replaceable boundary."
        >
          <p className="text-base leading-7 text-muted">
            The reference implementation reads an example RSS feed through a
            pluggable ingestion layer. The adapter turns feed entries into
            <span className="font-mono text-foreground"> RawItem[]</span>,
            keeping source acquisition separate from downstream processing.
          </p>
          <p className="mt-5 border-l border-accent pl-5 text-base leading-7 text-foreground">
            The reference uses example RSS ingestion. The architecture pattern is
            a replaceable ingestion boundary.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="05 / Normalization" title="Normalize first. Reason second.">
          <p className="text-base leading-7 text-muted">
            Raw source items become consistent internal records before later
            stages operate. In the verified schema, a <span className="font-mono text-foreground">RawItem</span>{" "}
            with a feed link becomes a <span className="font-mono text-foreground">NormalizedItem</span> with a
            normalized URL, published value, text, and tags.
          </p>
          <p className="mt-6 border-l border-accent pl-5 text-base leading-7 text-foreground">
            Normalize variability before asking the model to interpret it.
          </p>
          <div className="mt-8">
            <StructuredOutputExample />
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="06 / Classification"
          title="Use deterministic logic when deterministic logic is enough."
        >
          <p className="text-base leading-7 text-muted">
            The sanitized implementation applies basic tag rules as a placeholder
            for more advanced classification logic. It checks normalized title
            and text against explicit keyword rules, assigns matching tags, and
            keeps only items that satisfy the example policy.
          </p>
          <p className="mt-5 text-base leading-7 text-muted">
            Not every pipeline decision belongs to an LLM. Rule-based filtering
            remains deterministic when the requirement is explicit.
          </p>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="07 / Structured AI"
          title="The model returns data, not permission to control the workflow."
        >
          <p className="text-base leading-7 text-muted">
            The summarization stage is defined behind a stable interface and
            produces structured JSON summaries. Pydantic models describe the
            summary boundary with a title, URL, one-sentence summary, bullets,
            and tags. Schema validation constrains what downstream stages are
            allowed to accept.
          </p>
          <p className="mt-5 text-base leading-7 text-muted">
            The model contributes interpretation inside a defined contract; it
            does not decide the pipeline sequence or publishing format.
          </p>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="08 / Mock Mode"
          title="Pipeline behavior should not require a model call to test."
        >
          <p className="text-base leading-7 text-muted">
            Mock mode lets local development exercise orchestration without API
            calls. Stage integration can be inspected independently of model
            availability, deterministic sample output makes behavior easier to
            reason about, and the summarizer implementation can be swapped
            without fusing AI availability to the pipeline runner.
          </p>
          <p className="mt-6 font-mono text-xs leading-5 text-muted">
            USE_MOCK_SUMMARIZER=true
          </p>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="09 / Publishing"
          title="Generation ends in deterministic artifacts."
          wide
        >
          <p className="max-w-3xl text-base leading-7 text-muted">
            The final stage transforms structured summaries into a defined
            Markdown publishing artifact rather than exposing raw model prose.
            Each major stage leaves an inspectable output that can be reviewed
            independently.
          </p>
          <div className="mt-8">
            <ArtifactFlow />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="border border-border bg-surface p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">JSON excerpt</p>
              <p className="mt-4 text-sm leading-6 text-muted">
                Sample output stores normalized title, URL, published value, text, and tags.
              </p>
            </div>
            <div className="border border-border bg-surface p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">Summary excerpt</p>
              <p className="mt-4 text-sm leading-6 text-muted">
                Summaries contain a TL;DR-style sentence, bullets, and carried tags.
              </p>
            </div>
            <div className="border border-border bg-surface p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">Markdown excerpt</p>
              <p className="mt-4 text-sm leading-6 text-muted">
                The real sample renders a Weekly Music &amp; Culture Digest with linked entries and tags.
              </p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="10 / Intermediate State"
          title="Intermediate state makes the pipeline debuggable."
        >
          <p className="text-base leading-7 text-muted">
            Because normalization, classification, summarization, and publication
            are distinct stages, engineers can inspect where output changed.
            Instead of debugging raw source directly against a mysterious final
            result, the reasoning path is visible from raw input to normalized
            representation, classified set, structured summary, and final post.
          </p>
          <p className="mt-6 border-l border-accent pl-5 text-base leading-7 text-foreground">
            Stage boundaries turn an opaque AI workflow into an inspectable
            software system.
          </p>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="11 / Failure Isolation"
          title="Smaller stages create smaller failure domains."
        >
          <p className="text-base leading-7 text-muted">
            When final output is incorrect, the pipeline structure helps
            distinguish an ingestion problem from a normalization problem, a
            classification problem, an AI interpretation problem, or a
            publishing problem. The architecture makes those questions local
            instead of treating the whole workflow as one opaque operation.
          </p>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="12 / AI Boundary"
          title="AI is one stage, not the system."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-border bg-surface/40 p-5">
              <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
                Deterministic code
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                <li>Ingestion orchestration</li>
                <li>Normalization</li>
                <li>Explicit classification rules</li>
                <li>Schema handling</li>
                <li>Pipeline sequencing</li>
                <li>Artifact generation</li>
              </ul>
            </div>
            <div className="border border-border bg-surface/40 p-5">
              <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
                AI layer
              </p>
              <p className="mt-4 text-sm leading-6 text-muted">
                Semantic interpretation and summarization inside a defined
                OpenAI-compatible interface.
              </p>
            </div>
          </div>
          <p className="mt-6 border-l border-accent pl-5 text-base leading-7 text-foreground">
            Models handle interpretation. Code controls the workflow.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="13 / Architecture" title="Each boundary has a reason." wide>
          <ContentArchitecture />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="14 / Output Contracts"
          title="Structured output creates a software boundary."
        >
          <p className="text-base leading-7 text-muted">
            AI output becomes useful in a software system when downstream code
            receives known structure rather than free-form prose. Pydantic
            schemas, explicit serialization, JSON intermediate artifacts, and
            Markdown transformation make the next operation predictable.
          </p>
          <p className="mt-6 border-l border-accent pl-5 text-base leading-7 text-foreground">
            Downstream code should not parse vibes.
          </p>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="15 / Reference vs. Production"
          title="A safe reference implementation with clear boundaries."
          wide
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-border bg-surface/40 p-5">
              <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
                Reference implementation
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                <li>Example RSS source</li>
                <li>Sanitized workflow</li>
                <li>Representative architecture</li>
                <li>Mock mode</li>
                <li>Sample JSON and Markdown artifacts</li>
              </ul>
            </div>
            <div className="border border-border bg-surface/40 p-5">
              <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
                Real-world architectural patterns
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                <li>Staged editorial automation</li>
                <li>Structured processing</li>
                <li>AI integration boundaries</li>
                <li>Deterministic orchestration</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-base leading-7 text-muted">
            Client-specific prompts, sources, integrations, and infrastructure
            are intentionally excluded.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="16 / Technology" title="A small stack with explicit responsibilities.">
          <ul className="flex max-w-3xl flex-wrap gap-x-6 gap-y-3 font-mono text-sm text-muted">
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="17 / Engineering Principle"
          title="Predictability comes from the system around the model."
        >
          <p className="text-base leading-7 text-muted">
            The useful engineering work in an AI pipeline is not only the model
            call. It is the structure around it: controlled inputs, normalized
            representations, explicit stage boundaries, validated outputs,
            deterministic orchestration, and inspectable artifacts.
          </p>
          <p className="mt-6 border-l border-accent pl-5 text-base leading-7 text-foreground">
            Reliable AI systems are built from controlled transitions, not single
            prompts.
          </p>
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
              href="https://github.com/hirschem/ai-content-intelligence-pipeline"
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
