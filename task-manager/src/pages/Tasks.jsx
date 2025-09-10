import { useState } from "react";
import { FaPlus, FaTrashCan } from "react-icons/fa6";
import { WiDaySunnyOvercast, WiDaySunny } from "react-icons/wi";
import { CiCloudMoon } from "react-icons/ci";

import { Tasksdb } from "../constants/tasks";
import Button from "../components/Button";
import TaskSeparator from "../components/TaskSeparator";
import TaskItem from "../components/TaskItem/TaskItem";
import Header from "../components/Header";
import AddTaskDialog from "../components/AddTaskDialog";
import { toast } from "sonner";

export default function Tasks() {
  const [tasks, setTasks] = useState(Tasksdb);
  const [showAddDialogNewTask, setShowAddDialogNewTask] = useState(false);

  const getTasksMorning = tasks.filter((t) => t.time === "morning");
  const getTasksAfeterNoon = tasks.filter((t) => t.time === "afternoon");
  const getTasksEvening = tasks.filter((t) => t.time === "evening");

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    toast.success("Tarefa adicionada com sucesso!");
  };

  const handleCleanTask = (setTasks) => {
    setTasks([]);
    toast.success("Todas as tarefas excluidas com sucesso!");
  };

  const handleDialogClose = () => {
    setShowAddDialogNewTask(false);
  };

  return (
    <div className="w-full py-14 px-8 space-y-6">
      <Header title="Task" subTitle="Minhas tarefas">
        <div className="flex items-center gap-3">
          <Button
            fill={true}
            onClick={handleCleanTask}
            variant="secondary-outline"
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
