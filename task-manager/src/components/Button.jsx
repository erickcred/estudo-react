/**
 * @example
 *
 * variant: string = ("primary" | "primary-outline") |
 *  ("secondary" | "secondary-outline") |
 *  ("warning" | "warning-outline") |
 *  ("danger" | "danger-outline")
 */
export default function Button({
  children,
  className,
  onClick,
  title,
  variant,
}) {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-[var(--primary)] text-white";
      case "primary-outline":
        return "text-[var(--primary)]";
      case "secondary":
        return "bg-[var(--secondary)]/20 text-[var(--secondary)]";
      case "secondary-outline":
        return "text-[var(--secondary)]";
      case "warning":
        return "bg-[var(--warning)]/20 text-[var(--warning)]";
      case "warning-outline":
        return "text-[var(--warning)]";
      case "danger":
        return "bg-[var(--danger)]/20 text-[var(--danger)]";
      case "danger-outline":
        return "text-[var(--danger)]";
      default:
        return "bg-[var(--primary)] text-white";
    }
  };

  return (
    <button
      className={`flex items-center justify-center gap-4 rounded-md py-1.5 px-3 cursor-pointer
        hover:opacity-60 transition duration-150 delay-100 ease-in-out
        font-semibold ${className} ${getVariantClasses()}`}
      title={title}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
