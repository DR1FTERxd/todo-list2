import { getTodoInputs } from "./dom";




export default class Todo {
    constructor(Tname, priority, time){
        this.Tname = Tname
        this.priority = priority
        this.time  = time
    }
}





////export function push() {
    
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
//}
