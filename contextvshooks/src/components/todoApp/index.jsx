import React, { useState } from "react";

const Header = ({ title }) => {
  return (
    <header>
      <h3>{title}</h3>
    </header>
  );
};

const InputContainer = ({ handleNameChange, name, onAdd }) => {
  return (
    <div className="input-container">
      <input value={name} onChange={handleNameChange} />
      <button onClick={() => onAdd(name)}>Add Todo</button>
    </div>
  );
};
function TodoApp({ onAdd, onComplete, list, header }) {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="todo-container">
      <Header title={header} />
      <InputContainer
        handleNameChange={handleNameChange}
        name={name}
        onAdd={onAdd}
      />
      <div className="list-container -flex">
        <ul>
          {list?.map((elm) => {
            const { text, completed } = elm;
            return (
              <li className={`${completed ? "done" : "pending"}`}>
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={() => onComplete(elm)}
                />
                {text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
