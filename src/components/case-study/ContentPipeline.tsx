const stages = [
  ["Source", "Input items"],
  ["Ingest", "Acquire source items"],
  ["Normalize", "Common representation"],
  ["Classify", "Rules and filters"],
  ["Summarize", "Structured AI output"],
  ["Publish", "Render final content"],
  ["Artifacts", "JSON + Markdown"],
];

export default function ContentPipeline() {
  return (
    <div className="border border-border bg-surface/40 p-4 sm:p-6">
      <div className="grid gap-2 lg:grid-cols-7 lg:gap-2">
        {stages.map(([name, detail], index) => (
          <div key={name} className="flex items-stretch gap-2 lg:block">
            <div className="flex min-h-24 flex-1 flex-col justify-between border border-border bg-surface px-4 py-4">
              <p className="font-mono text-[10px] tracking-[0.16em] text-accent uppercase">
                {name}
              </p>
              <p className="mt-4 text-sm leading-5 text-foreground">{detail}</p>
            </div>
            {index < stages.length - 1 ? (
              <span className="flex w-5 items-center justify-center font-mono text-xs text-accent lg:hidden" aria-hidden="true">
                -&gt;
              </span>
            ) : null}
            {index < stages.length - 1 ? (
              <span className="hidden py-3 text-center font-mono text-xs text-accent lg:block" aria-hidden="true">
                -&gt;
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-6 border-t border-border pt-5 font-mono text-xs leading-5 text-muted">
        Each transition makes the data more structured and leaves the next stage with a defined boundary.
      </p>
    </div>
  );
}
