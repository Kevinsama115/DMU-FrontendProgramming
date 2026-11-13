// 1. DOM 요소 선택
const button = document.querySelector("#btn");
const result = document.querySelector("#result");
// 2. 이벤트 처리 함수
function handleClick(event) {
console.log("이벤트 종류:", event.type);
console.log("이벤트 발생 대상:", event.target);
console.log("리스너 등록 요소:", event.currentTarget);
console.log("X 좌표:", event.clientX);
console.log("Y 좌표:", event.clientY);
// 3. 화면에 이벤트 정보 출력
 if (result !== null) {
const targetName = event.target.tagName;
const currentName = event.currentTarget.tagName;
result.textContent =
`이벤트: ${event.type}, ` +
`target: ${targetName}, ` +
`currentTarget: ${currentName}`;
}
}
// 4. 이벤트 리스너 등록
if (button !== null) {
button.addEventListener("click", handleClick);
}