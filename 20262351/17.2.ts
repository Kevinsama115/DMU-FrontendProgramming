interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: number;
}

const employee: Employee = {
    name: "동미대",
    age: 21,
    employeeId: 5555
};

console.log(employee.name);
console.log(employee.age);
console.log(employee.employeeId);