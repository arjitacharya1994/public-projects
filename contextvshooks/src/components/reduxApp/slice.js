import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push({
        id: state.length + 1,
        text: action.payload,
        completed: false,
      });
    },
    markAsDone(state, action) {
      const todoIndex = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state[todoIndex].completed = !state[todoIndex].completed;
    },
  },
});

export const { addTodo, markAsDone } = todosSlice.actions;
export default todosSlice.reducer;
