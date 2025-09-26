import { FaHouse, FaListCheck } from "react-icons/fa6";
import SidebarButton from "./SidebarButton";

import { Link } from "react-router";

export default function Sidebar({ className }) {
  return (
    <div
      className={`md:min-w-[252px] md:max-w-[252px] min-w-[20px]  h-screen bg-white ${className}`}
    >
      <div className="py-4 px-8 space-y-4 sm:block hidden">
        <h1 className="font-semibold text-xl text-[var(--primary)]">
          Task Manager
        </h1>

        <p className="font-light">
          <span>Um simples </span>
          <span className="text-[var(--primary)] font-semibold">
            organizador de tarefas
          </span>
        </p>
      </div>

      <div className="flex flex-col sm:p-2 gap-2">
        <SidebarButton to="/">
          <FaHouse className="sm:size-6 size-8" />
          <span className="sm:block hidden">Inicio</span>
        </SidebarButton>
        <SidebarButton to="/tasks" isActive={true}>
          <FaListCheck className="sm:size-6 size-8" />
          <span className="sm:block hidden">Minhas Tarefas</span>
        </SidebarButton>
      </div>
    </div>
  );
}
