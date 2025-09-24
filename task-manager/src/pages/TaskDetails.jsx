import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "sonner";

export default function TaskDetails() {
  const { taskId } = useParams();
  const [task, setTask] = useState(undefined);

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "GET",
      });
      const responseData = await response.json();
      console.log(responseData);
      
      if (!responseData) {
        toast.warning("Task not found!!")
        return;
      }
        
      setTask(responseData);
    }

    fetchTask();
  }, [taskId]);

  return (
    <div>
      <h1>Task Details page</h1>
      {task !== undefined && (
        <>
          <p>{ task.id }</p>
          <p>{ task.title }</p>
          <p>{ task.description }</p>
          <p>{ task.status }</p>
        </>
      )}
    </div>
  );
}
