const container = document.querySelector<HTMLDivElement>("#container");
const message = document.createElement("p");
message.textContent = "새로운 DOM 요소입니다.";
if (container !== null) {
container.append(message);
}
export {};