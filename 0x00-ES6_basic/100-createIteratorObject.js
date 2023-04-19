export default function createIteratorObject(report) {
  const { allEmployees } = report;
  return {
    ...allEmployees,
    [Symbol.iterator]() {
      let index = 0;
      const employeesList = [];
      const employeesObj = Object.values(report.allEmployees);
      employeesObj.forEach((value) => {
        employeesList.push(...value);
      });

      return {
        next() {
          if (index < employeesList.length) {
	    const iter = { value: employeesList[index], done: false };
	    index += 1;

            return iter;
          }

          return { done: true };
        },
      };
    },
  };
}
