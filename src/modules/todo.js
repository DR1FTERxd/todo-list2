import { getFromInput } from "./add-project";
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
 export let newtodo = getTodoInputs()
export function addToTodos(event){
    event.preventDefault();
    
    todo.push(newtodo)

    console.log(newtodo)
    //console.log(selectedProject)
}
export function push() {
    
    let project = document.createElement('div')
    project.addEventListener("click", function() {

        var activeProject = document.querySelectorAll(".active");
        for (var i = 0; i < activeProject.length; i++) {
            activeProject[i].classList.remove("active");
        }
        project.classList.add("active");
        });

        if (project.classList.contains('active')){
            getFromInput.push(todo)
        }


}
