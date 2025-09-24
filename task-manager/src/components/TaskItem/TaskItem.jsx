import { tv } from "tailwind-variants";
import {
  FaCheck,
  FaArrowRotateRight,
  FaSpinner,
  FaArrowUpRightFromSquare,
  FaRegTrashCan,
} from "react-icons/fa6";

import Button from "../Button";
import { handleChengedCheck as handleChengedCheck } from "./actions";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router";

export default function TaskItem({ task, setTasks }) {
  const [deleteTaskIsLoading, setDeleteTaskIsLoading] = useState(false);

  const inputSpan = tv({
    base: `absolute flex items-center justify-center opacity-100
            peer-checked:opacity-100 w-[25px] h-[25px] top-2/4 left-3 overflow-hidden
            -translate-x-1/2 -translate-y-1/2 pointer-events-none
            transition delay-100 duration-100 ease-out
            rounded-md`,
    variants: {
      color: {
        inprogress: "bg-[var(--warning)]",
        done: "bg-[var(--primary)]",
        notstarted: "bg-[var(--secondary)]/10",
      },
    },
    defaultVariants: {
      color: "notstarted",
    },
  });

  const divContainer = tv({
    base: `flex justify-between items-center gap-4 text-[16px]
      py-2 px-4 rounded-md text-bold transition delay-100 duration-100 ease-out`,
    variants: {
      color: {
        inprogress: "bg-[var(--warning)]/10 text-[var(--warning)]",
        done: "bg-[var(--primary)]/10 text-[var(--primary)]",
        notstarted: "bg-[var(--secondary)]/10 text-[var(--secondary)]",
      },
    },
    defaultVariants: {
      color: "notstarted",
    },
  });

  const deleteTask = async (task, setDeleteTaskIsLoading) => {
    setDeleteTaskIsLoading(true);

    const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "DELETE",
    });

    if (response.status === 200) {
      setTasks((prev) => prev.filter((t) => t.id !== task.id));
      toast.success("Tarefa excluida com sucesso!");
      setDeleteTaskIsLoading(false);
      return;
    }

    toast.warning("Não foi possível deltar a Tarefa!");
    setDeleteTaskIsLoading(false);
  };

  const getStatusIconClasses = (status) => {
    switch (status) {
      case "inprogress":
        return (
          <FaArrowRotateRight
            size={20}
            color="white"
            className="animate-spin"
          />
        );
      case "done":
        return <FaCheck size={20} color="white" />;
      default:
        return null;
    }
  };

  return (
    <div className={divContainer({ color: task.status })}>
      <div className="flex items-center justify-center gap-4 relative">
        <input
          type="checkbox"
          className="cursor-pointer p-3 appearance-none checked:none bg-[var(--secondary)]/16 rounded-md"
          onChange={() => handleChengedCheck(task, setTasks)}
          checked={task.status}
        />
        <span className={inputSpan({ color: task.status })}>
          {getStatusIconClasses(task.status)}
        </span>
        {task.title}
      </div>

      <div className="flex items-center gap-1">
        <Button
          title="Deletar tarefa"
          color="warning_outline"
          disabled={deleteTaskIsLoading}
          onClick={() => deleteTask(task, setDeleteTaskIsLoading)}
        >
          {deleteTaskIsLoading ? (
            <FaSpinner
              size={20}
              color="[var(--primary)]/50"
              className="animate-spin"
            />
          ) : (
            <FaRegTrashCan size={16} />
          )}
        </Button>
        <Link
          className="item-start"
          color="secondary_outline"
          title="Ir para tarefa"
          to={`task/${task.id}`}
        >
          <FaArrowUpRightFromSquare
            className="text-[var(--secondary)]/50"
            size={14}
          />
        </Link>
      </div>
    </div>
  );
}
