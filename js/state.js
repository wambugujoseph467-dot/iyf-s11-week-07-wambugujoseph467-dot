import { loadTodos } from "./storage.js";

export const state = {
    todos: loadTodos()
};