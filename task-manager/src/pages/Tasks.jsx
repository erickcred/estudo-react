import { FaPlus, FaTrashCan } from "react-icons/fa6";
import { WiDaySunnyOvercast, WiDaySunny } from "react-icons/wi";
import { CiCloudMoon } from "react-icons/ci";

import Button from "../components/Button";
import TaskItem from "../components/TaskItem";

export default function Tasks() {
  return (
    <div className="w-full py-14 px-8">
      <div className="flex justify-between items-center rounded-xl mb-4">
        <div>
          <span className="text-[#00adb5] text-sm">Minhas tarefas</span>
          <h2 className="text-xl font-semibold">Tasks</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button
            fill={true}
            onClick={() => console.log("Limpar Tarefa")}
            variant="secondary"
            className="text-xs"
          >
            Limpar tarefas
            <FaTrashCan size={16} />
          </Button>
          <Button
            onClick={() => console.log("Nota Tarefa")}
            className="text-xs"
          >
            Nova tarefa
            <FaPlus size={16} />
          </Button>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-white space-y-6">
        <TaskItem title="Manhã" icon={<WiDaySunnyOvercast size={24} />}>
          <p className="bg-[#00adb5]/50 py-2 px-4 rounded-md">asdf</p>
          <p className="bg-[#00adb5]/50 py-2 px-4 rounded-md">asdf</p>
          <p className="bg-[#00adb5]/50 py-2 px-4 rounded-md">asdf</p>
        </TaskItem>

        <TaskItem title="Tarde" icon={<WiDaySunny size={24} />}>
          <p className="bg-[#b8ae57] py-2 px-4 rounded-md">asdf</p>
          <p className="bg-[#b8ae57] py-2 px-4 rounded-md">asdf</p>
        </TaskItem>

        <TaskItem title="Noite" icon={<CiCloudMoon />}>
          <p className="bg-[#e9e9e9] py-2 px-4 rounded-md">asdf</p>
          <p className="bg-[#e9e9e9] py-2 px-4 rounded-md">asdf</p>
        </TaskItem>
      </div>
    </div>
  );
}
