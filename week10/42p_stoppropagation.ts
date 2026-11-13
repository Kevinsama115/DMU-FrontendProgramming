// 1. DOM 요소 선택 및 타입 지정
const parent = document.querySelector<HTMLDivElement>("#parent");
const child = document.querySelector<HTMLButtonElement>("#child");
const stopCheck = document.querySelector<HTMLInputElement>("#stopCheck");
const result = document.querySelector<HTMLOListElement>("#result");
// 2. 실행 결과 출력
function showResult(message: string): void {
console.log(message);
if (result !== null) {
const li: HTMLLIElement = document.createElement("li");
li.textContent = message;
result.appendChild(li);
}
}
// 3. 부모 요소 이벤트 리스너
if (parent !== null) {
parent.addEventListener("click", (): void => {
showResult("부모 요소 - 버블링");
});
}
// 4. 자식 요소 이벤트 리스너
if (child !== null) {
child.addEventListener( "click", (event: MouseEvent): void => {
if (result !== null) {
result.replaceChildren();
}
showResult("자식 요소 - 타깃");
if (stopCheck !== null && stopCheck.checked) {
event.stopPropagation();
showResult("이벤트 전파 중단");
}
}
);
}
export {};