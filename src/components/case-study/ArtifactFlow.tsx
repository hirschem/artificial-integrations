const artifacts = [
  { name: "normalized_items.json", detail: "Common item schema" },
  { name: "summaries.json", detail: "Validated summary data" },
  { name: "final_post.md", detail: "Publishing artifact" },
];

export default function ArtifactFlow() {
  return (
    <div className="grid gap-2 sm:grid-cols-3 sm:gap-3">
      {artifacts.map((artifact, index) => (
        <div key={artifact.name} className="flex items-center gap-2 sm:block">
          <div className="flex-1 border border-border bg-surface px-4 py-4">
            <p className="break-all font-mono text-xs leading-5 text-foreground">
              {artifact.name}
            </p>
            <p className="mt-3 text-sm text-muted">{artifact.detail}</p>
          </div>
          {index < artifacts.length - 1 ? (
            <span className="font-mono text-xs text-accent sm:block sm:py-3 sm:text-center" aria-hidden="true">
              -&gt;
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
