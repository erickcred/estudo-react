import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";
import { useRef, useState } from "react";
import Select from "./Select";
import "./AddTaskDialog.css";

export default function AddTaskDialog({ isOpen, setIsOpen, handleSubmit }) {
  const [errors, setErrors] = useState([]);

  const nodeRef = useRef();
  const titleRef = useRef();
  const timeRef = useRef();
  const descriptionRef = useRef();

  const handleAddTask = () => {
    const newErrors = [];
    const message = "Este campo é obrigatório!";

    if (!titleRef.current.value.trim())
      newErrors.push({ inputName: "title", message: message });
    if (!timeRef.current.value.trim())
      newErrors.push({ inputName: "time", message: message });

    setErrors(newErrors);
    if (newErrors.length > 0) return;

    handleSubmit({
      id: crypto.randomUUID(),
      title: titleRef.current.value.trim(),
      description: descriptionRef.current.value.trim(),
      time: timeRef.current.value.trim(),
      status: "notstarted",
    });
    handleClose();
  };

  const handleClose = () => {
    setErrors([]);
    setIsOpen(!isOpen);
  };

  const titleError = errors.find((e) => e.inputName === "title");
  const timeError = errors.find((e) => e.inputName === "time");

  return (
    <CSSTransition
      in={isOpen}
      timeout={600}
      nodeRef={nodeRef}
      className="showAddTaskDialog"
      mountOnEnter
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className={`fixed flex justify-center items-center top-0 left-0 overflow-hidden
              w-screen h-screen bg-[var(--secondary)]/30 backdrop-blur-[1.5px]`}
          >
            <div className="flex flex-col items-center space-y-6 md:w-[365px] w-[80%] h-auto bg-white p-5 rounded-md shadow overflow-auto">
              <div className="text-center">
                <h2 className="text-xl font-semibold">Nova Tarefa</h2>
                <p className="text-sm text-[var(--secondary)]/70">
                  Insira as informações abaixo
                </p>
              </div>

              <div className="w-full">
                <Input
                  ref={titleRef}
                  id="title"
                  type="text"
                  className={`w-full py-3 px-4`}
                  label="Título*"
                  errorMessage={titleError?.message}
                  placeholder="Insira o título da tarefa"
                  title="Este camopo é obrigatório!"
                />
              </div>
              <div className="w-full">
                <Select
                  id="time"
                  className={`w-full py-3 px-4`}
                  title="Este camopo é obrigatório!"
                  errorMessage={timeError?.message}
                  ref={timeRef}
                  label="Horário*"
                >
                  <option></option>
                  <option value="morning">Manhã</option>
                  <option value="afternoon">Tarde</option>
                  <option value="evening">Noite</option>
                </Select>
              </div>
              <div className="w-full">
                <TextArea
                  id="descripption"
                  label="Description"
                  rows="3"
                  className="w-fulld"
                  ref={descriptionRef}
                ></TextArea>
                {/* <Input
                  id="description"
                  type="text"
                  className="w-full py-3 px-4"
                  label="Descrição"
                  placeholder="Insira a descrição da tarefa"
                /> */}
              </div>

              <div className="flex gap-4 w-full">
                <Button
                  className="text-md py-3 w-full"
                  color="secondary"
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
                <Button
                  className="text-lg py-3 w-full"
                  color="primary"
                  onClick={handleAddTask}
                >
                  Salvar
                </Button>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </CSSTransition>
  );
}
