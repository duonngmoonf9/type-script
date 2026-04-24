console.log("Video 121");
type TRole = "student" | "teacher";

class User {
    name: string;
    private _email: string;
    protected role: TRole;

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    constructor(name: string, email: string, role?: TRole) {
        this.name = name;
        this._email = email;
        this.role = role ?? "student";
    }

    getInfo() {
        console.log(`name = ${this.name} ==== email =${this._email} ==== role=${this.role}`);
    }
}

class Teacher extends User {
    courses: string[] = [];
    constructor(name: string, email: string, role: TRole) {
        super(name, email, role);
    }

    addCourse(courseName: string) {
        this.courses.push(courseName);
    }

    printUserInfo() {
        const courseName = this.courses.join(",");
        console.log(`[${this.role}] ${this.name} - course ==== ${courseName}`);
    }
}

class Student extends User {
    enrolledCourses: string[] = [];
    constructor(name: string, email: string) {
        super(name, email);
    }

    enroll(courseName: string) {
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
teacher.getInfo()
console.log("============================================");



const student = new Student("yen", "yen@gmail.com");
student.enroll("haha");
student.printUserInfo();
student.getInfo()
