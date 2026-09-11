import type { ReactNode } from "react";

function Node({ children }: { children: ReactNode }) {
  return (
    <div className="border border-border bg-surface px-4 py-4 text-sm leading-5 text-foreground">
      {children}
    </div>
  );
}

function Connector({ children = "-" }: { children?: ReactNode }) {
  return (
    <div className="py-2 text-center font-mono text-[10px] tracking-[0.12em] text-accent uppercase">
      {children}
    </div>
  );
}

export default function ContentArchitecture() {
  return (
    <div className="border border-border bg-surface/40 p-4 sm:p-6">
      <Node>Example RSS Feed</Node>
      <Connector>feed parser / adapter</Connector>
      <Node>Ingestion</Node>
      <Connector>common schema</Connector>
      <Node>Normalization</Node>
      <Connector>rules / filters</Connector>
      <Node>Classification</Node>
      <Connector>structured summarization</Connector>
      <Node>AI Boundary</Node>
      <Connector>validated output contract</Connector>
      <Node>Publishing</Node>
      <Connector>inspectable artifacts</Connector>
      <Node>normalized_items.json / summaries.json / final_post.md</Node>
      <div className="mt-6 grid gap-4 border-t border-border pt-6 md:grid-cols-2">
        <div>
          <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
            Configuration / environment
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Pipeline paths and mock summarizer behavior are selected through configuration and environment values.
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
            Deliberate boundary
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Source adapters and summarizer implementations can change without rewriting downstream stages.
          </p>
        </div>
      </div>
    </div>
  );
}
