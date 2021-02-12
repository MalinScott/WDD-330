// Local Variable
const listName = "toDoList";

/**************************************************************
 *  SAVE LIST
 * Check for list , create new list or add to existing list
 * **********************************************************/
export function saveList(toDo){
   console.log("Saving List");
   // check for previous list
   if(!localStorage.getItem(listName)){
      var array = [];
      array.push(toDo);
      localStorage.setItem(listName, JSON.stringify(array));
   }
   // add to the list if one exists
   else {
      var array = JSON.parse(localStorage.getItem(listName));
      array.push(toDo);
      localStorage.setItem(listName, JSON.stringify(array));
      console.log(array);
   }
}

/***************************************************************
 *  GET LIST: 
 * Get the content from the list in storage  and return it
 * **********************************************************/
export function getList(filter){
   console.log('filter: ' + filter);
   let list = JSON.parse(localStorage.getItem(listName));
   if(list != null){
       if(filter != null && filter != "all"){
           list = list.filter(task=> {
               console.log("task.completed: ");
               console.log(task.completed);
               return task.completed === filter;
           }); 
       }
   }
   return list;
}

/***************************************************************
 *  UPDATE COMPLETD: 
 * Get the content from the list in storage  and return it
 * **********************************************************/
export function updateList(id){
   let array = JSON.parse(localStorage.getItem(listName));
   for(let i = 0; i < array.length; i++){
       if(parseInt(array[i].id, 10) === parseInt(id, 10)){
           if(array[i].completed === false){
               array[i].completed = true;
           }
           else{
               array[i].completed = false;
           }
       }
   }
   localStorage.setItem(listName, JSON.stringify(array));
}

/***************************************************************
 *  REMOVE TASK: 
 * Get the content from the list in storage  and return it
 * **********************************************************/
export function removeTask(id){
   let array = JSON.parse(localStorage.getItem(listName));
   for(let i = 0; i < array.length; i++){
      if(parseInt(array[i].id, 10) === parseInt(id, 10)){
         array.splice(i,1);
     }
   }
   localStorage.setItem(listName,JSON.stringify(array));
}