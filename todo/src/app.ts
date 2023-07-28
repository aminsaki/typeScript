const form = document.getElementById("todo-title") as HTMLInputElement
const title = document.getElementById("title") as HTMLInputElement
const titleError = document.getElementById("title-errors") as HTMLParagraphElement

interface TodoInterface {
    id: number,
    title: string,
    status: boolean
}

class Todo implements TodoInterface {
    id: number;
    title: string;
    status: boolean;

    public constructor(todo: TodoInterface) {
        this.id = todo.id;
        this.title = todo.title;
        this.status = todo.status
    }
}

class UI {
    public addTodoToLIST(todo: TodoInterface) {
        const list = document.getElementById('todo-body')!;
        const tr = document.createElement("tr")
        tr.innerHTML = `
                    <td scope="row">${todo.id}</td>
                    <td>${todo.title}</td>
                    <td><input type="checkbox" name="todo-checkbox"  ${todo.status ? 'checked' : ""} onclick="Store.changeStatusTodo(${todo.id})"></td>
                    <td><a href="#" class="form-control  btn btn-danger " onclick="ui.removeTode(event , ${todo.id})" >Delete</a></td>`;
        list.appendChild(tr)
    }
    public removeTode(e: Event, id: number) {
        const element = e.target as HTMLInputElement
        element.parentElement!.parentElement?.remove()
        const todos = Store.getTodo()
        const newTodos = todos.filter((todo) => todo.id !== id)
        localStorage.setItem('todos', JSON.stringify(newTodos))
    }
}

class Store {

    static displyay() {
        const todos = Store.getTodo()
        todos.forEach((todo) => {
            ui.addTodoToLIST(todo)
        })
    }

    static getTodo() {
        let todos: TodoInterface[];
        if (localStorage.getItem('todos')) {
            todos = JSON.parse(localStorage.getItem('todos')!)
        } else {
            todos = []
        }
        return todos;

    }

    static addTodo(todo: TodoInterface) {
        const todos = Store.getTodo();
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    static changeStatusTodo(id: number) {

        const todos = Store.getTodo();
        const newTodo = todos.map((todo) => todo.id === id ? {...todo, status: !todo.status} : todo)
        localStorage.setItem('todos', JSON.stringify(newTodo))

    }
}

const ui = new UI()

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    if (title.value.trim() === '') {
        titleError.innerHTML = "Title is required"
    } else {
        const value: TodoInterface = {
            id: Math.round(Math.random() * 100),
            title: title.value,
            status: false
        }
        const todo = new Todo(value)
        Store.addTodo(todo)
        Store.displyay()
        title.value = ""

    }
})
document.addEventListener('DOMContentLoaded', () => {
    Store.displyay()
})






