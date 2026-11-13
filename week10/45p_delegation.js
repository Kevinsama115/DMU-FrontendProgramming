// 1. DOM 요소 선택
const menu = document.querySelector("#menu");
const addBtn = document.querySelector("#addBtn");
const result = document.querySelector("#result");
let menuCount = 3;
// 2. 부모 요소에 하나의 이벤트 리스너 등록
if (menu !== null) {
menu.addEventListener("click", (event) => {
// 이벤트가 발생한 대상 확인
 if (!(event.target instanceof Element)) {
return;
}
// 클릭한 요소 또는 조상에서 button 검색
 const button = event.target.closest("button");
// 메뉴의 버튼이 아니면 처리하지 않음
 if (button === null || !menu.contains(button)) {
return;
}
console.log("선택한 메뉴:", button.textContent);
if (result !== null) {
result.textContent = `${button.textContent} 선택`;
}
});
}
// 3. 새로운 메뉴 버튼 생성
if (addBtn !== null && menu !== null) {
addBtn.addEventListener("click", () => {
menuCount++;
const li = document.createElement("li");
const button = document.createElement("button");
button.type = "button";
button.textContent = `메뉴 ${menuCount}`;
li.appendChild(button);
menu.appendChild(li);
});
}