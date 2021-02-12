/**********************
 * EXPORT FUNCTIONS
 ***********************/

// Retrieve DOM content
export function getDOMContent() {
   const content = document.getElementById('newTask_content').value;
   return content;
}

// Reset add task value
export function resetDOMContent(){
   document.getElementById('newTask_content').value = "";
}

// Display all tasks
export function displayToDoList(parent, list) {
   parent.innerHTML = "";
   list.forEach(toDo => {
       displayTask(toDo);
   });
}

// get the uncompleted task count
export function getTaskCount(domLocation, list) {
   if (list != null) {
      const count = list.length;
      domLocation.innerText = "Remaining Tasks: " + count;
   };
}

/**********************
 * LOCAL FUNCTIONS
 ************************/


// Display each task
function displayTask(toDo) {
   //Display Todo
   const item = document.createElement("li");
   item.id = toDo.id;
   if(toDo.completed){
       //Add complete class name for later
       item.className = "completed";
   }
   const text = document.createTextNode(toDo.content);
   item.appendChild(text);
   document.getElementById("taskList").appendChild(item);

   // Display close button
   const span = document.createElement("SPAN");
   const removeIndicator = document.createTextNode("X");
   span.appendChild(removeIndicator);
   span.className = "delete";
   span.id = toDo.id;
   item.appendChild(span);
}


