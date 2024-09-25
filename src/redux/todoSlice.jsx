import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.lists.push({
        id: Date.now(),
        title: action.payload,
        todos: [],
      });
    },
    deleteList: (state, action) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload);
    },
    editListTitle: (state, action) => {
      const list = state.lists.find((list) => list.id === action.payload.id);
      if (list) list.title = action.payload.title;
    },
    addTodo: (state, action) => {
      const list = state.lists.find(
        (list) => list.id === action.payload.listId
      );
      if (list) {
        list.todos.push({
          id: Date.now(),
          text: action.payload.text,
        });
      }
    },
    deleteTodo: (state, action) => {
      state.lists.forEach((list) => {
        list.todos = list.todos.filter((todo) => todo.id !== action.payload);
      });
    },
    editTodo: (state, action) => {
      state.lists.forEach((list) => {
        const todo = list.todos.find((todo) => todo.id === action.payload.id);
        if (todo) todo.text = action.payload.text;
      });
    },
  },
});

export const {
  addList,
  deleteList,
  editListTitle,
  addTodo,
  deleteTodo,
  editTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
