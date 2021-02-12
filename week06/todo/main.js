import ToDo from './toDo.js';

const newTask = document.getElementById("addTask");
newTask.addEventListener("click", function(){
    // Create instance of todo object. Add to list.
    const todo = new ToDo();
    todo.addToList();
    todo.filterList();
    todo.addFilterEventListener();
});

window.addEventListener('load', () => {
    // Show a list of existing todos on load
    const todo = new ToDo();
    todo.filterList();
    todo.addFilterEventListener();
    
  });



