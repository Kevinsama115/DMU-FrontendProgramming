// 1. DOM 요소 선택 및 타입 지정
const menu = document.querySelector<HTMLUListElement>("#menu");
const addBtn = document.querySelector<HTMLButtonElement>("#addBtn");
const result = document.querySelector<HTMLParagraphElement>("#result");
let menuCount: number = 3;
// 2. 부모 요소에 하나의 이벤트 리스너 등록
if (menu !== null) {
menu.addEventListener( "click", (event: MouseEvent): void => {
if (!(event.target instanceof Element)) {
return;
}
// button 요소 탐색
 const button = event.target.closest<HTMLButtonElement>("button");
if (button === null || !menu.contains(button)) {
return;
}
console.log("선택한 메뉴:", button.textContent);
if (result !== null) {
result.textContent =`${button.textContent} 선택`;
}
}
);
}
// 3. 새로운 메뉴 버튼 생성
if (addBtn !== null && menu !== null) {
addBtn.addEventListener("click", (): void => {
menuCount++;
const li: HTMLLIElement = document.createElement("li");
const button: HTMLButtonElement =
document.createElement("button");
button.type = "button";
button.textContent = `메뉴 ${menuCount}`;
li.appendChild(button);
menu.appendChild(li);
});
}
export {};