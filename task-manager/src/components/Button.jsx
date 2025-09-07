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
  hint,
  variant,
}) {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-[#00adb5]/30 text-[#00adb5]";
      case "primary-outline":
        return "text-[#00adb5]";
      case "secondary":
        return "bg-[#35383e]/30 text-[#35383e]";
      case "secondary-outline":
        return "text-[#35383e]";
      case "warning":
        return "bg-orange-500/30 text-orange-900";
      case "warning-outline":
        return "text-orange-900";
      case "danger":
        return "bg-red-500/30 text-red-900";
      case "danger-outline":
        return "text-red-900";
      default:
        return "bg-[#00adb5] text-white";
    }
  };

  return (
    <button
      className={`flex items-center gap-4 rounded-md py-1.5 px-3 cursor-pointer
        hover:opacity-60 transition duration-150 delay-100 ease-in-out
        font-semibold ${className} ${getVariantClasses()}`}
      title={hint}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
