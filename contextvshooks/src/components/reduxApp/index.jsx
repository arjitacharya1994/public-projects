import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import TodoApp from "./../todoApp";
import { store } from "./store";
import { addTodo, markAsDone } from "./slice";
import { App1, App2, App3 } from "../../App";

function App() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state);
  const onAdd = (v) => {
    dispatch(addTodo(v));
  };
  console.log("Redux App");

  const onComplete = (id) => dispatch(markAsDone(id));
  return (
    <TodoApp
      onAdd={onAdd}
      header="Redux App"
      onComplete={onComplete}
      list={todos}
    />
  );
}

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <App1>
        <App2>
          <App3>
            <App />
          </App3>
        </App2>
      </App1>
    </Provider>
  );
};

export default ReduxApp;
