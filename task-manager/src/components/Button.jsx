import { tv } from "tailwind-variants";

/**
 * @example
 *
 * variant: string = ("primary" | "primary_outline") |
 *  ("secondary" | "secondary_outline") |
 *  ("warning" | "warning_outline") |
 *  ("danger" | "danger_outline")
 */
export default function Button({
  children,
  className,
  onClick,
  title,
  color = "primary",
  ...rest
}) {
  const button = tv({
    base: `flex items-center justify-center gap-4 rounded-md py-1.5 px-3 cursor-pointer
      hover:opacity-60 transition duration-150 delay-100 ease-in-out
      font-semibold`,
    variants: {
      color: {
        primary: "bg-[var(--primary)] text-white",
        primary_outline: "text-[var(--primary)]",
        secondary: "bg-[var(--secondary)]/20 text-[var(--secondary)]",
        secondary_outline: "text-[var(--secondary)]",
        warning: "bg-[var(--warning)]/20 text-[var(--warning)]",
        warning_outline: "text-[var(--warning)]",
        danger: "bg-[var(--danger)]/20 text-[var(--danger)]",
        danger_outline: "text-[var(--danger)]",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  });

  return (
    <button
      {...rest}
      className={button({ color: color, className })}
      title={title}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
