const primaryFlow = [
  "Configuration / YAML",
  "Market Data",
  "Strategy Engine",
  "Session Runners",
  "Venue / Broker Integrations",
  "Logs / API / Dashboard",
];

const supportingPaths = [
  "Backtesting / Validation",
  "Live / Streaming",
  "Observability",
  "AI Session Narration",
];

function FlowNode({ label }: { label: string }) {
  return (
    <div className="border border-border bg-surface px-4 py-4 text-sm text-foreground">
      {label}
    </div>
  );
}

export default function ArchitectureDiagram() {
  return (
    <div className="border border-border bg-surface/40 p-4 sm:p-6">
      <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-center sm:gap-3">
        <div className="space-y-2">
          {primaryFlow.slice(0, 3).map((label) => (
            <div key={label}>
              <FlowNode label={label} />
              <div className="py-1 text-center font-mono text-xs text-accent sm:hidden">
                |
              </div>
            </div>
          ))}
        </div>

        <div className="hidden font-mono text-xs text-accent sm:block" aria-hidden="true">
          -&gt;
        </div>

        <div className="space-y-2">
          {primaryFlow.slice(3).map((label) => (
            <div key={label}>
              <FlowNode label={label} />
              {label !== primaryFlow.at(-1) ? (
                <div className="py-1 text-center font-mono text-xs text-accent sm:hidden">
                  |
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 border-t border-border pt-6">
        <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
          Shared behavior paths
        </p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {supportingPaths.map((label) => (
            <FlowNode key={label} label={label} />
          ))}
        </div>
      </div>

      <p className="mt-5 max-w-2xl font-mono text-xs leading-5 text-muted">
        Deterministic strategy logic is shared between research and live paths;
        supporting systems observe, validate, or narrate the same session behavior.
      </p>
    </div>
  );
}
