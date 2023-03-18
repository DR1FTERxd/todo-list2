export let todo = [];
const addtodo = document.querySelector("#addTodo");
addtodo.addEventListener("click", addToTodos);

export default class Todo {
    constructor(Tname, priority, time){
        this.Tname = Tname
        this.priority = priority
        this.time  = time
    }
}

export function getTodoInputs(){
    const Tname = document.getElementById("todo_name").value
    const priority = document.getElementById("todo_priority").value
    const time = document.getElementById("todo_time").value
    return new Todo(Tname, priority, time)
}

export function addToTodos(event){
    event.preventDefault();
    const newtodo = getTodoInputs()
    let actv = document.querySelectorAll('.project active')
    actv.push(newtodo)
    todo.push(newtodo)
    //console.log(newtodo)
    console.log(todo)
    
}