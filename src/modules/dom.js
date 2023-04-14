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

const contentDiv = document.querySelector('.content');

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
    //console.log(newtodo)
    
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
    
    const display = document.querySelector('.panelprjt');
    
    let projects = document.querySelectorAll('.project');
    projects.forEach(project => display.removeChild(project))



    for (let i=0; i<myProjects.length; i++){
       showing(myProjects[i])
   }
   

}

export function showing(item) {
    const projects = document.querySelector('.panelprjt');
    let project = document.createElement('div');
    const nam = document.createElement("h2");
    const descript = document.createElement("h4");
    
    

    nam.textContent = item.Dname;
    nam.classList.add("projectName");
    project.appendChild(nam);
  
    descript.textContent = item.description;
    descript.classList.add("projectDescription");
    project.appendChild(descript);
  
    projects.appendChild(project);
  
    project.classList.add('project');
    project.setAttribute('id', myProjects.indexOf(item));
  
    projects.addEventListener('click', (event) => {
        const clickableDiv = event.target.closest('.project');
        if (clickableDiv) {
          const clickableDivs = document.querySelectorAll('.project');
          clickableDivs.forEach((div) => {
            div.classList.remove('active');
          });
    
          clickableDiv.classList.add('active');
          
          const selectedProjectId = clickableDiv.getAttribute('id');
          const selectedProject = myProjects[selectedProjectId];
          contentDiv.innerHTML = '';
          selectedProject.todos.forEach(todo => {
            const todoElement = document.createElement('div');
            const result = formatDistanceToNowStrict(
                new Date(todo.time)
              )
            todoElement.classList.add("todo");
            todoElement.innerHTML = `
              <div class="todoName">${todo.Tname}</div>
              <div class="todoPriority">${todo.priority}</div>
              <div class="todoTime">${result}</div>
            `;
            contentDiv.appendChild(todoElement);
          });
        }
      });
}