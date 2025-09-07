import {
  FaCheck,
  FaArrowRotateRight,
  FaArrowUpRightFromSquare,
  FaRegTrashCan,
} from "react-icons/fa6";

import Button from "./Button";

export default function TaskItem({ status, onChange, checked, children }) {
  const getTaskStatusClasses = () => {
    switch (status) {
      case "done":
        return "bg-[#00adb5]/10 text-[#00adb5]";
      case "notstarted":
        return "bg-[#35383e]/10 text-[#35383e]";
      case "inprogress":
        return "bg-[#ffaa04]/10 text-[#f28500]";
      default:
        return "bg-[#35383e]/10 text-[#35383e]";
    }
  };

  const getTaskStatusIconClasses = () => {
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
      className={`${getTaskStatusClasses()} flex justify-between items-center gap-4 text-[16px]
      py-2 px-4 rounded-md relative text-bold`}
    >
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          className="cursor-pointer size-[20px] appearance-none checked:none"
          onChange={onChange}
          checked={checked}
        />
        <span
          className={`absolute flex items-center justify-center opacity-100
            peer-checked:opacity-100 h-6 w-6 top-1/2 left-7 p-1 overflow-hidden
            -translate-x-1/2 -translate-y-1/2 pointer-events-none
            rounded-md ${getTaskStatusIconClasses().class} `}
        >
          {getTaskStatusIconClasses().icon}
        </span>
        {children}
      </div>

      <div className="flex items-center gap-1">
        <Button variant="warning-outline" hint="Deletar tarefa">
          <FaRegTrashCan size={14} />
        </Button>
        <Button variant="secondary-outline" hint="Ir para tarefa">
          <FaArrowUpRightFromSquare size={14} />
        </Button>
      </div>
    </div>
  );
}
