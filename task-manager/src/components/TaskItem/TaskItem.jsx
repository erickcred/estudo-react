import {
  FaCheck,
  FaArrowRotateRight,
  FaArrowUpRightFromSquare,
  FaRegTrashCan,
} from "react-icons/fa6";

import Button from "../Button";
import {
  deleteTask,
  getTaskStatusClasses,
  handleTaskChengedCheck,
} from "./actions";

export default function TaskItem({ task, setTasks }) {
  const getTaskStatusIconClasses = (status) => {
    switch (status) {
      case "inprogress":
        return {
          class: "bg-[#ffaa04]",
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
          class: "bg-[#00adb5]",
          icon: <FaCheck size={20} color="white" />,
        };
      default:
        return {
          class: "bg-[#35383e]/10",
          icon: null,
        };
    }
  };
  return (
    <div
      className={`${getTaskStatusClasses(task.status)} flex justify-between items-center gap-4 text-[16px]
      py-2 px-4 rounded-md relative text-bold`}
    >
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          className="cursor-pointer size-[20px] appearance-none checked:none"
          onChange={() => handleTaskChengedCheck(task, setTasks)}
          checked={task.status}
        />
        <span
          className={`absolute flex items-center justify-center opacity-100
            peer-checked:opacity-100 h-6 w-6 top-1/2 left-7 p-1 overflow-hidden
            -translate-x-1/2 -translate-y-1/2 pointer-events-none
            rounded-md ${getTaskStatusIconClasses(task.status).class} `}
        >
          {getTaskStatusIconClasses(task.status).icon}
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
