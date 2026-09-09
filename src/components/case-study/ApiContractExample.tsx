export default function ApiContractExample() {
  return (
    <div className="overflow-hidden border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border px-4 py-3 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
        <span>Structured error response</span>
        <span className="text-accent">413</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-xs leading-7 text-foreground sm:p-6 sm:text-sm"><code>{`{
  "error_code": "PAYLOAD_TOO_LARGE",
  "message": "Total image payload exceeds allowed size",
  "request_id": "..."
}`}</code></pre>
      <p className="border-t border-border px-5 py-4 font-mono text-xs leading-5 text-muted sm:px-6">
        Request-level traceability is returned in the body and response header.
      </p>
    </div>
  );
}
