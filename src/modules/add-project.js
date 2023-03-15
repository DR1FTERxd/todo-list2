let myProjects = [];
let newproject;

const addprjct = document.querySelector("#addBtn");
addprjct.addEventListener("click", addToProjectList);


export default class Project{
    constructor(name, description){
        this.name = name
        this.description = description
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
    console.log(myProjects)
    console.log(newproject)
}


