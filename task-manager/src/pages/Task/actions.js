import { toast } from "sonner";

export const handleCleanTask = (setTasks) => {
  setTasks([]);
  toast.success("Todas as tarefas excluidas com sucesso!");
};
