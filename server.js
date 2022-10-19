const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require ("console.table");

const viewAllOptions = () => {
    return inquirer.prompt([
    {
        type: 'rawlist',
        name: 'options',
        message: 'Choose from the following options to start the process to update the database.',
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]


    }   

    ])
}
viewAllOptions();