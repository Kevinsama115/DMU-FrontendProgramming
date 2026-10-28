interface UserProfile {
    username: string;
    email?: string;
}

const user: UserProfile = {
    username: "동미대"
};

console.log(user.username);
console.log(user.email);

user.email = "abc@mail.com";
console.log(user.email);