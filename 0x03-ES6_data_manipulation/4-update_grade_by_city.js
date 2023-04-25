export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);
  return studentsInCity.map((student) => {
    const studentClone = JSON.parse(JSON.stringify(student));
    for (const newGrade of newGrades) {
      if (newGrade.studentId === studentClone.id) {
        studentClone.grade = newGrade.grade;
      }
    }
    if (!studentClone.hasOwnProperty('grade')) studentClone.grade = 'N/A';

    return studentClone;
  });
}
