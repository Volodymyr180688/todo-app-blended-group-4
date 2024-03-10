import { v4 as uuidv4 } from 'uuid';
import { todoList, form, TODO_KEY } from './refs';
import { marckupOneTodo,addAllTodo} from './marckup';
import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

todoList.addEventListener('click', toUpdate)

form.addEventListener("submit", addTodo);

const storageData = JSON.parse(localStorage.getItem(TODO_KEY))
if (storageData) {
     addAllTodo(storageData)
}

function addTodo(event) {
    event.preventDefault();
    const { elements: { todo } } = event.currentTarget;
    const newTodo = { text: todo.value, id: uuidv4(), status: "todo" };
    todoList.insertAdjacentHTML("afterbegin", marckupOneTodo(newTodo));
    const storage = JSON.parse(localStorage.getItem(TODO_KEY)) || [];
    storage.push(newTodo)
    localStorage.setItem(TODO_KEY,JSON.stringify(storage))
    event.currentTarget.reset()
}

let instance = null;
function toUpdate(event) {
    if (!event.target.classList.contains('btn-update')) {
        return
    }
    instance = basicLightbox.create(
        `<div class="modal-container"><button type="button" 
    class="btn-close-modal">X</button><input type="text"
    class="input-modal"/><button type="button"
    class="btn-update-modal" id="${event.target.parentNode.id}">Update todo</button></div>`,
    {
    closable: false,
        }
    );
    instance.show()
    const input = document.querySelector('.input-modal')  
    const btnClose = document.querySelector('.btn-close-modal')
    const btnUpdate = document.querySelector('.btn-update-modal')

    btnClose.addEventListener('click',()=>instance.close())

    btnUpdate.addEventListener('click', handlerUpdate)

    function handlerUpdate(e) {
        [...todoList.children].forEach(item => {
            if (item.id === e.target.id) {
                item.firstElementChild.textContent = input.value
            }
        })
        const storage = JSON.parse(localStorage.getItem(TODO_KEY))
        const storageUpdate = storage.map((item) => {
            if (item.id === e.target.id) {
                item.text = input.value
            }
            return item
        })
        localStorage.setItem(TODO_KEY,JSON.stringify(storageUpdate))
        
        instance.close()
    }
}


