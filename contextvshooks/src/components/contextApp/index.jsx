import React, { createContext, useState } from "react";
import TodoApp from "./../todoApp";
import { App1, App2, App3 } from "../../App";

const ContextApp = () => {
  const [todos, setTodos] = useState([]);

  const TodoContext = createContext();

  const onAdd = (name) => {
    setTodos((pd) => [
      ...pd,
      { id: pd.length + 1, text: name, completed: false },
    ]);
  };

  const onComplete = (todo) => {
    const copy = [...todos];
    const itemIndex = todos.findIndex((elm) => elm.id === todo.id);
    copy[itemIndex].completed = !todos[itemIndex].completed;
    setTodos(copy);
  };
  console.log("Context App");

  return (
    <TodoContext.Provider value={todos}>
      <div className="app-container">
        <div>
          <App1>
            <App2>
              <App3>
                <TodoApp
                  header="Context App"
                  onAdd={onAdd}
                  onComplete={onComplete}
                  list={todos}
                />
              </App3>
            </App2>
          </App1>
        </div>
      </div>
    </TodoContext.Provider>
  );
};

export default ContextApp;
