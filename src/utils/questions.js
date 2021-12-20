const { getDepartment } = require("./department");

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
  viewBudget,
};
