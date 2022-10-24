# SQL-Employee-Tracker

Demonstration:

## User Story:

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Goals of this Project:

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids

WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database

WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Installation:

This project is run in Node.js. 
You will need 3 npm packages; inquirer(version8.2.4), mysql2, and console.table(allows tables to be seen in the console).

## What I Learned:

The main thing I learned was how to write SQL query statements. The most complicated one was in the function viewEmployees. This required me to figure out how to combine different tables and make them viewer friendly. 

The other smaller thing was learning how to comment in sql files. I chose to use -- as my comments were not long. 




