// 1. DOM 요소 선택 및 타입 지정
const btn1 = document.querySelector<HTMLButtonElement>("#btn1");
const btn2 = document.querySelector<HTMLButtonElement>("#btn2");
const btn3 = document.querySelector<HTMLButtonElement>("#btn3");
const btn4 = document.querySelector<HTMLButtonElement>("#btn4");
const message =
document.querySelector<HTMLParagraphElement>("#message");
// 화면 메시지 변경 함수
function showMessage(text: string): void {
if (message !== null) {
message.textContent = text;
}
}
// 2. 선언된 함수 등록
function handleClick(): void {
console.log("선언된 함수 실행");
showMessage("선언된 함수가 실행되었습니다.");
}
if (btn1 !== null) {
btn1.addEventListener("click", handleClick);
}
// 3. 익명 함수 등록
if (btn2 !== null) {
btn2.addEventListener("click", function (): void {
console.log("익명 함수 실행");
showMessage("익명 함수가 실행되었습니다.");
});
}
// 4. 화살표 함수 등록
if (btn3 !== null) {
btn3.addEventListener("click", (): void => {
console.log("화살표 함수 실행");
showMessage("화살표 함수가 실행되었습니다.");
});
}
// 5. once 옵션
if (btn4 !== null) {
btn4.addEventListener("click", (): void => {
console.log("한 번만 실행");
showMessage("이 버튼의 리스너는 한 번만 실행됩니다.");
},
{ once: true }
);
}
export {}; 