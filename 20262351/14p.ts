interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const myBook: Book = {
    title: "프론트앤드프로그래밍",
    author: "동미대",
    publishedYear: 2026
};

console.log(myBook.title);
console.log(myBook.author);
console.log(myBook.publishedYear);