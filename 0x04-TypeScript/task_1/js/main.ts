interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

// Already implemented earlier
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// New interface and function
type printTeacherFunction = (firstName: string, lastName: string) => string;

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // Output: J. Doe
// Interface describing the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Interface describing the class
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implementing the class
class StudentClass implements StudentInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
