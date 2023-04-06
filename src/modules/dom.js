import { formatDistanceToNow, formatDistanceToNowStrict } from "date-fns";
import Todo from "./todo";
import { time } from "./todo";

let myProjects = [];
let newtodo;
const addprjct = document.querySelector("#addBtn");
addprjct.addEventListener("click", addToProjectList);

const addtodo = document.querySelector("#addTodo");
addtodo.addEventListener("click", addToTodos);

const randomId = function(length = 6) { return Math. random(). toString(36)};



export default class Project {
    constructor(Dname, description, todos=[]){
        this.Dname = Dname
        this.description = description
        this.id = randomId(15)
        this.todos = todos
        }
}
export function populateSelectedProject() {
    let projectSelect = document.getElementById('projectsDropdown')
    projectSelect.innerHTML = ""
    myProjects.forEach(function(project){
        let option = document.createElement("option")
        option.value = project.id;
        option.text = project.Dname;
        option.description = project.description
        projectSelect.add(option)


        
    })
}

export function getTodoInputs(){
    const Tname = document.getElementById("todo_name").value
    const priority = document.getElementById("todo_priority").value
    const time = document.getElementById("todo_time").value
 
    return new Todo(Tname, priority, time)
}

export function addToTodos(event, item){
    event.preventDefault();
    newtodo = getTodoInputs();
    let projectSelect = document.getElementById("projectsDropdown");
    const selectedProjectId = projectSelect.value;
    const selectedProject = myProjects.find(project => project.id === selectedProjectId);
    selectedProject.todos.push(newtodo);


    getTodoInputs()
    console.log(newtodo)
    
}

export function getFromInput(){
     const Dname = document.getElementById("names").value
     const description = document.getElementById("description").value

    return new Project(Dname, description,)
}
   
export function addToProjectList(event) {
    event.preventDefault();
    const newproject = getFromInput();
    myProjects.push(newproject)
    render()
    console.log(myProjects)
    populateSelectedProject()
}

export function render() {
    
    const display = document.querySelector('.panel');
    
    let projects = document.querySelectorAll('.project');
    projects.forEach(project => display.removeChild(project))



    for (let i=0; i<myProjects.length; i++){
       showing(myProjects[i])
   }
   
   //let dd = document.getElementById("projectsDropdown");
   //dd.innerHTML = myProjects.map((item) =>
    //`<option value="${item.Dname}">${item.Dname}</option>`
   //).join('');
}



export function showing(item) {
    const projects = document.querySelector('.panel')
    let project = document.createElement('div')
    const nam = document.createElement("h2")
    const descript = document.createElement("h4")
    const todoName = document.createElement('h2')
    const todoPriority = document.createElement('h2')
    const todotime = document.createElement('h2')
    const clickableDivs = document.querySelectorAll('.project');
    
    nam.classList.add("name");
    descript.classList.add("description");
    projects.innerHTML = ''
    project.classList.add('project')
    
    myProjects.forEach(project => {
        nam.textContent = `${project.Dname}`;
        descript.textContent = `${project.description}`;
        projects.appendChild(nam)
        projects.appendChild(descript)

    })

    



    //nam.textContent = item.Dname
    //nam.classList.add("name")
    //project.appendChild(nam)

    //descript.textContent = item.description
    //descript.classList.add("description")
    //project.appendChild(descript)
    
    //projects.appendChild(project)

 
    project.setAttribute('id', myProjects.indexOf(item))

    clickableDivs.forEach((div) => {
    div.addEventListener('click', () => {
    clickableDivs.forEach((div) => {
      div.classList.remove('active');
    });
    div.classList.add('active');
    const contentId = div.getAttribute('id');
    //contentDiv.innerHTML = `${}`;
  });
});
   // todoName.textContent = item.Tname
   // todoName.classList.add('todoName')
  //  contentDiv.appendChild(todoName)
    
   /// todoPriority.textContent = item.priority
   // todoPriority.classList.add('todoPriority')
   // contentDiv.appendChild(todoPriority)
    
   // todotime.textContent = item.time
   //todotime.classList.add('todotime')
    //contentDiv.appendChild(todotime)

}
