type User = {
    name: string;
    age: number;
    email?: string;
};

const user1: User = {
    name: "kim",
    age: 25
};

const user2: User = {
    name: "lee",
    age: 30,
    email: "abc@mail.com"
};

console.log(user1);
console.log(user2);