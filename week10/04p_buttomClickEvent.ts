const btn = document.querySelector<HTMLButtonElement>("#btn");
const message = document.querySelector<HTMLParagraphElement>("#message");
if (btn !== null && message !== null) {
btn.addEventListener("click", (): void => {
message.textContent = "버튼을 클릭했습니다!";
});
}
export {};