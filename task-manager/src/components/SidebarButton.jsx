export default function SidebarButton({ isActive, children }) {
  return (
    <a
      className={`flex gap-2 items-center
        transition delay-100 duration-200 ease-in-out
       hover:text-white hover:bg-[#00adb5] py-3 px-6 rounded-lg 
       ${isActive ? "bg-[#e6f7f8] text-[#00adb5]" : "text-[#35383e]"}`}
      href="#"
    >
      {children}
    </a>
  );
}
