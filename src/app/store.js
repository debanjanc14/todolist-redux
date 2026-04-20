import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/Todolist/todoSlice";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorgaeUtils";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState: {
    todos: loadFromLocalStorage(),
  },
});
store.subscribe(() => {
  saveToLocalStorage(store.getState().todos);
});

export default store;
