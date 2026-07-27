import { state } from './state.js';

const list = document.getElementById('todoList');

export function renderTodos() {
    list.innerHTML = '';

    state.todos.forEach((todo) => {
        const li = document.createElement('li');

        li.textContent = todo.text;

        list.appendChild(li);
    });
}
