INSERT INTO department(names)
VALUES  
    ("Engineering"),
    ("Sales"),
    ("Finance"),
    ("Legal");

INSERT INTO roles (title, salary, department_id)    
VALUES 
    ("Software Engineer", 120000, 001),
    ("Account Manager", 160000, 002);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 002, 1);