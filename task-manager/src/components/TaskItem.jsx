import { FaCheck, FaRepeat } from "react-icons/fa6";

export default function TaskItem({ status, onChange, checked, children }) {
  const getTaskStatusClasses = () => {
    switch (status) {
      case "done":
        return "bg-[#00adb5]/10 text-[#00adb5]";
      case "notstarted":
        return "bg-[#e9e9e9]";
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
          icon: <FaRepeat size={20} color="white" />,
        };
      case "done":
        return {
          class: "bg-[#00adb5]",
          icon: <FaCheck size={20} color="white" />,
        };
      default:
        return {
          class: "bg-[#e9e9e9]",
          icon: null,
        };
    }
  };

  return (
    <div
      className={`${getTaskStatusClasses()} flex items-center gap-4 text-[16px]
      py-2 px-4 rounded-md relative text-bold`}
    >
      <input
        type="checkbox"
        className="cursor-pointer size-[20px] appearance-none checked:none"
        onChange={onChange}
        checked={checked}
      />
      <span
        className={`absolute flex items-center justify-center opacity-100 
          peer-checked:opacity-100 h-6 w-6 top-1/2 left-6 p-1
          -translate-x-1/2 -translate-y-1/2 pointer-events-none
          rounded-md ${getTaskStatusIconClasses().class} `}
      >
        {getTaskStatusIconClasses().icon}
      </span>
      {children}
    </div>
  );
}
