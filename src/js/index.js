import { v4 as uuidv4 } from 'uuid';
import { todoList, form } from './refs';
import { marckupOneTodo } from './marckup';


form.addEventListener("submit", addTodo);

function addTodo(event) {
    event.preventDefault();
    const { elements: { todo } } = event.currentTarget;
    const newTodo = { text: todo.value, id: uuidv4(), status: "todo" };
    todoList.insertAdjacentHTML("afterbegin", marckupOneTodo(newTodo));
}

