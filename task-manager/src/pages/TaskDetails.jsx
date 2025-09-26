import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { toast } from "sonner";
import { FaTrash } from "react-icons/fa"
import { IoIosArrowForward } from "react-icons/io"


import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";
import TextArea from "../components/TextArea";

export default function TaskDetails() {
  const { taskId } = useParams();
  const [task, setTask] = useState(undefined);

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "GET",
      });
      const responseData = await response.json();
      
      if (!responseData) {
        toast.warning("Task not found!!")
        return;
      }
        
      setTask(responseData);
    }

    fetchTask();
  }, [taskId]);

  return (
    <main className="flex gap-4 overflow-hidden">
      <Sidebar />

      <div className="w-full py-14 sm:px-8 px-2 space-y-6">
        
        <div className="flex justify-between gap-3">
          <div>
            <div className="flex items-center gap-1">
              <Link to={"/tasks"} className="text-[var(--primary)]">Minha Tarefas</Link>
              <span className="text-[var(--secondary)] flex items-center">
                <IoIosArrowForward /> {task?.title}
              </span>
            </div>
            <h1 className="text-3xl">{task?.title}</h1>
          </div>

          <div className="flex items-center gap-3">
            <Button
              color="secondary_outline"
              className="text-xs"
              color="danger"
            >
              Limpar tarefas
              <FaTrash size={16} />
            </Button>
          </div>
        </div>
        
        <div className="p-6 rounded-xl bg-white space-y-6 shadow-md shadow-[var(--primary)]/12">
          {task !== undefined && (
            <>
              <Input
                className={`w-full py-3 px-4`}
                label="Título"
                value={task?.title}
              />
              <Select
                id="time"
                className={`w-full py-3 px-4`}
                title="Este camopo é obrigatório!"
                label="Horário*"
              >
                <option value={task.time}>{
                  task.time === "evening" && "Noite" || 
                  task?.time === "morning" && "Manhã" || "Tarde" }
                </option>
                <option hidden={task?.time === "morning"} value="morning">Manhã</option>
                <option hidden={task?.time === "afternoon"} value="afternoon">Tarde</option>
                <option hidden={task?.time === "evening"} value="evening">Noite</option>
              </Select>
              
              <TextArea
                id="descripption"
                label="Description"
                className="w-fulld min-h-50 max-h-200"
                value={task?.description}>
              </TextArea>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
