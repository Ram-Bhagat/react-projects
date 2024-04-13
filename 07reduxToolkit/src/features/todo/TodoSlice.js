import { createSlice, nanoid } from '@reduxjs/toolkit';

export const initialState = {
  todos: [{ id: 1, text: 'hello' }],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      if(todo.text)
        state.todos.push(todo);
    },
    removeTodos: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    }
  },
});

export const { addTodos, removeTodos } = todoSlice.actions;

export default todoSlice.reducer;
