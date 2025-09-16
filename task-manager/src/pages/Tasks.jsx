import { useEffect, useState } from "react";
import { FaPlus, FaTrashCan } from "react-icons/fa6";
import { WiDaySunnyOvercast, WiDaySunny } from "react-icons/wi";
import { CiCloudMoon } from "react-icons/ci";

// import { Tasksdb } from "../constants/tasks";
import Button from "../components/Button";
import TaskSeparator from "../components/TaskSeparator";
import TaskItem from "../components/TaskItem/TaskItem";
import Header from "../components/Header";
import AddTaskDialog from "../components/AddTaskDialog";
import { toast } from "sonner";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [showAddDialogNewTask, setShowAddDialogNewTask] = useState(false);

  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "GET",
      });
      const tasksResponse = await response.json();
      setTasks(tasksResponse);
    }

    fetchTasks();
  }, []);

  const getTasksMorning = tasks.filter((t) => t.time === "morning");
  const getTasksAfeterNoon = tasks.filter((t) => t.time === "afternoon");
  const getTasksEvening = tasks.filter((t) => t.time === "evening");

  const handleAddTask = async (newTask) => {
    const response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      body: JSON.stringify(newTask),
    });

    if (response.status === 201) {
      console.log(response);
      setTasks([...tasks, newTask]);
      toast.success("Tarefa adicionada com sucesso!");
      return;
    }

    toast.warning("Não foi possível adicionar a Tarefa!");
  };

  const handleCleanTask = async () => {
    const response = await fetch("http://localhost:3000/tasks", {
      method: "DELETE",
    });
    console.log(response);
    if (response.status === 200) {
      setTasks([]);
      toast.success("Todas as tarefas excluidas com sucesso!");
      return;
    }

    toast.warning("Não foi possível limpar a lista de Tarefas!");
  };

  const handleDialogClose = () => {
    setShowAddDialogNewTask(false);
  };

  return (
    <div className="w-full py-14 sm:px-8 px-2 space-y-6">
      <Header title="Task" subTitle="Minhas tarefas">
        <div className="flex items-center gap-3">
          <Button
            fill={true}
            onClick={handleCleanTask}
            color="secondary_outline"
            className="text-xs"
          >
            Limpar tarefas
            <FaTrashCan size={16} />
          </Button>
          <Button
            onClick={() => setShowAddDialogNewTask(true)}
            className="text-xs"
            popoverTarget="newTask"
          >
            Nova tarefa
            <FaPlus size={16} />
          </Button>
        </div>
      </Header>

      <div className="p-6 rounded-xl bg-white space-y-6 shadow-md shadow-[var(--primary)]/12">
        <TaskSeparator title="Manhã" icon={<WiDaySunnyOvercast size={24} />}>
          {getTasksMorning.map(
            (item) =>
              item.time == "morning" && (
                <TaskItem
                  key={item.id}
                  task={item}
                  setTasks={setTasks}
                ></TaskItem>
              )
          )}
        </TaskSeparator>

        <TaskSeparator title="Tarde" icon={<WiDaySunny size={24} />}>
          {getTasksAfeterNoon.map(
            (item) =>
              item.time == "afternoon" && (
                <TaskItem
                  key={item.id}
                  task={item}
                  setTasks={setTasks}
                ></TaskItem>
              )
          )}
        </TaskSeparator>

        <TaskSeparator title="Noite" icon={<CiCloudMoon size={24} />}>
          {getTasksEvening.map(
            (item) =>
              item.time == "evening" && (
                <TaskItem
                  key={item.id}
                  task={item}
                  setTasks={setTasks}
                ></TaskItem>
              )
          )}
        </TaskSeparator>
      </div>

      <AddTaskDialog
        isOpen={showAddDialogNewTask}
        setIsOpen={handleDialogClose}
        handleSubmit={handleAddTask}
      />
    </div>
  );
}
