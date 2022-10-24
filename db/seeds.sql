INSERT INTO department(names)
VALUES  
    ("Engineering"),
    ("Sales"),
    ("Finance"),
    ("Legal");
   

INSERT INTO roles(title, salary, department_id)    
VALUES 
    ("Software Engineer", 120000, 001),
    ("Account Manager", 160000, 002),
    ("CFO", 200000, 003),
    ("Lawyer", 50000, 004);
    

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES 
    ("Juan", "Choco", 002, NULL),
    ("Leah", "Choco", 001, 1),
    ("Zeke", "Choco", 004, 1),
    ("Solomon", "Choco", 003, 1);
   