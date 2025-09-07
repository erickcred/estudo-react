import { FaPlus, FaTrashCan } from "react-icons/fa6";
import { WiDaySunnyOvercast, WiDaySunny } from "react-icons/wi";
import { CiCloudMoon } from "react-icons/ci";

import Button from "../components/Button";
import TaskSeparator from "../components/TaskSeparator";
import TaskItem from "../components/TaskItem";
import Header from "../components/Header";

export default function Tasks() {
  const tasks = ["asdf", "asdf"];

  return (
    <div className="w-full py-14 px-8">
      <Header title="Task" subTitle="Minhas tarefas">
        <div className="flex items-center gap-3">
          <Button
            fill={true}
            onClick={() => console.log("Limpar Tarefa")}
            variant="secondary"
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

      <div className="p-6 rounded-xl bg-white space-y-6">
        <TaskSeparator title="Manhã" icon={<WiDaySunnyOvercast size={24} />}>
          {tasks.map((item) => (
            <TaskItem status="finished">{item}</TaskItem>
          ))}
        </TaskSeparator>

        <TaskSeparator title="Tarde" icon={<WiDaySunny size={24} />}>
          {tasks.map((item) => (
            <TaskItem status="inprogress">{item}</TaskItem>
          ))}
        </TaskSeparator>

        <TaskSeparator title="Noite" icon={<CiCloudMoon />}>
          {tasks.map((item) => (
            <TaskItem>{item}</TaskItem>
          ))}
        </TaskSeparator>
      </div>
    </div>
  );
}
