INSERT INTO department(id, department_name)
VALUES (001, "Engineering"),
    (002, "Sales"),
    (003, "Finance"),
    (004, "Legal");

INSERT INTO department_role(id, title, salary, department_id)    
VALUES (001, "Software Engineer", 120000, 001),
    (002, "Account Manager", 160000, 002);


INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES (001, "John", "Doe", 002, );