class Person {
    static species: string = "Human";
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    introduce(): void {
        console.log(`안녕하세요. 저는 ${this.name}입니다.`);
    }

    static showSpecies(): void {
        console.log(`종류: ${Person.species}`);
    }
}

class Student extends Person {
    major: string;

    constructor(name: string, major: string) {
        super(name);
        this.major = major;
    }

    override introduce(): void {
        console.log(
            `안녕하세요. 저는 ${this.name}이고, 전공은 ${this.major}입니다.`
        );
    }

    study(): void {
        console.log(`${this.name}이 공부합니다.`);
    }
}

const student: Student =
    new Student("홍길동", "인공지능소프트웨어");

console.log(student.name);
console.log(student.major);

student.introduce();
student.study();

Person.showSpecies();
console.log(Person.species);