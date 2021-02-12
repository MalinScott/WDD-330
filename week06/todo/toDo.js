// IMPORTS
import { getDOMContent, resetDOMContent, displayToDoList, getTaskCount } from './utilities.js'
import { saveList, getList, updateList, removeTask } from './ls.js'


/***********************************************
 * CLASS TODO
 **********************************************/
export default class ToDo {
   constructor() {
      this.completed = false;
      this.id =  Date.now();
   }
   getDOMContent() {
      this.content = getDOMContent();
   }

   markCompleted() {
      this.completed = true;
   }

   addToList() {
      const content = getDOMContent();
      if (content != "") {
         this.content = content;
         saveList(this);
         resetDOMContent();
      }
   }

   getToDoList(aFilter) {
      const list = getList(aFilter);
      console.log("list retrieved:", list);
      return list;
   }

   filterList(aFilter) {
      if (this.getToDoList(aFilter)) {
         displayToDoList(document.getElementById("taskList"), this.getToDoList(aFilter));
         this.addCompletedListener();
         this.addRemovedListener();
      }
      getTaskCount(document.getElementById("taskCount"), this.getToDoList(false));
   }

   // Completed Listener
   addCompletedListener() {
      const toDoArray = document.querySelector("ul");
      //Add event listener to each LI.
      toDoArray.addEventListener("click", function(e){
          if(e.target.tagName === "LI"){
              updateList(e.target.id);
              location.reload();
          }
      });
      console.log(toDoArray);
   }

   // Add listener to remove todos from list
   addRemovedListener() {
      const toDoArray = document.getElementsByClassName("delete");
      console.log(toDoArray);
      for (let i = 0; i < toDoArray.length; i++) {
         toDoArray[i].addEventListener("click", function (e) {
            removeTask(e.target.id);
            location.reload();
         });
      }
   }


   // add list filter listener
   addFilterEventListener(){
      const toDo = this;
      const filters = document.getElementsByClassName("filter")
      for(let i = 0; i < filters.length; i++){
          filters[i].addEventListener("click", function(e){
              console.log("e: " + e.target.id);
              if(e.target.id === "active"){
                  toDo.filterList(false);
              }
              else if(e.target.id === "completed"){
                  toDo.filterList(true);
              }
              else{
                 toDo.filterList("all");
              }
          });
      }  
  }  

} // end of class
