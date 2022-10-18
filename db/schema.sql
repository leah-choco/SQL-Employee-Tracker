DROP DATABASE IF EXISTS company_info;
CREATE DATABASE company _info;

USE company_info:

CREATE TABLE department (
    id INT NOT NULL,
    department_name VARCHAR(30)
);

CREATE TABLE department_role (
    id INT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL
    department_id INT
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id)
);

