// 1. DOM 요소 선택
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const stopCheck = document.querySelector("#stopCheck");
const result = document.querySelector("#result");
// 2. 실행 결과 출력
function showResult(message) {
console.log(message);
if (result !== null) {
const li = document.createElement("li");
li.textContent = message;
result.appendChild(li);
}
}
// 3. 부모 요소 이벤트 리스너
if (parent !== null) {
parent.addEventListener("click", () => {
showResult("부모 요소 - 버블링");
});
}
// 4. 자식 요소 이벤트 리스너
if (child !== null) {
child.addEventListener("click", (event) => {
// 클릭할 때마다 이전 결과 초기화
 if (result !== null) {
result.replaceChildren();
}
showResult("자식 요소 - 타깃");
// 체크박스 선택 시 이벤트 전파 중단
 if (stopCheck !== null && stopCheck.checked) {
event.stopPropagation();
showResult("이벤트 전파 중단");
}
});
}