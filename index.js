const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require ("console.table");
//const { default: ExpandPrompt } = require("inquirer/lib/prompts/expand");
//const Connection = require("mysql2/typings/mysql/lib/Connection");

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
    .then ((answers) => {
        if (answers.option === "View all departments"){
            viewDepartments();
        }else if(answers.option === "View all roles"){
            viewRoles();
        }else if(answers.option === "View all employees"){
            viewEmployees();
        }else if(answers.option === "Add a department"){
            addDepartment();
        }else if(answers.option === "Add a role"){
            addRole();
        }else if(answers.option === "Add an employee"){
            addEmployee();
        }else if(answers.option === "Update an employee role"){
            updateRole();
        }else(answers.option === "I'm done"){
            endPrompt();
        }
    })
}
viewAllOptions();

//Functions I need to create:
const viewDepartments = () => {
   const mysql= `SELECT * FROM department`;

   connection.query(mysql, (err,rows) =>{
    if (err) return console.log(err);
    console.table(rows);

   });
};
const viewRoles = () => {
    const mysql = `SELECT * FROM department_role`;

    connection.query(mysql, (err, rows) => {
        console.table(rows);
    });
};

const viewEmployees = () => {
    const mysql = `SELECT * FROM employee`;

    connection.query(mysql, (err, rows) => {
        console.table(rows);
    });

};

const addDepartment = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "add",
            message: "Enter the name of the department you want to add"
        },
    ])
    .then(answer => {
        const mysql = `INSERT INTO department`
    })

    
};

const addRole = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "roleName",
            message:"Enter the name of the role you want to add."
        },
        {
            type:"input",
            name: 'roleSalary',
            message:"Enter the salary you want for the new role."
        },
        {
            type:"input",
            name: "roleDepartment",
            message: "Enter the department for this new role."
        }
    ])
    .then(answers => {
        const mysql = `INSERT INTO department_role`
    })
};

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "first",
            message: "Enter the new employee's first name."
        },
        {
            type: "input",
            name: "last",
            message: "Enter the new employee's last name."
        },
        {
            type: "input",
            name: "role",
            message: "Enter the new employee's role."
        },
        {
            type: "input",
            name: "manager",
            message: "Enter the new employee's manager."
        }
    ])
    .then (answer => {
        const mysql = `INSERT INTO employee`
    })
};

const updateRole = () => {
    return inquirer.prompt([
        {
            type: "rawlist",
            name:"update",
            message: "Choose an employee to update.",
            choices: ["Leah Choco", "Juan Choco", "Solomon Hosea,"]
        },
        {
            type: "input",
            name:"updateRole",
            message: "Enter the updated role for the chosen employee."
        }
    ])
    .then(answers => {
        const mysql = `UPDATE INTO employee SET "" WHERE ...`
    })
};

const endPrompt = () => {
    console.log("Your databse has been successfully updated.")
};