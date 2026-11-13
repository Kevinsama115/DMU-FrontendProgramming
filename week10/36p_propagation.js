
// 1. DOM 요소 선택
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const result = document.querySelector("#result");

// 2. 결과 출력 함수
function showResult(message) {
    console.log(message);

    if (result !== null) {
        const li = document.createElement("li");
        li.textContent = message;
        result.appendChild(li);
    }
}

// 3. 부모 요소의 캡처링 리스너
if (parent !== null) {
    parent.addEventListener(
        "click",
        () => {
            // 캡처링 단계에서 기존 결과 초기화
            if (result !== null) {
                result.replaceChildren();
            }

            showResult("부모 요소 - 캡처링");
        },
        { capture: true }
    );
}

// 4. 자식 요소의 이벤트 리스너
if (child !== null) {
    child.addEventListener("click", () => {
        // 여기서는 결과를 초기화하지 않음
        showResult("자식 요소 - 타깃");
    });
}

// 5. 부모 요소의 버블링 리스너
if (parent !== null) {
    parent.addEventListener(
        "click",
        () => {
            showResult("부모 요소 - 버블링");
        },
        { capture: false }
    );
}
