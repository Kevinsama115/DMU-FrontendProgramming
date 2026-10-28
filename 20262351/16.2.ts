interface UserAccount {
    readonly username: string;
    email: string;
}

const account: UserAccount = {
    username: "동미대",
    email: "abc@mail.com"
};

console.log(account.username);
console.log(account.email);

account.email = "new@mail.com";
console.log(account.email);

// account.username = "홍길동"; // Error