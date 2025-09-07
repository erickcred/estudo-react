export const handleCleanTask = (setTasks) => {
  setTasks([]);
};

export const handleTaskChengedCheck = (itemTask, setTasks) => {
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
