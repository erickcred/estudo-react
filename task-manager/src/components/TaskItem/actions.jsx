import { FaCheck, FaArrowRotateRight } from "react-icons/fa6";

export const getTaskStatusClasses = (status) => {
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

export const handleTaskChengedCheck = (itemTask, setTasks) => {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === itemTask.id
        ? { ...task, status: getNextStatus(task.status) }
        : task
    )
  );
};

export const getNextStatus = (currentStatus) => {
  switch (currentStatus) {
    case "notstarted":
      return "inprogress";
    case "inprogress":
      return "done";
    case "done":
      return "notstarted";
  }
};

export const deleteTask = (task, setTasks) => {
  setTasks((prev) => prev.filter((t) => t.id !== task.id));
};
