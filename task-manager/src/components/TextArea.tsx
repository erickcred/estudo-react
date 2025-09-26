export default function TextArea({ label, className, errorMessage, ...rest }) {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label
          htmlFor={rest.id}
          className="text-[var(--secondary)]/60 font-semibold"
        >
          {label}
        </label>
      )}

      <textarea
        className={`p-4 rounded-md outline-[var(--primary)]
          placeholder:text-[var(--secondary)]/70 transition-all duration-75 ease-in-out
          ${
            errorMessage
            ? "border border-[var(--danger)] bg-[var(--danger)]/10"
            : "bg-[var(--secondary)]/10"
            } ${className}`}
          {...rest}
          value={rest.value}
      ></textarea>
      {errorMessage && (
        <span className="text-md font-semibold text-[var(--danger)] tracking-wide transition-all duration-75 ease-in-out">
          {errorMessage}
        </span>
      )}
    </div>
  );
}
