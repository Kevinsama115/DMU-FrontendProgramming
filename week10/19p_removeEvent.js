// 1. DOM 요소 선택
const clickBtn = document.querySelector("#clickBtn");
const addBtn = document.querySelector("#addBtn");
const removeBtn = document.querySelector("#removeBtn");
const message = document.querySelector("#message");
const countText = document.querySelector("#count");
let count = 0;
let isRegistered = false;
// 2. 클릭 이벤트 처리 함수
function handleClick() {
    count++;
    console.log("클릭 이벤트 실행:", count);
    if (countText !== null) {
        countText.textContent = `클릭 횟수: ${count}`;
    }
}
// 3. 이벤트 리스너 등록
if (addBtn !== null && clickBtn !== null) {
    addBtn.addEventListener("click", () => {
        if (!isRegistered) {
            clickBtn.addEventListener("click", handleClick);
            isRegistered = true;
            if (message !== null) {
                message.textContent = "이벤트 리스너 등록 완료";
            }
            console.log("리스너 등록");
        }
    });
}
// 4. 이벤트 리스너 제거
if (removeBtn !== null && clickBtn !== null) {
    removeBtn.addEventListener("click", () => {
        clickBtn.removeEventListener("click", handleClick);
        isRegistered = false;
        if (message !== null) {
            message.textContent = "이벤트 리스너 제거 완료";
        }
        console.log("리스너 제거");
    });
}
export {};
