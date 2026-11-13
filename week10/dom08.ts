const items = document.querySelectorAll<HTMLLIElement>(".item");
items.forEach((item) => {
console.log(item.textContent);
});