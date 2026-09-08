type ProjectVisualProps = {
  index: string;
  size?: "large" | "medium" | "small";
};

const visualLines = ["left-1/4", "left-1/2", "left-3/4"];

export default function ProjectVisual({
  index,
  size = "medium",
}: ProjectVisualProps) {
  return (
    <div
      className={`relative overflow-hidden border border-border bg-surface ${
        size === "large"
          ? "aspect-[16/8]"
          : size === "small"
            ? "aspect-[16/7]"
            : "aspect-[16/9]"
      }`}
      aria-hidden="true"
    >
      <div className="absolute inset-0">
        {visualLines.map((position) => (
          <span
            key={position}
            className={`absolute top-0 h-full w-px bg-border/60 ${position}`}
          />
        ))}
        <span className="absolute left-0 top-1/2 h-px w-full bg-border/60" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
        <div className="flex items-start justify-between gap-4 font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
          <span>{index}</span>
          <span className="text-right">System study</span>
        </div>
        <div>
          <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">
            Project visual
          </p>
          <p className="mt-2 font-mono text-xs tracking-[0.14em] text-accent uppercase">
            Image pending
          </p>
        </div>
      </div>
    </div>
  );
}
