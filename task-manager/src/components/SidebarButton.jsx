import { Link } from "react-router";

export default function SidebarButton({ isActive, children }) {
  return (
    <a
      className={`w-full flex gap-2 items-center flex-wrap
        transition-all delay-150 duration-150 ease-in-out
       hover:text-white hover:bg-[var(--primary)] py-3 px-6 rounded-lg 
       ${isActive ? "bg-[var(--primary)]/15 text-[var(--primary)]" : "text-[var(--secondary)]"}`
      }
      
    >
      {children}
    </a>
  );
}
