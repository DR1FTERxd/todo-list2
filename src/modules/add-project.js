import Todo from "./todo";
import { todo } from "./todo";
import { getTodoInputs } from "./todo";
import { addToTodos } from "./todo";



const myProjects = [];
console.log(todo)
const addprjct = document.querySelector("#addBtn");
addprjct.addEventListener("click", addToProjectList);


export default class Project{
    constructor(Dname, description){
        this.Dname = Dname
        this.description = description
        this.todo = todo;
        }
    
}

// todos sujungti su projectu  
export function getFromInput(){
     const name = document.getElementById("names").value
     const Pdescription = document.getElementById("description").value
    return new Project(name, Pdescription)
}

export function addToProjectList(event) {
    event.preventDefault();
    const newproject = getFromInput();
    myProjects.push(newproject)
    render()
    console.log(myProjects)
}


export function render() {
    const display = document.querySelector('.panel');
    let projects = document.querySelectorAll('.project');
    projects.forEach(project => display.removeChild(project))

    for (let i=0; i<myProjects.length; i++){
       showing(myProjects[i])
   }
}





export function showing(item) {
    const projects = document.querySelector('.panel')
    let project = document.createElement('div')
    const nam = document.createElement("h2")
    const descript = document.createElement("h4")

    project.classList.add('project')
    project.setAttribute('id', myProjects.indexOf(item))
    
    
    

    project.addEventListener("click", function() {
  // remove active class from all elements with the class "active"
    var activeProject = document.querySelectorAll(".active");
    for (var i = 0; i < activeProject.length; i++) {
        activeProject[i].classList.remove("active");
    }
  
  // add the active class to the clicked element
  project.classList.add("active");
});

    nam.textContent = item.Dname
    nam.classList.add("name")
    project.appendChild(nam)

    descript.textContent = item.description
    descript.classList.add("description")
    project.appendChild(descript)

    projects.appendChild(project)

}
