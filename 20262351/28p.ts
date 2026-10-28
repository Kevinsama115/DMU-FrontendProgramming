class Person {
    public name: string;
    protected age: number;
    private password: string;

    constructor(
        name: string,
        age: number,
        password: string
    ) {
        this.name = name;
        this.age = age;
        this.password = password;
    }

    showInfo(): void {
        console.log(this.name);
        console.log(this.age);
        console.log(this.password);
    }
}

class Student extends Person {
    showStudent(): void {
        console.log(this.name);
        console.log(this.age);
        // console.log(this.password); // Error
    }
}

const student = new Student("홍길동", 20, "1234");

console.log(student.name);
// console.log(student.age);      // Error
// console.log(student.password); // Error

student.showInfo();
student.showStudent();