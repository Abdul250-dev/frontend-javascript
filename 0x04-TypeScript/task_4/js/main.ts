// main.ts
import { Cpp } from "./subjects/Cpp";
import { Java } from "./subjects/Java";
import { React } from "./subjects/React";
import { Teacher } from "./subjects/Teacher";

const cpp = new Cpp();
const java = new Java();
const react = new React();

export const cppSubject = cpp;
export const javaSubject = java;
export const reactSubject = react;

export const cTeacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

cpp.setTeacher(cTeacher);
java.setTeacher(cTeacher);
react.setTeacher(cTeacher);

console.log("C++");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
