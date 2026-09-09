export default function ScreenshotPlaceholder({
  label,
}: {
  label: string;
}) {
  return (
    <div
      className="relative aspect-[16/8] overflow-hidden border border-border bg-surface"
      aria-label={`${label} placeholder`}
    >
      <div aria-hidden="true" className="absolute inset-0">
        <span className="absolute left-1/4 top-0 h-full w-px bg-border/60" />
        <span className="absolute left-1/2 top-0 h-full w-px bg-border/60" />
        <span className="absolute left-3/4 top-0 h-full w-px bg-border/60" />
        <span className="absolute left-0 top-1/2 h-px w-full bg-border/60" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
        <div>
          <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
            {label}
          </p>
          <p className="mt-3 font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
            Real visual pending
          </p>
        </div>
      </div>
      <span className="absolute left-3 top-3 h-2 w-2 border-l border-t border-accent sm:left-5 sm:top-5" />
      <span className="absolute right-3 top-3 h-2 w-2 border-r border-t border-accent sm:right-5 sm:top-5" />
      <span className="absolute bottom-3 left-3 h-2 w-2 border-b border-l border-accent sm:bottom-5 sm:left-5" />
      <span className="absolute bottom-3 right-3 h-2 w-2 border-b border-r border-accent sm:bottom-5 sm:right-5" />
    </div>
  );
}
