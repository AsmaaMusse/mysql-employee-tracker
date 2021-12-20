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

const departmentQuestions = async () => {};

const viewDepartment = async () => {};

const deleteDepartment = async () => {};

module.exports = {
  getDepartments,
  departmentQuestions,
  viewDepartment,
  deleteDepartment,
};
