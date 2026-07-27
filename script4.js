// ---------- STATE ----------

const state = {
    todos: [],
    filter: "all",
    theme: "light"
};

// ---------- LOAD ----------

function loadState(){

    const saved = localStorage.getItem("appState");

    if(saved){
        Object.assign(state, JSON.parse(saved));
    }

}

loadState();

// ---------- SAVE ----------

function saveState(){

    localStorage.setItem(
        "appState",
        JSON.stringify(state)
    );

}

// ---------- SET STATE ----------

function setState(updates){

    Object.assign(state, updates);

    saveState();

    render();

}

// ---------- ELEMENTS ----------

const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const filter = document.getElementById("filter");
const list = document.getElementById("todoList");

// ---------- ADD ----------

function addTodo(text){

    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    setState({
        todos: [...state.todos, newTodo]
    });

}

// ---------- TOGGLE ----------

function toggleTodo(id){

    setState({

        todos: state.todos.map(todo =>

            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo

        )

    });

}

// ---------- DELETE ----------

function deleteTodo(id){

    setState({

        todos: state.todos.filter(
            todo => todo.id !== id
        )

    });

}

// ---------- FILTER ----------

function setFilter(value){

    setState({
        filter: value
    });

}

// ---------- RENDER ----------

function render(){

    list.innerHTML = "";

    let todos = state.todos;

    if(state.filter === "completed"){
        todos = todos.filter(todo => todo.completed);
    }

    if(state.filter === "pending"){
        todos = todos.filter(todo => !todo.completed);
    }

    filter.value = state.filter;

    todos.forEach(todo=>{

        const li = document.createElement("li");

        if(todo.completed){
            li.classList.add("completed");
        }

        li.innerHTML = `
            ${todo.text}
            <button onclick="toggleTodo(${todo.id})">Done</button>
            <button onclick="deleteTodo(${todo.id})">Delete</button>
        `;

        list.appendChild(li);

    });

}

// ---------- EVENTS ----------

addBtn.addEventListener("click",function(){

    const text = input.value.trim();

    if(text===""){
        return;
    }

    addTodo(text);

    input.value="";

});

filter.addEventListener("change",function(){

    setFilter(filter.value);

});

// ---------- OBSERVER PATTERN ----------

const createStore = (initialState)=>{

    let state = initialState;

    const listeners = [];

    return{

        getState:()=>state,

        setState:(updates)=>{

            state = {...state,...updates};

            listeners.forEach(listener=>listener(state));

        },

        subscribe:(listener)=>{

            listeners.push(listener);

            return ()=>{

                const index = listeners.indexOf(listener);

                listeners.splice(index,1);

            };

        }

    };

};

// Demo
const store = createStore({count:0});

const unsubscribe = store.subscribe(state=>{

    console.log("State changed:",state);

});

store.setState({count:1});
store.setState({count:2});

unsubscribe();

render();