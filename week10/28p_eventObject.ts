// 1. DOM 요소 선택
const button = document.querySelector<HTMLButtonElement>("#btn");
const result = document.querySelector<HTMLParagraphElement>("#result");
// 2. 이벤트 처리 함수
function handleClick(event: MouseEvent): void {
console.log("이벤트 종류:", event.type);
console.log("이벤트 발생 대상:", event.target);
console.log("리스너 등록 요소:", event.currentTarget);
console.log("X 좌표:", event.clientX);
console.log("Y 좌표:", event.clientY);
// 3. target 타입 확인
 const target = event.target;
const currentTarget = event.currentTarget;
if (target instanceof Element && currentTarget instanceof Element && result !== null) {
result.textContent =
`이벤트: ${event.type}, ` +
`target: ${target.tagName}, ` +
`currentTarget: ${currentTarget.tagName}`;
}
}
// 4. 이벤트 리스너 등록
if (button !== null) {
button.addEventListener("click", handleClick);
}