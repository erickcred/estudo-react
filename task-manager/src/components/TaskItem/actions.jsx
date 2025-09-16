import { toast } from "sonner";

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

export const deleteTask = async (task, setTasks) => {
  const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
    method: "DELETE",
  });

  if (response.status === 200) {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
    toast.success("Tarefa excluida com sucesso!");
    return;
  }

  toast.warning("Não foi possível deltar a Tarefa!");
};
