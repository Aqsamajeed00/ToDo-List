#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.blue.bold("\n \t Welcome To 'Code With Aqsa' - Todo-List Application\n"));
// while(conditions){
//     let addTask = await inquirer.prompt([
//         {
//             name: "task",
//             type: "input",
//             message: chalk.magenta("Enter Your New Task:")
//         }
//     ]);
//      todoList.push(addTask.task);
//      console.log(`${addTask.task} Task added in Todo-List successfully`);
//      let addMoreTask = await inquirer.prompt([
//         {
//             name: "addmore",
//             type: "confirm",
//             message: "Do you want to add more task ?",
//             default: "False"
//         }
//      ]);
//      conditions = addMoreTask.addmore
// }
// console.log("Your updated Todo-List:" , todoList);
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
// Function to add new task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-List`);
};
// Function to view all ToDo-List Tasks!!
let viewTask = () => {
    console.log("\n Your Todo-List:\n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
// Function to delete a task from the list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete:",
        }
    ]);
    let deleteTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deleteTask} this task has been deleted successfully from your Todo-List`);
};
// Function to update a task
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of the task you want to update :"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name :",
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index no. ${update_task_index.index - 1} updated successfully [For update list check option: "view Todo-List"]`);
};
main();
