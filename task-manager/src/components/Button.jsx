export default function Button({ children, className, onClick, variant }) {
  const getVariantClasses = () => {
    switch (variant) {
      case "secondary":
        return "text-[#7a9294]";
      case "warning":
        return "bg-orange-500/60 text-orange-900";
      case "danger":
        return "bg-red-500/60 text-red-900";
      default:
        return "bg-[#00adb5] text-white";
    }
  };

  return (
    <button
      className={`flex items-center gap-4 rounded-md py-1 px-3 cursor-pointer
        hover:opacity-60 transition duration-150 delay-100 ease-in-out
        font-semibold ${className} ${getVariantClasses()}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
