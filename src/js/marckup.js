import { buttonDelete, buttonUpdate, todoList } from "./refs";
export const marckupOneTodo = ({status, id, text}) => {
    const btn = status === "todo" ? buttonUpdate : buttonDelete;
    return `<li class="${status}" id="${id}"><p>${text}</p>${btn}</li>`;
}
export const addAllTodo = (data) => {
    const marckup = data.map(marckupOneTodo).join("");
    todoList.innerHTML = marckup;
} 






//*Зміна статусу кнопки в інтерфейсі !!!

// if (element.classList.contains('todo')) {
//     element.classList.replace('todo', 'complete');
//     element.lastElementChild.remove();
//     element.insertAdjacentHTML('beforeend', buttonDelete);
//   } else {
//     element.classList.replace('complete', 'todo');
//     element.lastElementChild.remove();
//     element.insertAdjacentHTML('beforeend', buttonUpdate);
//   }