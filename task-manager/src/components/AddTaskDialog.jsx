import { createPortal } from "react-dom";

import Button from "./Button";
import Input from "./Input";
import { useState } from "react";

export default function AddTaskDialog({ isOpen, setIsOpen }) {
  const [task, setTask] = useState({});

  if (isOpen === false) return null;

  const handleTimeTask = (timeStamp) => {
    console.log(timeStamp);
    console.log("TimeStamp", new Date().getTime());

    switch (timeStamp) {
      case "":
    }
    // setTask({ ...task, time: e.timeStamp })
  };

  const handleAddTask = () => {
    setTask({ ...task, status: "notstarted" });
    console.log(task);
  };

  return createPortal(
    <div
      className="fixed flex justify-center items-center top-0 left-0 overflow-hidden z-100
        w-screen h-screen bg-[var(--secondary)]/50"
    >
      <div className="flex flex-col items-center space-y-6 w-[350px] bg-white p-4">
        <div className="text-center">
          <h2>Nova Tarefa</h2>
          <span className="text-sm text-[var(--secondary)]/70">
            Insira as informações abaixo
          </span>
        </div>

        <div className="w-full">
          <label className="text-sm text-[var(--secondary)]">Título</label>
          <Input
            type="text"
            className="w-full py-3 px-4"
            onChange={(e) => setTask({ ...task, task: e.target.value })}
            value={task.task}
          />
        </div>
        <div className="w-full">
          <label className="text-sm text-[var(--secondary)]">Horário</label>
          <Input
            type="datetime-local"
            className="w-full py-3 px-4"
            onChange={(e) => handleTimeTask(e.timeStamp)}
            value={task.time}
          />
        </div>
        <div className="w-full">
          <label className="text-sm text-[var(--secondary)]">Descrição</label>
          <Input
            type="text"
            className="w-full py-3 px-4"
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            value={task.description}
          />
        </div>

        <div className="flex gap-4 w-full">
          <Button
            className="text-sm w-full"
            variant="secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            Cancelar
          </Button>
          <Button
            className="text-sm w-full"
            variant="primary"
            onClick={handleAddTask}
          >
            Salvar
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
}
