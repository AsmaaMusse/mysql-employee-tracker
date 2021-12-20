const inquirer = require("inquirer");
const Db = require("./db/db");

const { getDepartments, getRole, getEmployee } = require("./utils/getTables");
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

    if (option === "addDepartment") {
      const { departmentName } = await departmentQuestions(inquirer);
      const query = `INSERT INTO department (name) VALUES ('${departmentName}');`;
      await db.query(query);
      console.log(`Added ${departmentName} into database`);
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
