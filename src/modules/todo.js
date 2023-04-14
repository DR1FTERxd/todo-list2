import { getTodoInputs } from "./dom";




export default class Todo {
    constructor(Tname, priority, time){
        this.Tname = Tname
        this.priority = priority
        this.time  = time
    }
}


export function time (item) {
    const result = formatDistanceToNowStrict(
        new Date(item.time)
      )
    console.log(result)
}

