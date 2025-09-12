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

export default function TaskItem({ task, setTasks }) {
  const getStatusIconClasses = (status) => {
    switch (status) {
      case "inprogress":
        return {
          class: "bg-[var(--warning)]",
          icon: (
            <FaArrowRotateRight
              size={23}
              color="white"
              className="animate-spin"
            />
          ),
        };
      case "done":
        return {
          class: "bg-[var(--primary)]",
          icon: <FaCheck size={23} color="white" />,
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
      py-2 px-4 rounded-md text-bold transition delay-100 duration-100 ease-out`}
    >
      <div className="flex items-center justify-center gap-4 relative">
        <input
          type="checkbox"
          className="cursor-pointer p-3 appearance-none checked:none bg-[var(--secondary)]/16 rounded-md"
          onChange={() => handleChengedCheck(task, setTasks)}
          checked={task.status}
        />
        <span
          className={`absolute flex items-center justify-center opacity-100
            peer-checked:opacity-100 top-2/4 left-3 overflow-hidden
            -translate-x-1/2 -translate-y-1/2 pointer-events-none
            transition delay-100 duration-100 ease-out
            rounded-md ${getStatusIconClasses(task.status).class} `}
        >
          {getStatusIconClasses(task.status).icon}
        </span>
        {task.title}
      </div>

      <div className="flex items-center gap-1">
        <Button
          title="Deletar tarefa"
          color="warning_outline"
          onClick={() => deleteTask(task, setTasks)}
        >
          <FaRegTrashCan size={16} />
        </Button>
        <Button
          className="item-start"
          color="secondary_outline"
          title="Ir para tarefa"
        >
          <FaArrowUpRightFromSquare
            className="text-[var(--secondary)]/50"
            size={14}
          />
        </Button>
      </div>
    </div>
  );
}
