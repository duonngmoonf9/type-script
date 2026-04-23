export { };
console.log("video 92");

type TStudents = {
    id: number;
    name: string;
    email: string;
    isPremium: boolean;
    contact: string | number;
}
type TCourse = {
    id: number;
    title: string;
    price: number;
    students: TStudents[];
}

const student1: TStudents = {
    id: 1234,
    name: "duong",
    email: "duongtrinh1@gmail.com",
    isPremium: true,
    contact: 432426345
}
const student2: TStudents = {
    id: 123423,
    name: "yen",
    email: "yen@gmail.com",
    isPremium: true,
    contact: "duongyen@gmail.com"
}

const course1: TCourse = {
    id: 12312123,
    title: "type script",
    price: 123123,
    students: []
}
const course2: TCourse = {
    id: 23232,
    title: "nodeJS",
    price: 343432,
    students: []
}

const registerStudentToCourse = (student: TStudents, course: TCourse) => {
    if (course.students.filter(item => item.id === student.id).length > 0) {
        return
    }
    return course.students.push(student);
}

const printCourseInfo = (course: TCourse) => {
    console.log(`Khóa học ${course.title} có ${course.students.length} hoc vien đăng ký`);
    if (course.students.length === 0) {
        console.log(`${course.title} chua co hoc vien nao`);
    } else {
        const studentList = course.students.map((item) => item.name);
        console.log(`Hoc vien ${studentList.join(",")} da tham gia khoa hoc ${course.title}`);
    }
}

registerStudentToCourse(student1, course1);
registerStudentToCourse(student1, course1);
registerStudentToCourse(student1, course2);
registerStudentToCourse(student2, course1);
printCourseInfo(course1);
console.log("====================================");
printCourseInfo(course2)