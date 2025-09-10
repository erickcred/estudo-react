export default function Select({ label, className, errorMessage, ...rest }) {
  return (
    <div className="space-y-1">
      <label
        htmlFor={rest.id}
        className="text-[var(--secondary)]/60 font-semibold"
      >
        {label}
      </label>
      <select
        className={`rounded-md outline-[var(--primary)] transition-all duration-75 ease-in-out
          ${errorMessage ? "border border-[var(--danger)] bg-[var(--danger)]/10" : "bg-[var(--secondary)]/10"} ${className}`}
        {...rest}
      ></select>
      {errorMessage && (
        <p className="text-md font-semibold text-[var(--danger)] tracking-wide transition-all duration-75 ease-in-out">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
