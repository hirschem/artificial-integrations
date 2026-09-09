const metrics = [
  { value: "12", label: "ORB Sessions" },
  { value: "817", label: "Backend Tests" },
  { value: "400", label: "Parity Cases" },
];

export default function MetricRow() {
  return (
    <dl className="grid grid-cols-3 gap-4 border-y border-border py-6 sm:max-w-2xl sm:gap-10">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {metric.value}
          </dd>
          <dt className="mt-2 font-mono text-[10px] leading-4 text-muted uppercase sm:text-xs">
            {metric.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}
