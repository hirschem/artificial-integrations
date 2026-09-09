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

export default function FieldscriptArchitecture() {
  return (
    <div className="border border-border bg-surface/40 p-4 sm:p-6">
      <Node>Client</Node>
      <Connector>request</Connector>
      <Node>FastAPI</Node>
      <Connector>middleware layer</Connector>
      <Node>API Routes</Node>
      <Connector>validation / auth / project scope</Connector>
      <Node>Services</Node>
      <Connector>storage boundary</Connector>
      <Node>Storage / Database</Node>

      <div className="mt-6 grid gap-6 border-t border-border pt-6 md:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
            OCR request path
          </p>
          <Node>OCR Request</Node>
          <Connector>background task</Connector>
          <Node>OCR Service</Node>
          <Connector>explicit state</Connector>
          <Node>Job State</Node>
          <Connector>polling endpoint</Connector>
          <Node>Project-scoped Result</Node>
        </div>
        <div>
          <p className="mb-3 font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
            Persistence path
          </p>
          <Node>API Key Store</Node>
          <Connector>SQLAlchemy</Connector>
          <Node>Database</Node>
          <Connector>versioned schema</Connector>
          <Node>Alembic Migrations</Node>
        </div>
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
          Cross-cutting controls
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["Request IDs", "Structured Errors", "Logging", "Rate Limits"].map((item) => (
            <span key={item} className="border border-border px-3 py-2 font-mono text-xs text-foreground">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
