import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import { FaArrowLeft, FaTrash, FaSpinner } from "react-icons/fa"
import { IoIosArrowForward } from "react-icons/io"


import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";
import TextArea from "../components/TextArea";

export default function TaskDetails() {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const [task, setTask] = useState(undefined);
  const [saveIsLoading, setSaveIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);


  const inputTitleRef = useRef();
  const selectTimeRef = useRef();
  const textareaRef = useRef();

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

  const handleSave = async () => {
    setSaveIsLoading(true);
    const title = inputTitleRef.current.value.trim();
    const time = selectTimeRef.current.value;

    const description = textareaRef.current.value;
    const newErrors = [];
    
    if (!title)
      newErrors.push({ inputName: "title", message: "Campo deve ser preenchido" });
    
    setErrors(newErrors);
    if (newErrors.length > 0) {
      setSaveIsLoading(false);
      console.log(newErrors)
      return;
    }
    
    const response = await fetch(`http://localhost:3000/tasks/${task?.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title, time, description
      })
    });
    
    const newTask = await response.json();
    setTask(newTask);
    if (response.status === 200&& newTask) {
      toast.success(`Update task: (${task?.title}) success`);
      setSaveIsLoading(false)
      navigate("/tasks");
      return;  
    }
    
    toast.error(`Could not update to task (${task?.title})`);
    setSaveIsLoading(false);
  }

  const handleCleanTask = async () => {
    const response = await fetch(`http://localhost:3000/tasks/${task?.id}`, {
      method: "DELETE",
    });
    
    if (response.status === 200) {
      toast.success("Todas as tarefas excluidas com sucesso!");
      navigate("/tasks");
      return;
    }
    
    toast.warning("Não foi possível limpar a lista de Tarefas!");
  };
  
  const titleError = errors.find((e) => e.inputName === "title");

  return (
    <main className="flex gap-4 overflow-hidden">
      <Sidebar />

      <div className="w-full py-14 sm:px-8 px-2 space-y-6">
        
        <Link to={"/tasks"} className="flex items-center justify-center w-10 h-10 bg-[var(--primary)] rounded-full">
          <FaArrowLeft
            className=""
            color="white"
            size={25}
          />
        </Link>
        <div className="flex justify-between gap-3">
          <div>
            <div className="flex items-center gap-1">
              <span className="text-[var(--secondary)]/70 text-xs">Minha Tarefas</span>
              <span className="flex items-center text-[var(--primary)] text-xs font-semibold">
                <IoIosArrowForward /> {task?.title}
              </span>
            </div>
            <h1 className="text-xl font-semibold mt-2">{task?.title}</h1>
          </div>

          <div className="flex items-center gap-3">
            <Button
              className="text-xs text-nowrap"
              color="danger"
              onClick={handleCleanTask}
            >
              Limpar tarefas
              <FaTrash size={16} />
            </Button>
          </div>
        </div>
        
        <div className="p-6 rounded-xl bg-white space-y-6 shadow-md shadow-[var(--primary)]/12">
          <div>
            <Input
              ref={inputTitleRef}
              id="title"
              className={`w-full py-3 px-4`}
              label="Título"
              errorMessage={titleError?.message}
              defaultValue={task?.title}
            />
          </div>

          <div>
            <Select
              ref={selectTimeRef}
              id="time"
              className={`w-full py-3 px-4`}
              title="Este camopo é obrigatório!"
              label="Horário*"
            >
              <option value={task?.time}>{
                task?.time === "evening" && "Noite" || 
                task?.time === "morning" && "Manhã" || "Tarde" }
              </option>
              <option hidden={task?.time === "morning"} value="morning">Manhã</option>
              <option hidden={task?.time === "afternoon"} value="afternoon">Tarde</option>
              <option hidden={task?.time === "evening"} value="evening">Noite</option>
            </Select>
          </div>

          <div>
            <TextArea
              ref={textareaRef}
              id="descripption"
              label="Description"
              className="w-fulld min-h-50 max-h-200"
              defaultValue={task?.description}>
            </TextArea>
          </div>
        </div>

        <div className="flex w-full items-center justify-end gap-3">
          <Button
            color="secondary"
            onClick={() => navigate("/tasks")}
          >
            Cancelar
          </Button>
          <Button
            disabled={saveIsLoading}
            className={`${saveIsLoading && 'bg-neutral-400 hover:opacity-100 cursor-no-drop'}`}
            onClick={handleSave}
          >
            {saveIsLoading && (
              <FaSpinner
                size={22}
                color="white"
                className="animate-spin font-light"
              />
            )}
            Salvar
          </Button>
        </div>
      </div>
    </main>
  );
}
