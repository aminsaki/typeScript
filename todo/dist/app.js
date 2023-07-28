"use strict";
const form = document.getElementById("todo-title");
const title = document.getElementById("title");
const titleError = document.getElementById("title-errors");
class Todo {
    id;
    title;
    status;
    constructor(todo) {
        this.id = todo.id;
        this.title = todo.title;
        this.status = todo.status;
    }
}
class UI {
    addTodoToLIST(todo) {
        const list = document.getElementById('todo-body');
        const tr = document.createElement("tr");
        tr.innerHTML = `
                    <td scope="row">${todo.id}</td>
                    <td>${todo.title}</td>
                    <td><input type="checkbox" name="todo-checkbox"  ${todo.status ? 'checked' : ""} onclick="Store.changeStatusTodo(${todo.id})"></td>
                    <td><a href="#" class="form-control  btn btn-danger " onclick="ui.removeTode(event , ${todo.id})" >Delete</a></td>`;
        list.appendChild(tr);
    }
    removeTode(e, id) {
        const element = e.target;
        element.parentElement.parentElement?.remove();
        const todos = Store.getTodo();
        const newTodos = todos.filter((todo) => todo.id !== id);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }
}
class Store {
    static displyay() {
        const todos = Store.getTodo();
        todos.forEach((todo) => {
            ui.addTodoToLIST(todo);
        });
    }
    static getTodo() {
        let todos;
        if (localStorage.getItem('todos')) {
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        else {
            todos = [];
        }
        return todos;
    }
    static addTodo(todo) {
        const todos = Store.getTodo();
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    static changeStatusTodo(id) {
        const todos = Store.getTodo();
        const newTodo = todos.map((todo) => todo.id === id ? { ...todo, status: !todo.status } : todo);
        localStorage.setItem('todos', JSON.stringify(newTodo));
    }
}
const ui = new UI();
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (title.value.trim() === '') {
        titleError.innerHTML = "Title is required";
    }
    else {
        const value = {
            id: Math.round(Math.random() * 100),
            title: title.value,
            status: false
        };
        const todo = new Todo(value);
        Store.addTodo(todo);
        Store.displyay();
        title.value = "";
    }
});
document.addEventListener('DOMContentLoaded', () => {
    Store.displyay();
});
//# sourceMappingURL=app.js.map