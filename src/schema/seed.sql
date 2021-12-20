USE comapny_db;

INSERT INTO department (name)
Values
("Human Resources"),
("Finances"),
("Marketing"),
("Managment");

INSERT INTO role (title, salary, department_id)
Values
("HR Director", "50000", "1"),
("Finance Manager", "40000", "2"),
("Finance Advisor ", "30000", "2"),
("Marketing Manager", "45000", "3"),
("Marketing Advisor", "35000". "3"),
("Management leader", "20000", "4");

INSERT INTO employee (first_name, last_name, role_id)
Values
("Melisa", "Swift", "1"),
("Loius", "Pace", "2"),
("Sarah", "Jane", "3"),
("Elizabeth ", "Greens", "4"),
("Adam", "Davis", "5"),
("Matthew", "Jones", "6"),
("Nella", "Plumber", "7"),
("Bob", "Smith", "8"),
("John", "Kane", "9"),
("David", "Williams", "10"),
("Alex", "Jones", "11");

UPDATE employee SET manager_id = 12 WHERE (id = 1);
UPDATE employee SET manager_id = 11 WHERE (id = 2);
UPDATE employee SET manager_id = 10 WHERE (id = 3);
UPDATE employee SET manager_id = 9 WHERE (id = 4);
UPDATE employee SET manager_id = 8 WHERE (id = 5);
UPDATE employee SET manager_id = 7 WHERE (id = 6);