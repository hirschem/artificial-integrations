export default function StructuredOutputExample() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="overflow-hidden border border-border bg-surface">
        <div className="border-b border-border px-4 py-3 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
          NormalizedItem
        </div>
        <pre className="overflow-x-auto p-4 font-mono text-xs leading-6 text-foreground"><code>{`{
  "title": "Indie trio drops a new alternative single",
  "url": "https://example.com/indie-single",
  "published": "2026-02-05",
  "text": "An indie band released a new alternative track...",
  "tags": ["indie", "electronic"]
}`}</code></pre>
      </div>
      <div className="overflow-hidden border border-border bg-surface">
        <div className="border-b border-border px-4 py-3 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
          Summary
        </div>
        <pre className="overflow-x-auto p-4 font-mono text-xs leading-6 text-foreground"><code>{`{
  "title": "Indie trio drops a new alternative single",
  "url": "https://example.com/indie-single",
  "one_sentence": "An indie band released a new alternative track...",
  "bullets": ["The song leans into an underground aesthetic..."],
  "tags": ["indie", "electronic"]
}`}</code></pre>
      </div>
    </div>
  );
}
