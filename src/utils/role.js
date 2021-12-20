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

const roleQuestion = async () => {};

const updateRole = async () => {};

const deleteRole = async () => {};

module.exports = {
  getRole,
  roleQuestion,
  updateRole,
  deleteRole,
};
