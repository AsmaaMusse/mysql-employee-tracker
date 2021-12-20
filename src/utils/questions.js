const inquirer = require("inquirer");
const { getTables } = require("./getTables");

const initialQuestions = async () => {
  const questions = [
    {
      type: "list",
      name: "option",
      message: "Choose one of the following options:",
      choices: [
        {
          name: "Add Department",
          value: "addDepartment",
        },
        {
          name: "View all Departments",
          value: "viewDepartment",
        },
        {
          name: "Delete Department",
          value: "deleteDepartment",
        },
        {
          name: "Add Role",
          value: "addRole",
        },
        {
          name: "View all Roles",
          value: "viewRole",
        },
        {
          name: "Delete Role",
          value: "deleteRole",
        },
        {
          name: "Add Employee",
          value: "addEmployee",
        },
        {
          name: "View all Employees",
          value: "viewEmployee",
        },
        {
          name: "Update Employee Role",
          value: "updateEmployeeRole",
        },
        {
          name: "Update Employee Manager",
          value: "updateEmployeeManager",
        },
        {
          name: "Delete Employee",
          value: "deleteEmployee",
        },
        {
          name: "View Budget from Department",
          value: "viewBudget",
        },
        {
          name: "Exit",
          value: "exit",
        },
      ],
    },
  ];

  const answers = await answers(questions);

  return answers;
};

const departmentQuestions = async (inquirer) => {
  const question = [
    {
      type: "input",
      name: "departmentName",
      message: "Enter Department name:",
    },
  ];

  const answer = inquirer.prompt(question);
  return answer;
};

const roleQuestions = async (db) => [
  {
    type: "input",
    name: "name",
    message: "Enter Role name:",
  },
  {
    type: "input",
    name: "salary",
    message: "Enter Role salary:",
  },
  {
    type: "list",
    name: "department_id",
    message: "Choose respective department for the role:",
    choices: await getDepartments(db),
  },
];

const employeeQuestions = async (db) => [
  {
    type: "input",
    name: "firstName",
    message: "Enter the first name:",
  },
  {
    type: "input",
    name: "lastName",
    message: "Enter the last name:",
  },
  {
    type: "list",
    name: "role_id",
    message: "Choose respective role for the employee:",
    choices: await getRoles(db),
  },
];

const updateRoleQuestions = async (db) => [
  {
    type: "list",
    name: "employees",
    message: "Choose an employee to update:",
    choices: await getEmployee(db),
  },
  {
    type: "list",
    name: "role_id",
    message: "Choose the role to update an employee:",
    choices: await getRoles(db),
  },
];

const updateManagerQuestions = async (db) => [
  {
    type: "list",
    name: "employee",
    message: "Choose an employee to update:",
    choices: await getEmployee(db),
  },
  {
    type: "list",
    name: "manager",
    message: "Choose the correct manager:",
    choices: await getEmployee(db),
  },
];

const viewDepartmentQuestion = async (db) => [
  {
    type: "list",
    name: "department",
    message: "Choose the department to view:",
    choices: await getDepartments(db),
  },
];

const deleteDepartmentQuestion = async (db) => [
  {
    type: "list",
    name: "department",
    message: "Choose the department to delete:",
    choices: await getDepartments(db),
  },
];

const deleteRoleQuestion = async (db) => [
  {
    type: "list",
    name: "role",
    message: "Choose the role to delete:",
    choices: await getRoles(db),
  },
];

const deleteEmployeeQuestion = async (db) => [
  {
    type: "list",
    name: "employee",
    message: "Choose the employee to delete:",
    choices: await getEmployee(db),
  },
];

const viewBudget = async (db) => [
  {
    type: "list",
    name: "department",
    message: "Choose a department:",
    choices: await getDepartment(db),
  },
];

module.exports = {
  initialQuestions,
  departmentQuestions,
  roleQuestions,
  employeeQuestions,
  updateRoleQuestions,
  updateManagerQuestions,
  viewDepartmentQuestion,
  deleteDepartmentQuestion,
  deleteRoleQuestion,
  deleteEmployeeQuestion,
  viewBudget,
};
