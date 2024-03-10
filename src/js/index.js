import { v4 as uuidv4 } from 'uuid';
const form = document.querySelector("form");
const todoList = document.querySelector(".todo-list");

form.addEventListener("submit", addTodo);

function addTodo(event) {
    event.preventDefault();
    const { elements: { todo } } = event.currentTarget;
    const newTodo = {text: todo.value, id: uuidv4(), status: "todo"}    
}

