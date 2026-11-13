const btn = document.querySelector("#btn");
const message = document.querySelector("#message");
if (btn !== null && message !== null) {
    btn.addEventListener("click", () => {
        message.textContent = "버튼을 클릭했습니다!";
    });
}
export {};
