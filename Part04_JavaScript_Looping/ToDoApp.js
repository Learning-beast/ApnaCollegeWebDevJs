/*
Todo App :-
    1. Create a form to add a todo item.
    2. Create a list to display all the todo items.
    3. Create a button to delete a todo item.
    4. Create a button to mark a todo item as completed.
    5. Create a button to edit a todo item.
    6. Create a button to delete all todo items.
    7. Create a button to mark all todo items as completed.
    8. Create a button to delete all completed todo items.
    9. Create a button to filter todo items based on their status.
    10. Create a button to sort todo items based on their status.
    11. Create a button to sort todo items based on their creation date.
    12. Create a button to sort todo items based on their completion date.
    13. Create a button to sort todo items based on their priority.
    14. Create a button to sort todo items based on their title.
    15. Create a button to sort todo items based on their description.
    16. Create a button to sort todo items based on their category




    //our goal 

    list - to show all todos
    add - to add new todo
    delete - to delete todo
    quit - to quit the app
*/



let todo = [];

let request = prompt("please enter your request");

while(true)
{
    if(request == "quit")
    {
        console.log("quitting the app");
        break;
    }

    if(request == "list")
    {
        console.log("---------------------------------------------");
        // for(task of todo)
        for(let i=0;i<todo.length;i++)
        {
            console.log(`${i}: ${todo[i]}`); //output of this is 0: task1, 1: task2, 2: task3
            // console.log(task);
        }
        console.log("---------------------------------------------");
    }
        
        else if(request == "add")
        {
            let newTask = prompt("Please enter the task you want to add");
            todo.push(newTask);
            console.log("task added");
        }

        else if(request == "delete")
        {
            let idx = prompt("Please enter the index of the task you want to delete");
            todo.splice(idx,1);  //splice is used to delete the element from the array at the given index
            console.log("task deleted");
        }
        else
        {
            console.log("Unknown request");
        }

        request = prompt("please enter your request");
    }
    
// console.log(request);

