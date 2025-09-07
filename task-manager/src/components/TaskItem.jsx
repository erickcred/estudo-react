export default function TaskItem({ title, icon, children }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-1 text-[#7a9294] pb-2 border-b border-solid border-b-[#7a9294]/40">
        {icon}
        <p className="text-sm">{title}</p>
      </div>
      {children}
    </div>
  );
}
