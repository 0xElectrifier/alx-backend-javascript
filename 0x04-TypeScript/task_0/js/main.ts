export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Jude",
  age: 20,
  location: "Dubai"
};

const student2: Student = {
  firstName: "James",
  lastName: "Jude",
  age: 20,
  location: "Mexico"
}

const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }
  td:nth-child(1) {
    text-align: center;
  }
`;

function displayStudents(students: Array<Student>, styleSheet: string): void {
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const headRow = document.createElement("tr");
  const tableBody = document.createElement("tbody");

  headRow.insertAdjacentHTML("beforeend", "<td>FirstName</td>");
  headRow.insertAdjacentHTML("beforeend", "<td>Location</td>");
  tableHead.insertAdjacentElement("beforeend", headRow);

  for (const student of students) {
    const bodyRow = document.createElement("tr");
    bodyRow.insertAdjacentHTML("beforeend", `<td>${student.firstName}`);
    bodyRow.insertAdjacentHTML("beforeend", `<td>${student.location}`);
    tableBody.insertAdjacentElement("beforeend", bodyRow);
  }

  table.insertAdjacentElement("beforeend", tableHead);
  table.insertAdjacentElement("beforeend", tableBody);
  document.body.insertAdjacentElement("beforeend", table);
}

const studentsList: Array<Student> = [student1, student2];
displayStudents(studentsList, styleSheet);

const styleSheetElement = document.createElement("style");
styleSheetElement.textContent = styleSheet;
document.head.insertAdjacentElement("beforeend", styleSheetElement);
document.title = "Task 0";
