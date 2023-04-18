export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  return {
    ...allEmployees,
    [Symbol.iterator]() {
      let index = 0;
      const employeesList = [];
      const employeesObj = Object.values(report.allEmployees);
      employeesObj.forEach(function (value) {
        employeesList.push(...value);
      });

      return {
        next() {
          if (index < employeesList.length) {
            return { value: employeesList[index++], done: false };
	  } else {
	    return { done: true };
	  }
	}
      };
    }
  };
}
