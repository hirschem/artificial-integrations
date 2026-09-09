import type { ReactNode } from "react";

function ArchitectureNode({ children }: { children: ReactNode }) {
  return (
    <div className="border border-border bg-surface px-4 py-4 text-sm leading-5 text-foreground">
      {children}
    </div>
  );
}

function RouteLabel({ children }: { children: ReactNode }) {
  return (
    <div className="py-2 text-center font-mono text-[10px] tracking-[0.12em] text-accent uppercase">
      {children}
    </div>
  );
}

export default function MphArchitecture() {
  return (
    <div className="border border-border bg-surface/40 p-4 sm:p-6">
      <ArchitectureNode>Browser / Next.js UI</ArchitectureNode>
      <RouteLabel>two workflow paths</RouteLabel>
      <div className="grid gap-6 border-t border-border pt-6 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
            Billing workflow
          </p>
          <ArchitectureNode>POST /api/transcribe</ArchitectureNode>
          <RouteLabel>OpenAI</RouteLabel>
          <ArchitectureNode>GPT-4.1 Vision</ArchitectureNode>
          <RouteLabel>editable output</RouteLabel>
          <ArchitectureNode>Editable Transcription</ArchitectureNode>
          <RouteLabel>reviewed text</RouteLabel>
          <ArchitectureNode>POST /api/format-billing</ArchitectureNode>
          <RouteLabel>deterministic export</RouteLabel>
          <ArchitectureNode>OpenAI formatting -&gt; jsPDF</ArchitectureNode>
        </div>
        <div>
          <p className="mb-3 font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
            Book workflow
          </p>
          <ArchitectureNode>Client Image Preprocessing</ArchitectureNode>
          <RouteLabel>orientation and compression</RouteLabel>
          <ArchitectureNode>POST /api/transcribe</ArchitectureNode>
          <RouteLabel>editable output</RouteLabel>
          <ArchitectureNode>Editable Transcription</ArchitectureNode>
          <RouteLabel>deterministic export</RouteLabel>
          <ArchitectureNode>DOCX Export</ArchitectureNode>
        </div>
      </div>
      <p className="mt-6 border-t border-border pt-5 font-mono text-xs leading-5 text-muted">
        AI processing happens through Next.js App Router API routes. User review
        separates perception from deterministic document output.
      </p>
    </div>
  );
}
