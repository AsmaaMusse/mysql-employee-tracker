const { getDepartments } = require("./department");

const getRole = async (db) => {
  const roles = await db.query("SELECT * FROM role");

  const choices = roles.map((role) => {
    return {
      name: role.title,
      value: role.id,
    };
  });

  return choices;
};

const roleQuestion = async (inquirer) => {
  const question = [
    {
      type: "input",
      name: "name",
      message: "Enter the name for the role:",
    },
    {
      type: "input",
      name: "salary",
      message: "Enter role salary:",
    },
    {
      type: "list",
      name: "department_id",
      message: "Please choose corresponding department for the role:",
      choices: await getDepartments(db),
    },
  ];

  const answer = inquirer.prompt(question);
  return answer;
};

const updateRole = async () => {};

const deleteRole = async () => {};

module.exports = {
  getRole,
  roleQuestion,
  updateRole,
  deleteRole,
};
