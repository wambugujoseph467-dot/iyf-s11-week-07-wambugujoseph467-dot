const STORAGE_KEY = 'todos';
const FILTER_KEY = 'filter';

const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const filter = document.getElementById('filter');

// ---------- Storage Helpers ----------

function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromStorage(key, defaultValue) {
    const data = localStorage.getItem(key);

    if (data) {
        return JSON.parse(data);
    }

    return defaultValue;
}

// ---------- Todo Helpers ----------

function loadTodos() {
    return getFromStorage(STORAGE_KEY, []);
}

function saveTodos(todos) {
    saveToStorage(STORAGE_KEY, todos);
}

// ---------- Add Todo ----------

function addTodo(text) {
    const todos = loadTodos();

    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date().toISOString(),
    };

    todos.push(newTodo);

    saveTodos(todos);

    renderTodos();
}

// ---------- Toggle Todo ----------

function toggleTodo(id) {
    const todos = loadTodos();

    const todo = todos.find((t) => t.id === id);

    if (todo) {
        todo.completed = !todo.completed;
    }

    saveTodos(todos);

    renderTodos();
}

// ---------- Delete Todo ----------

function deleteTodo(id) {
    let todos = loadTodos();

    todos = todos.filter((todo) => todo.id !== id);

    saveTodos(todos);

    renderTodos();
}

// ---------- Render ----------

function renderTodos() {
    const todos = loadTodos();

    todoList.innerHTML = '';

    const currentFilter = filter.value;

    saveToStorage(FILTER_KEY, currentFilter);

    let filteredTodos = todos;

    if (currentFilter === 'completed') {
        filteredTodos = todos.filter((todo) => todo.completed);
    }

    if (currentFilter === 'pending') {
        filteredTodos = todos.filter((todo) => !todo.completed);
    }

    filteredTodos.forEach((todo) => {
        const li = document.createElement('li');

        if (todo.completed) {
            li.classList.add('completed');
        }

        const text = document.createElement('span');
        text.textContent = todo.text;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Done';

        completeBtn.addEventListener('click', function () {
            toggleTodo(todo.id);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', function () {
            deleteTodo(todo.id);
        });

        li.appendChild(text);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    });
}

// ---------- Add Button ----------

addBtn.addEventListener('click', function () {
    const text = input.value.trim();

    if (text === '') {
        alert('Please enter a task.');
        return;
    }

    addTodo(text);

    input.value = '';
});

// ---------- Filter ----------

filter.addEventListener('change', function () {
    renderTodos();
});

// ---------- Start ----------

document.addEventListener('DOMContentLoaded', function () {
    const savedFilter = getFromStorage(FILTER_KEY, 'all');

    filter.value = savedFilter;

    renderTodos();
});
