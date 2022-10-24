const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "02171993",
  database: "company_db",
});

const viewAllOptions = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message:
          "Choose from the following options to start the process to update the database.",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "I'm done",
        ],
      },
    ])
    .then((answers) => {
      if (answers.option === "View all departments") {
        viewDepartments();
      } else if (answers.option === "View all roles") {
        viewRoles();
      } else if (answers.option === "View all employees") {
        viewEmployees();
      } else if (answers.option === "Add a department") {
        addDepartment();
      } else if (answers.option === "Add a role") {
        addRole();
      } else if (answers.option === "Add an employee") {
        addEmployee();
      } else if (answers.option === "Update an employee role") {
        updateEmployeeRole();
      } else if (answers.option === "I'm done") {
        endPrompt();
      }
    });
};
viewAllOptions();


const viewDepartments = () => {
  db.query(`SELECT * FROM department`, function (err, res) {
    if (err) throw err;
    console.table(res);
    viewAllOptions();
  });
};
const viewRoles = () => {
  db.query(`SELECT * FROM roles`, function (err, res) {
    if (err) throw err;
    console.table(res);
    viewAllOptions();
  });
};

const viewEmployees = () => {
  db.query(`SELECT * FROM employee`, function (err, res) {
    if (err) throw err;
    console.table(res);
    viewAllOptions();
  });
};

const addDepartment = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "names",
        message: "Enter the name of the department you want to add",
      },
    ])
    .then((answer) => {
      const mysql = `INSERT INTO department SET ?`;
      db.query(mysql, answer, (err, res) => {
        if (err) throw err;
        console.log(
          `${res.affectedRows} department was inserted into the database. \n`
        );
        viewAllOptions();
      });
    });
};

const addRole = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "roleName",
        message: "Enter the name of the role you want to add.",
      },
      {
        type: "input",
        name: "roleSalary",
        message: "Enter the salary you want for the new role.",
      },
      {
        type: "input",
        name: "roleDepartment",
        message: "Enter the department for this new role.",
      },
    ])
    .then((answer) => {
      const mysql = `INSERT INTO department_role SET ?`;
      db.query(mysql, answer, (err, res) => {
        if (err) throw err;
        console.log(
          `${res.affectedRows} role was inserted into the database. \n`
        );
        viewAllOptions();
      });
    });
};

const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "first",
        message: "Enter the new employee's first name.",
      },
      {
        type: "input",
        name: "last",
        message: "Enter the new employee's last name.",
      },
      {
        type: "input",
        name: "role",
        message: "Enter the new employee's role.",
      },
      {
        type: "input",
        name: "manager",
        message: "Enter the new employee's manager.",
      },
    ])
    .then((answer) => {
      const mysql = `INSERT INTO employee SET ?`;
      db.query(mysql, answer, (err, res) => {
        if (err) throw err;
        console.log(
          `${res.affectedRows} employee was inserted into the database. \n`
        );
        viewAllOptions();
        });
    });
};

const updateEmployeeRole = () => {
  db.query(`SELECT * FROM employee`, (err, res) => {
    if (err) throw err;
    const employeeArray = res.map((employee) => ({
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id
    }));
   

    db.query(`SELECT * FROM roles`, (err, res) => {
        if (err) throw err;
        const roleArray = res.map((role) => ({
          name: `${role.title}`,
          value: role.id
        }));
       

        return inquirer
    .prompt([
      {
        type: "list",
        name: "id",
        message: "Choose an employee to update.",
        choices: employeeArray,
      },
      {
        type: "list",
        name: "role_id",
        message: "Select the updated role for the chosen employee.",
        choices: roleArray
      },
    ])
    .then((answers) => {
      const mysql = `UPDATE employee SET role_id=? WHERE id=?`;

      db.query(mysql, [answers.role_id, answers.id], (err,res) =>{
        if (err) throw err;
        console.log(res);
        viewAllOptions();
      })
    });
      });
  });
  
};

const endPrompt = () => {
  console.log("Your databse has been successfully updated.");
};
