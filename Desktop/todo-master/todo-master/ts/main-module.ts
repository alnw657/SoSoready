class Task{
  id: number;
  name: string;
  status: boolean;
  constructor(taskname: string){
    this.id = new Date().getTime();
    this.name = taskname;
    this.status = false;
  }  
}

class TaskManager{
tasks : Array<Task>;
constructor( array: Array<Task>){
this.tasks = array;
}
add( task: Task ){
this.tasks.push(task);
console.log( this.tasks );
}
}

class ListView{
    list:HTMLElement;
    constructor( listid:string ){
        this.list = document.getElementById( listid );
    }
    render( items:Array<Task> ){
        items.forEach((task) => {
            let id = task.id;
            let name = task.name;
            let status = task.status;
        });
    }
}
//initialise
var taskarray = [];
var taskmanager = new TaskManager(taskarray);

//reference to form
const taskform = (<HTMLFormElement> document.getElementById('task-form'));
taskform.addEventListener('submit',( event: Event) => {
  event.preventDefault();
const input = document.getElementById('task-input');
  let taskname = (<HTMLInputElement>input).value;
    taskform.reset();
 // console.log(taskname);
    let task = new Task( taskname );
    taskmanager.add( task );
});