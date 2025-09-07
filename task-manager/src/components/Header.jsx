export default function Header({ title, subTitle, children }) {
  return (
    <header className="flex justify-between items-center rounded-xl mb-4">
      <div>
        <span className="text-[#00adb5] text-sm">{subTitle}</span>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {children}
    </header>
  );
}
