"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video 92");
const student1 = {
    id: 1234,
    name: "duong",
    email: "duongtrinh1@gmail.com",
    isPremium: true,
    contact: 432426345
};
const student2 = {
    id: 123423,
    name: "yen",
    email: "yen@gmail.com",
    isPremium: true,
    contact: "duongyen@gmail.com"
};
const course1 = {
    id: 12312123,
    title: "type script",
    price: 123123,
    students: []
};
const course2 = {
    id: 23232,
    title: "nodeJS",
    price: 343432,
    students: []
};
const registerStudentToCourse = (student, course) => {
    if (course.students.filter(item => item.id === student.id).length > 0) {
        return;
    }
    return course.students.push(student);
};
const printCourseInfo = (course) => {
    console.log(`Khóa học ${course.title} có ${course.students.length} hoc vien đăng ký`);
    if (course.students.length === 0) {
        console.log(`${course.title} chua co hoc vien nao`);
    }
    else {
        const studentList = course.students.map((item) => item.name);
        console.log(`Hoc vien ${studentList.join(",")} da tham gia khoa hoc ${course.title}`);
    }
};
registerStudentToCourse(student1, course1);
registerStudentToCourse(student1, course1);
registerStudentToCourse(student1, course2);
registerStudentToCourse(student2, course1);
printCourseInfo(course1);
console.log("====================================");
printCourseInfo(course2);
