
import Todo from "./todo";

let myProjects = [];
let newtodo
const addprjct = document.querySelector("#addBtn");
addprjct.addEventListener("click", addToProjectList);

const addtodo = document.querySelector("#addTodo");
addtodo.addEventListener("click", addToTodos);

const randomId = function(length = 6) { return Math. random(). toString(36)}
const prctID = randomId(15)


export function getTodoInputs(){
    const Tname = document.getElementById("todo_name").value
    const priority = document.getElementById("todo_priority").value
    const time = document.getElementById("todo_time").value
    const projectSelect = document.getElementById("projectsDropdown");
    
    let projectId = projectSelect.value;
    let selectedProject = myProjects.find(function(project) {
        return project.id == projectId
    });
    if (selectedProject){
        let todoID = selectedProject.todo.length + 1;
        let todo = {id: todoID, Tname, priority, time };
        selectedProject.todo.push(todo)
        console.log("todo created", todo);
        console.log('todos in a project', selectedProject.name + ":", selectedProject)
    }
    return new Todo(Tname, priority, time)
}

function populateSelectedProject() {
    let projectSelect = document.getElementById('projectsDropdown')
    projectSelect.innerHTML = "<option value=''>Select a project...</option>"
    myProjects.forEach(function(project){
        let option = document.createElement("option")
        option.value = project.id;
        option.text = project.name;
        option.description = project.description
        projectSelect.add(option)
    })
}


export default class Project {
    constructor(Dname, description){
        this.Dname = Dname
        this.description = description
        this.id = prctID
        }
}


export function addToTodos(event){
    event.preventDefault();
    newtodo = getTodoInputs();
    
    let slct = document.getElementById('projectsDropdown').value
    console.log(slct)
    console.log(newtodo)
    
}

export function getFromInput(){
     const Dname = document.getElementById("names").value
     const description = document.getElementById("description").value

    return new Project(Dname, description)
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
   // dd.innerHTML = myProjects.map((item) =>
   // `<option value="${item.Dname}">${item.Dname}</option>`
    //).join('');
}
const contentDiv = document.querySelector('.content');

export function showing(item) {
    const projects = document.querySelector('.panel')
    let project = document.createElement('div')
    const nam = document.createElement("h2")
    const descript = document.createElement("h4")
    project.classList.add('project')
    project.setAttribute('id', myProjects.indexOf(item))
    
    const clickableDivs = document.querySelectorAll('.project');

    clickableDivs.forEach((div) => {
    div.addEventListener('click', () => {
    
    clickableDivs.forEach((div) => {
      div.classList.remove('active');
    });
    
    div.classList.add('active');
    
    const contentId = div.getAttribute('id');
    
    contentDiv.innerHTML = `Content for ${contentId}`;

  });
});
    nam.textContent = item.Dname
    nam.classList.add("name")
    project.appendChild(nam)

    descript.textContent = item.description
    descript.classList.add("description")
    project.appendChild(descript)

    projects.appendChild(project)

}
