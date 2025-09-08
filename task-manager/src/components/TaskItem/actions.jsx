import { toast } from "sonner";

export const getStatusClasses = (status) => {
  switch (status) {
    case "done":
      return "bg-[var(--primary)]/10 text-[var(--primary)]";
    case "notstarted":
      return "bg-[var(--secondary)]/10 text-[var(--secondary)]";
    case "inprogress":
      return "bg-[var(--warning)]/10 text-[var(--warning)]";
    default:
      return "bg-[var(--secondary)]/10 text-[var(--secondary)]";
  }
};

export const handleChengedCheck = (itemTask, setTasks) => {
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
      toast.success(`Tarefa iniciada com sucesso!`);
      return "inprogress";
    case "inprogress":
      toast.success(`Tarefa finalizada com sucesso!`);
      return "done";
    case "done":
      toast.success(`Tarefa reiniciada com sucesso!`);
      return "notstarted";
  }
};

export const deleteTask = (task, setTasks) => {
  setTasks((prev) => prev.filter((t) => t.id !== task.id));
  toast.success("Tarefa excluida com sucesso!");
};
