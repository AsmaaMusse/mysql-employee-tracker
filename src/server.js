const inquirer = require("inquirer");
const Db = require("./db/db");

const {
  selectFromDepartment,
  selectFromRole,
  selectFromEmployee,
} = require("./utils/selectAllFrom");

const {
  initialQuestions,
  departmentQuestions,
  viewDepartmentQuestion,
  deleteDepartmentQuestion,
  roleQuestions,
  updateRoleQuestions,
  deleteRoleQuestion,
  employeeQuestions,
  updateManagerQuestions,
  deleteEmployeeQuestion,
  viewBudget,
} = require("./utils/questions");

const start = async () => {
  const db = new Db({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "Password123",
    database: process.env.DB_NAME || "company_db",
  });

  await db.start();

  let active = true;

  while (active) {
    const { option } = await initialQuestions(inquirer);
    console.log(option);

    // Add/View Department
    if (option === "addDepartment") {
      const { departmentName } = await departmentQuestions(inquirer);
      const query = `INSERT INTO department (name) VALUES ('${departmentName}');`;
      await db.query(query);
      console.log(`Added ${departmentName} into database`);
    }
    if (option === "viewDepartment") {
      const data = await selectFromDepartment(db);
      console.table(data);
    }

    // Add/View Role
    if (option === "addRole") {
      const departments = await selectFromDepartment(db);

      if (departments.length) {
        const questions = await roleQuestions(db);
        const { name, salary, department_id } = await inquirer.prompt(
          questions
        );

        const query = `INSERT INTO role (title, salary, department_id) VALUES ("${name}", "${salary}", "${department_id}");`;
        await db.query(query);
        console.log(`Added ${name} into Role Table!`);
      } else {
        console.warn("[ERROR]: Please enter a department before proceeding...");
      }
    }
    if (option === "viewRole") {
      const data = await selectFromRole(db);
      console.table(data);
    }

    if (option === "addEmployee") {
      const role = await selectFromRole(db);

      if (role.length) {
        const questions = await employeeQuestions(db);
        const { firstName, lastName, role_id } = await inquirer.prompt(
          questions
        );

        const query = `INSERT INTO employee (first_name, last_name, role_id) VALUES ("${firstName}","${lastName}","${role_id}");`;
        await db.query(query);
        console.log(`Created ${firstName} ${lastName} as an employee!`);
      } else {
        console.warn("[ERROR]: Please enter a role before proceeding...");
      }
    }
    if (option === "viewEmployee") {
      const query =
        'SELECT CONCAT(employee_role.first_name, " ", employee_role.last_name) AS Employee, title as "Role", salary as "Salary",  name as "Department",  CONCAT (employee_manager.first_name, " ", employee_manager.last_name) as "Manager"  FROM employee employee_role LEFT JOIN role ON employee_role.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee employee_manager ON employee_role.manager_id = employee_manager.id;';
      const data = await db.query(query);
      console.table(data);
    }
  }

  // if displayEmployees()
  if ("addDepartment") {
    // prompt department questions (name) and get answers
    // construct mysql insert query
    // execute mysql query
  }
  if ("addRole") {
    // get departments from DB
    // pass the departments to a choice constructor function
    // prompt question to select department, title, salary and get answers
    // construct mysql insert query for role
    // execute mysql query
  }
  if ("addEmployee") {
    // get roles from DB
    // get employees from DB
    // pass the roles to a choice constructor function
    // pass the employees to a choice constructor function
    // prompt question to select role, select manager, first name, last name and get answers
    // construct mysql insert query for employee
    // execute mysql query
  }
};

start();
