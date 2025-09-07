export default function Header({ title, subTitle, className, children }) {
  return (
    <header
      className={`flex justify-between items-center rounded-xl ${className}`}
    >
      <div>
        <span className="text-[#00adb5] text-sm">{subTitle}</span>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {children}
    </header>
  );
}
