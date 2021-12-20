const getDepartments = async (db) => {
  const department = await db.query("SELECT * FROM department");

  const choices = department.map((department) => {
    return {
      name: department.name,
      value: department.id,
    };
  });

  return choices;
};

const departmentQuestion = async (inquirer) => {
  const question = [
    {
      type: "input",
      name: "departmentName",
      message: "Enter the Department name:",
    },
  ];

  const answer = inquirer.prompt(question);
  return answer;
};

const viewDepartment = async (db) => [
  {
    type: "list",
    name: "department",
    message: "Enter chosen department to view:",
    choices: await getDepartments(db),
  },
];

const deleteDepartment = async () => {};

module.exports = {
  getDepartments,
  departmentQuestion,
  viewDepartment,
  deleteDepartment,
};
