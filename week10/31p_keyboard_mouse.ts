// 1. DOM 요소 선택 및 타입 지정
const keyInput = document.querySelector<HTMLInputElement>("#keyInput");
const keyResult = document.querySelector<HTMLParagraphElement>("#keyResult");
const mouseArea = document.querySelector<HTMLDivElement>("#mouseArea");
const mouseResult =
document.querySelector<HTMLParagraphElement>("#mouseResult");
// 2. 키보드 이벤트
if (keyInput !== null && keyResult !== null) {
keyInput.addEventListener( "keydown", (event: KeyboardEvent): void => {
keyResult.textContent =
`keydown | key: ${event.key}, ` +
`code: ${event.code}, ` +
`repeat: ${event.repeat}`;
console.log("keydown:", event.key);
}
);
keyInput.addEventListener( "keyup", (event: KeyboardEvent): void => {
console.log("keyup:", event.key);
}
);
}
// 3. 마우스 이벤트
if (mouseArea !== null && mouseResult !== null) {
mouseArea.addEventListener( "mousemove", (event: MouseEvent): void => {
mouseResult.textContent =
`마우스 좌표: (${event.clientX}, ${event.clientY})`;
}
);
mouseArea.addEventListener( "mousedown", (event: MouseEvent): void => {
console.log("mousedown:", event.button);
}
);
mouseArea.addEventListener( "mouseup", (event: MouseEvent): void => {
console.log("mouseup:", event.button);
}
);
mouseArea.addEventListener( "click", (): void => {
console.log("click 이벤트 발생");
}
);
}