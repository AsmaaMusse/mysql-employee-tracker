const getEmployee = async (db) => {
  const employee = await db.query("SELECT * FROM employee");

  const choices = employee.map((employee) => {
    return {
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id,
    };
  });

  return choices;
};

const employeeQuestion = async () => {};

const updateEmployee = async () => {};

const deleteEmployee = async () => {};

module.exports = {
  getEmployee,
  employeeQuestion,
  updateEmployee,
  deleteEmployee,
};
