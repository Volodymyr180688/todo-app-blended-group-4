import { buttonDelete, buttonUpdate, todoList } from "./refs";
export const marckupOneTodo = ({status, id, text}) => {
    const btn = status === "todo" ? buttonUpdate : buttonDelete;
    return `<li class="${status}" id="${id}"><p>${text}</p>${btn}</li>`;
}
const addAllTodo = (data) => {
    const marckup = data.map(marckupOneTodo).join("");
    todoList.innerHTML = marckup;
} 
