import { newtodo } from "./todo";



let myProjects = [];
//console.log(todo)
const addprjct = document.querySelector("#addBtn");
addprjct.addEventListener("click", addToProjectList);

//pushinti i aktyvu objecta






export default class Project{
    constructor(Dname, description){
        this.Dname = Dname
        this.description = description
        this.todo = newtodo;
        }
    
}

 
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
   
   let dd = document.getElementById("projectsDropdown");
    dd.innerHTML = myProjects.map((item) =>
    `<option value="${item.Dname}">${item.Dname}</option>`
    ).join('');
}





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
    
    
    const contentDiv = document.querySelector('.content');
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
