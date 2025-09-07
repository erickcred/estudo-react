import { FaPlus, FaTrashCan } from "react-icons/fa6";

import Button from "../components/Button";

export default function Tasks() {
  return (
    <div className="w-full py-14 px-8">
      <div className="flex justify-between items-center">
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

      <div className="bg-white"></div>
    </div>
  );
}
