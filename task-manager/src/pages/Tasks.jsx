import { useState } from "react";
import { FaPlus, FaTrashCan } from "react-icons/fa6";
import { WiDaySunnyOvercast, WiDaySunny } from "react-icons/wi";
import { CiCloudMoon } from "react-icons/ci";

import { Tasksdb } from "../constants/tasks";
import Button from "../components/Button";
import TaskSeparator from "../components/TaskSeparator";
import TaskItem from "../components/TaskItem";
import Header from "../components/Header";

export default function Tasks() {
  const [tasks, setTasks] = useState(Tasksdb);

  const getTasksMorning = tasks.filter((t) => t.time === "morning");
  const getTasksAfeterNoon = tasks.filter((t) => t.time === "afternoon");
  const getTasksEvening = tasks.filter((t) => t.time === "evening");

  const handleTaskChengedCheck = (itemTask) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === itemTask.id
          ? { ...task, status: getNextStatus(task.status) }
          : task
      )
    );
  };

  const getNextStatus = (currentStatus) => {
    switch (currentStatus) {
      case "notstarted":
        return "inprogress";
      case "inprogress":
        return "done";
      case "done":
        return "notstarted";
    }
  };

  return (
    <div className="w-full py-14 px-8">
      <Header title="Task" subTitle="Minhas tarefas">
        <div className="flex items-center gap-3">
          <Button
            fill={true}
            onClick={() => console.log("Limpar Tarefa")}
            variant="secondary-outline"
            className="text-xs"
          >
            Limpar tarefas
            <FaTrashCan size={16} />
          </Button>
          <Button
            onClick={() => console.log("Nota Tarefa")}
            className="text-xs"
          >
            Nova tarefa
            <FaPlus size={16} />
          </Button>
        </div>
      </Header>

      <div className="p-6 rounded-xl bg-white space-y-6 shadow-md shadow-[#00adb5]/12">
        <TaskSeparator title="Manhã" icon={<WiDaySunnyOvercast size={24} />}>
          {getTasksMorning.map(
            (item) =>
              item.time == "morning" && (
                <TaskItem
                  key={item.id}
                  status={item.status}
                  onChange={() => handleTaskChengedCheck(item)}
                  checked={item.status === "done"}
                >
                  {item.task}
                </TaskItem>
              )
          )}
        </TaskSeparator>

        <TaskSeparator title="Tarde" icon={<WiDaySunny size={24} />}>
          {getTasksAfeterNoon.map(
            (item) =>
              item.time == "afternoon" && (
                <TaskItem
                  key={item.id}
                  status={item.status}
                  onChange={() => handleTaskChengedCheck(item)}
                  checked={item.status === "done"}
                >
                  {item.task}
                </TaskItem>
              )
          )}
        </TaskSeparator>

        <TaskSeparator title="Noite" icon={<CiCloudMoon size={24} />}>
          {getTasksEvening.map(
            (item) =>
              item.time == "evening" && (
                <TaskItem
                  key={item.id}
                  status={item.status}
                  onChange={() => handleTaskChengedCheck(item)}
                  checked={item.status === "done"}
                >
                  {item.task}
                </TaskItem>
              )
          )}
        </TaskSeparator>
      </div>
    </div>
  );
}
