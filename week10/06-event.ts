// 버튼 클릭 이벤트
const button =
document.querySelector<HTMLButtonElement>("#myButton");
button?.addEventListener("click", (): void => {
console.log("click 이벤트 발생");
});
// 키보드 입력 이벤트
const input =
document.querySelector<HTMLInputElement>("#myInput");
input?.addEventListener("keydown", (event: KeyboardEvent): void =>
{
console.log("keydown 이벤트:", event.key);
});
// 입력값 변경 이벤트
input?.addEventListener("input", (): void => {
console.log("input 이벤트 발생");
});
export {};
