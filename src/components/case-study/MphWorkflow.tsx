const steps = [
  {
    label: "Capture",
    detail: "Upload one or more handwritten document images",
  },
  {
    label: "Transcribe",
    detail: "GPT-4.1 Vision produces literal transcription",
  },
  {
    label: "Review",
    detail: "User edits or corrects transcription",
  },
  {
    label: "Format",
    detail: "A constrained AI pass creates professional structure",
  },
  {
    label: "Export",
    detail: "PDF or DOCX output",
  },
];

export default function MphWorkflow() {
  return (
    <div className="border border-border bg-surface/40 p-4 sm:p-6">
      <div className="grid gap-2 md:grid-cols-5 md:gap-3">
        {steps.map((step, index) => (
          <div key={step.label} className="flex items-stretch gap-2 md:block">
            <div className="flex min-w-0 flex-1 flex-col border border-border bg-surface px-4 py-4">
              <p className="font-mono text-[10px] tracking-[0.16em] text-accent uppercase">
                {step.label}
              </p>
              <p className="mt-3 text-sm leading-5 text-foreground">
                {step.detail}
              </p>
            </div>
            {index < steps.length - 1 ? (
              <div
                className="flex w-5 items-center justify-center font-mono text-xs text-accent md:hidden"
                aria-hidden="true"
              >
                -&gt;
              </div>
            ) : null}
            {index < steps.length - 1 ? (
              <div
                className="hidden py-3 text-center font-mono text-xs text-accent md:block"
                aria-hidden="true"
              >
                -&gt;
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-6 border-t border-border pt-5 font-mono text-xs leading-5 text-muted">
        Human review happens before professional formatting. AI handles the
        conversion work; the user controls the final document.
      </p>
    </div>
  );
}
