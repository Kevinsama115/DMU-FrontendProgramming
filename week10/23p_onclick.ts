const btn1 = document.querySelector<HTMLButtonElement>("#btn1");
const btn2 = document.querySelector<HTMLButtonElement>("#btn2");
// 1. onclick 방식
if (btn1 !== null) {
btn1.onclick = function (): void {
console.log("onclick - 첫 번째 함수");
};
// 기존 함수가 새로운 함수로 대체됨
 btn1.onclick = function (): void {
console.log("onclick - 두 번째 함수");
};
}
// 2. addEventListener 방식
if (btn2 !== null) {
btn2.addEventListener("click", function (): void {
console.log("addEventListener - 첫 번째 함수");
} );
btn2.addEventListener("click", function (): void {
console.log("addEventListener - 두 번째 함수");
} );
}