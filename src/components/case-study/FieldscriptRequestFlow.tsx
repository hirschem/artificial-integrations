const stages = [
  "Client Request",
  "Request ID",
  "Security / CORS / Middleware",
  "Rate Limiting",
  "Validation / Project Scope",
  "Route Logic",
  "Service / Storage",
  "Structured Response",
];

const crossCutting = ["Logging", "Request Context", "Error Normalization"];

export default function FieldscriptRequestFlow() {
  return (
    <div className="border border-border bg-surface/40 p-4 sm:p-6">
      <div className="grid gap-2 lg:grid-cols-4 lg:gap-3">
        {stages.map((stage, index) => (
          <div key={stage} className="flex items-stretch gap-2 lg:block">
            <div className="flex min-h-16 flex-1 items-center border border-border bg-surface px-4 py-3 text-sm leading-5 text-foreground">
              <span className="mr-3 font-mono text-[10px] text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              {stage}
            </div>
            {index < stages.length - 1 ? (
              <div className="flex w-5 items-center justify-center font-mono text-xs text-accent lg:hidden" aria-hidden="true">
                -&gt;
              </div>
            ) : null}
            {index < stages.length - 1 ? (
              <div className="hidden py-2 text-center font-mono text-xs text-accent lg:block" aria-hidden="true">
                -&gt;
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-6 border-t border-border pt-5">
        <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
          Cross-cutting behavior
        </p>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {crossCutting.map((item) => (
            <div key={item} className="border border-border bg-surface px-4 py-3 font-mono text-xs text-foreground">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
