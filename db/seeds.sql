INSERT INTO department(names)
VALUES  
    ("Engineering"),
    ("Sales"),
    ("Finance"),
    ("Legal"),
    ("Human Resources");

INSERT INTO roles(title, salary, department_id)    
VALUES 
    ("Software Engineer", 120000, 001),
    ("Account Manager", 160000, 002),
    ("CFO", 200000, 003),
    ("Lawyer", 50000, 004),
    ("Manager", 1000000, 005);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ("Juan", "Choco", 002, 1),
    ("Leah", "Choco", 001, 1),
    ("Zeke", "Choco", 004, 1),
    ("Solomon", "Choco", 003, 1),
    ("Maya", "Choco", 005, 1);