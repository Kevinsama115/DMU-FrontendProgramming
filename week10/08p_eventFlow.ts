// ① DOM 요소 선택 및 타입 지정
const button =
document.querySelector<HTMLButtonElement>("#btn");
const message =
document.querySelector<HTMLParagraphElement>("#message");
console.log("① DOM 요소 선택");
// ④ 이벤트 발생 시 실행할 콜백 함수
function handleClick(): void {
console.log("④ 콜백 함수 실행");
// ⑤ DOM 변경
 if (message !== null) {
message.textContent = "클릭 완료!";
console.log("⑤ DOM 내용 변경");
}
}
// ② 이벤트 리스너 등록
if (button !== null) {
button.addEventListener("click", handleClick);
console.log("② 이벤트 리스너 등록");
}
console.log("등록 코드 실행 완료");
export {};
// ③ 버튼 클릭 시 브라우저가 hand