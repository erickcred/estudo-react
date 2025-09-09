import {
  FaCheck,
  FaArrowRotateRight,
  FaArrowUpRightFromSquare,
  FaRegTrashCan,
} from "react-icons/fa6";

import Button from "../Button";
import {
  deleteTask,
  getStatusClasses as getStatusClasses,
  handleChengedCheck as handleChengedCheck,
} from "./actions";
import Input from "../Input";

export default function TaskItem({ task, setTasks }) {
  const getStatusIconClasses = (status) => {
    switch (status) {
      case "inprogress":
        return {
          class: "bg-[var(--warning)]",
          icon: (
            <FaArrowRotateRight
              size={20}
              color="white"
              className="animate-spin"
            />
          ),
        };
      case "done":
        return {
          class: "bg-[var(--primary)]",
          icon: <FaCheck size={20} color="white" />,
        };
      default:
        return {
          class: "bg-[var(--secondary)]/10",
          icon: null,
        };
    }
  };

  return (
    <div
      className={`${getStatusClasses(task.status)} flex justify-between items-center gap-4 text-[16px]
      py-2 px-4 rounded-md relative text-bold transition delay-100 duration-100 ease-out`}
    >
      <div className="flex items-center gap-4">
        <Input
          type="checkbox"
          className="cursor-pointer size-[25px] appearance-none checked:none"
          onChange={() => handleChengedCheck(task, setTasks)}
          checked={task.status}
        />
        <span
          className={`absolute flex items-center justify-center opacity-100
            peer-checked:opacity-100 h-6 w-6 top-1/2 left-7 p-1 overflow-hidden
            -translate-x-1/2 -translate-y-1/2 pointer-events-none
            transition delay-100 duration-100 ease-out
            rounded-md ${getStatusIconClasses(task.status).class} `}
        >
          {getStatusIconClasses(task.status).icon}
        </span>
        {task.task}
      </div>

      <div className="flex items-center gap-1">
        <Button
          variant="warning-outline"
          hint="Deletar tarefa"
          onClick={() => deleteTask(task, setTasks)}
        >
          <FaRegTrashCan size={14} />
        </Button>
        <Button variant="secondary-outline" hint="Ir para tarefa">
          <FaArrowUpRightFromSquare size={14} />
        </Button>
      </div>
    </div>
  );
}
