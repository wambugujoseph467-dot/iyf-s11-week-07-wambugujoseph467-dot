import { state } from './state.js';
import { saveTodos } from './storage.js';
import { renderTodos } from './ui.js';
import { generateId } from './utils.js';

const input = document.getElementById('todoInput');
const button = document.getElementById('addBtn');

button.addEventListener('click', () => {
    const text = input.value.trim();

    if (text === '') return;

    state.todos.push({
        id: generateId(),
        text: text,
    });

    saveTodos(state.todos);

    renderTodos();

    input.value = '';
});

renderTodos();
