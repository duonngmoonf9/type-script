"use strict";
console.log("Video 121");
class User {
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    constructor(name, email, role) {
        this.name = name;
        this._email = email;
        this.role = role ?? "student";
    }
    getInfo() {
        console.log(`name = ${this.name} ==== email =${this._email} ==== role=${this.role}`);
    }
}
class Teacher extends User {
    constructor(name, email, role) {
        super(name, email, role);
        this.courses = [];
    }
    addCourse(courseName) {
        this.courses.push(courseName);
    }
    printUserInfo() {
        const courseName = this.courses.join(",");
        console.log(`[${this.role}] ${this.name} - course ==== ${courseName}`);
    }
}
class Student extends User {
    constructor(name, email) {
        super(name, email);
        this.enrolledCourses = [];
    }
    enroll(courseName) {
        this.enrolledCourses.push(courseName);
    }
    printUserInfo() {
        const courseName = this.enrolledCourses.join(",");
        console.log(`[${this.role}] ${this.name} da tham gia khoa hoc ${courseName}`);
    }
}
const teacher = new Teacher("duong", "Duongtrinh1012@gmail.com", "teacher");
teacher.addCourse("js");
teacher.addCourse("ReactJs");
teacher.addCourse("Type script");
teacher.printUserInfo();
teacher.getInfo();
console.log("============================================");
const student = new Student("yen", "yen@gmail.com");
student.enroll("haha");
student.printUserInfo();
student.getInfo();
