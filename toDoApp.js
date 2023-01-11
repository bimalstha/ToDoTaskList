//query selectors from html
const task = document.querySelector("#task");
const addTaskButton = document.querySelector("#add");
const parent = document.querySelector("#parent");


//event listeners
addTaskButton.addEventListener("click", addFromHtml);

//empty array
const toDoTask = [];

//flunction to add task from html
function addFromHtml() {
    console.log(toDoTask);
    if (task.value == "") {
        alert("enter something");
    }
    else {
        toDoTask.push({ "task": task.value, "id": Date.now().toString(), "check": false });
        console.log(toDoTask);
        displayContent();
        task.value = "";
    }
}

//function  to display the content of our tasklist in html DOM
function displayContent() {
     const newListDiv = document.createElement("div");
    // newListDiv.classList.add("main-div")
    
     for (let i = 0; i < toDoTask.length; i++) {
         const listDisplay = document.createElement("p");
         //listDisplay.classList.add("task-lists");

        //checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        listDisplay.appendChild(checkbox);
        checkbox.addEventListener("click",() =>{
            listDisplay.classList.toggle("task-lists");
            checkbox.classList.toggle("change");
            newListDiv.classList.toggle("main-div");
            parent.classList.toggle("parent")

        })
        // checkbox.addEventListener("click", () => {taskDone(toDoTask[i]) 
        // });
       
        
        //delete button
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        listDisplay.innerText = toDoTask[i].task;

        //edit button
        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.addEventListener("click", () => {
        editInList(toDoTask[i], toDoTask[i].id, toDoTask[i].check)});
        

        //deleteButton.classList.add("deleteButton"); //example to add classname to the element created
       
        deleteButton.addEventListener("click", function () {
            deleteFromList(toDoTask[i])
        }
        );
        newListDiv.appendChild(checkbox);
        newListDiv.appendChild(listDisplay);
        newListDiv.appendChild(deleteButton);
        newListDiv.appendChild(editButton);
        newListDiv.style.display = "flex"; //styling

        if(toDoTask[i].check==true){
            listDisplay.classList.toggle("task-lists");
        }
      
    }
    parent.childNodes[0].replaceWith(newListDiv); //replacing old parent div with new div
  

}


//functions
//function to delete the task 
function deleteFromList(deleteitem) {
    toDoTask.splice(toDoTask.indexOf(deleteitem), 1);
    console.log(toDoTask);
    displayContent();
}

//function to edit or update the task
function editInList(edititem, edititemid, checkid) {
    console.log(edititem);
    let editTask = prompt("edit here");
    let neweditedtask = { "task": editTask, "id": edititemid, "check": checkid };
    toDoTask.splice(toDoTask.indexOf(edititem), 1, neweditedtask)
    displayContent();
}

// //function to check if the task is done or not
// function taskDone(checkitem) {
//     let a = toDoTask.indexOf(checkitem);
//     toDoTask[a].check = true;     //when clicked the value done from tasklist changes to true
//     displayContent();
//     console.log(toDoTask)
// }