import { FaHouse, FaListCheck } from "react-icons/fa6";
import SidebarButton from "./SidebarButton";

export default function Sidebar({ className }) {
  return (
    <div className={`min-w-[252px] h-screen bg-white ${className}`}>
      <div className="py-4 px-8 space-y-4">
        <h1 className="font-semibold text-xl text-[#00adb5]">Task Manager</h1>

        <p className="font-light">
          Um simples{" "}
          <span className="text-[#00adb5] font-semibold">
            organizador de tarefas
          </span>
        </p>
      </div>

      <div className="flex flex-col p-2 gap-2">
        <SidebarButton>
          <FaHouse size={24} />
          Inicio
        </SidebarButton>
        <SidebarButton isActive={true}>
          <FaListCheck size={24} />
          Minhas Tarefas
        </SidebarButton>
      </div>
    </div>
  );
}
