const states = ["pending", "processing", "completed", "failed"];

export default function JobLifecycle() {
  return (
    <div className="grid gap-2 sm:grid-cols-4 sm:gap-3">
      {states.map((state, index) => (
        <div key={state} className="flex items-center gap-2 sm:block">
          <div className="flex flex-1 items-center gap-3 border border-border bg-surface px-4 py-4">
            <span className="h-2 w-2 shrink-0 bg-accent" />
            <span className="font-mono text-xs text-foreground">{state}</span>
          </div>
          {index < states.length - 1 ? (
            <span className="font-mono text-xs text-accent sm:hidden" aria-hidden="true">
              -&gt;
            </span>
          ) : null}
          {index < states.length - 1 ? (
            <span className="hidden py-2 text-center font-mono text-xs text-accent sm:block" aria-hidden="true">
              -&gt;
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
