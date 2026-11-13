const title = document.querySelector<HTMLHeadingElement>("#title");
const message = document.querySelector<HTMLParagraphElement>("#message");
if (title !== null) {
title.textContent = "Frontend Programming";
}
if (message !== null) {
message.textContent = "TypeScript로 DOM을 변경합니다.";
}
export {};
