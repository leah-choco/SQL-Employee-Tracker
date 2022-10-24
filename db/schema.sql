--This checks for company_db databse, if found, it will be deleted.
DROP DATABASE IF EXISTS company_db;

--This creates the database called company_db.
CREATE DATABASE company_db;

--This command lets the user work within that database.
USE company_db;

--This creates a table called department and adds the columns/parameters.
CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    names VARCHAR(30)
);

--This creates a table called roles and adds the columns/parameters. Foreign key connects to department table.
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INT, 
    FOREIGN KEY (department_id)
    REFERENCES department(id)
  
);

--This creates a table called employees and adds the columns/parameters. Foreign key connects to roles table.
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY(role_id) 
    REFERENCES roles(id)
   
);

