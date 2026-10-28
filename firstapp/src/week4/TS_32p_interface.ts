interface User {
    name: string;
    age: number;
}

const user1: User = {
    name: "Kim",
    age: 20
};

console.log(user1);


// Optional property
interface UserWithEmail {
    name: string;
    age: number;
    email?: string;
}

const user2: UserWithEmail = {
    name: "Kim",
    age: 20
};

const user3: UserWithEmail = {
    name: "Lee",
    age: 21,
    email: "lee@example.com"
};

console.log(user2);
console.log(user3);


// readonly property
interface UserWithId {
    readonly id: number;
    name: string;
}

const user4: UserWithId = {
    id: 1,
    name: "Kim"
};

user4.name = "Lee";

console.log(user4);