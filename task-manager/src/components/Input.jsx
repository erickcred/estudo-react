export default function Input({ label, className, errorMessage, ...rest }) {
  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={rest.id}
          className="text-[var(--secondary)]/60 font-semibold"
        >
          {label}
        </label>
      )}

      <input
        className={`rounded-md outline-[var(--primary)]  
          placeholder:text-[var(--secondary)]/70 transition-all duration-75 ease-in-out
          ${
            errorMessage
              ? "border border-[var(--danger)] bg-[var(--danger)]/10"
              : "bg-[var(--secondary)]/10"
          } ${className}`}
        {...rest}
      />
      {errorMessage && (
        <span className="text-md font-semibold text-[var(--danger)] tracking-wide transition-all duration-75 ease-in-out">
          {errorMessage}
        </span>
      )}
    </div>
  );
}
