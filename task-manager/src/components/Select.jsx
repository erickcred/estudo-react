export default function Select({ label, className, ...rest }) {
  return (
    <div className="space-y-1">
      <label
        htmlFor={rest.id}
        className="text-[var(--secondary)]/60 font-semibold"
      >
        {label}
      </label>
      <select
        className={`rounded-md outline-[var(--primary)] bg-[var(--secondary)]/10 ${className}`}
        {...rest}
      ></select>
    </div>
  );
}
