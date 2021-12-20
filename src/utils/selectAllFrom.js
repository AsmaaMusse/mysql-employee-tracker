const selectFromDepartment = async (db) =>
  await db.query("SELECT * FROM department");

const selectFromRole = async (db) => {
  await db.query("SELECT * FROM role");
};

const selectFromEmployee = async (db) => {
  await db.query("SELECT * FROM employee");
};

module.exports = {
  selectFromDepartment,
  selectFromRole,
  selectFromEmployee,
};
