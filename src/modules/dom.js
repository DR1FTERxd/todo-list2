import { formatDistanceToNow, formatDistanceToNowStrict } from "date-fns";
import Todo from "./todo";


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
            <div class="todoTime"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flag-fill" viewBox="0 0 16 16">
            <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
          </svg></div>
          `;
          contentDiv.appendChild(todoElement);
        });
      }
    });
}