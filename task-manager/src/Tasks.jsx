import { useEffect, useState } from "react";

import Input from "./components/Input";
import Button from "./components/Button";
import Header from "./components/Header";

export default function Tasks() {
  const [textInput, setTextInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (textInput) {
      setTasks((prev) => [...prev, textInput]);
      setTextInput("");
    } else alert("Uma tarefa deve ser informada");
  };

  const handleAddTaskOnKeyDown = (event) => {
    if (event.key === "Enter")
      if (textInput) {
        setTasks((prev) => [...prev, textInput]);
        setTextInput("");
      } else alert("Uma tarefa deve ser informada");
  };

  useEffect(() => {
    console.log("mounting...");
  }, []);

  useEffect(() => {
    console.log("updating");
  });

  return (
    <div>
      <Header>
        <div className="flex">
          <h3>My Tasks</h3>
          <Button title="Home" isLink={true} />
          <Button title="About" isLink={true} />
        </div>
        <div></div>
      </Header>

      <div className="container">
        <Input
          className="mr-2"
          placeholder="Enter text"
          onChange={(e) => setTextInput(e.target.value)}
          onKeyDown={(event) => handleAddTaskOnKeyDown(event)}
          value={textInput}
        />
        <Button
          className="bg-green text-white"
          title="Add Task"
          onClick={handleAddTask}
          isLink={false}
        />

        <Header className="mt-2">
          <h3>Tasks</h3>
        </Header>
        {tasks.length > 0 ? (
          <ul className="mt-2">
            {tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-2">No tasks at the moment</p>
        )}
      </div>
    </div>
  );
}
