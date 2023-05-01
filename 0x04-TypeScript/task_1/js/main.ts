export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: boolean;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
export function printTeacher(firstName: string, lastName: string): printTeacherFunction {
  return `${firstName[0]}. ${lastName}`;
}

export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

export class StudentClass implements StudentClassInterface {
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return this._firstName;
  }
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
const student = new StudentClass("Mary", "Jane");
console.log(student);
