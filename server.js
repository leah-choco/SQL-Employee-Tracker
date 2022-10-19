const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require ("console.table");
const { default: ExpandPrompt } = require("inquirer/lib/prompts/expand");

const db = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"02171993",
        database:"company_info"
    },
);

const viewAllOptions = () => {
    return inquirer.prompt([
    {
        type: 'rawlist',
        name: 'options',
        message: 'Choose from the following options to start the process to update the database.',
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "I'm done"]


    }   

    ])
    .then 
}
viewAllOptions();

//Functions I need to create:
viewDepartments();
viewRoles();
viewEmployees();
addDepartment();
addRole();
addEmployee();
updateRole();
endPrompt();