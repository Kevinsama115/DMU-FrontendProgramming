
// 1. DOM 요소 선택 및 타입 지정
const parent = document.querySelector<HTMLDivElement>("#parent");
const child = document.querySelector<HTMLButtonElement>("#child");
const result = document.querySelector<HTMLOListElement>("#result");

// 2. 결과 출력 함수
function showResult(message: string): void {
    console.log(message);

    if (result !== null) {
        // li 요소 생성
        const li: HTMLLIElement = document.createElement("li");

        // li의 텍스트 설정
        li.textContent = message;

        // ol 요소에 li 추가
        result.appendChild(li);
    }
}

// 3. 부모 요소의 캡처링 리스너
if (parent !== null) {
    parent.addEventListener(
        "click",
        (): void => {
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
    child.addEventListener(
        "click",
        (): void => {
            // 결과 초기화 없이 추가
            showResult("자식 요소 - 타깃");
        }
    );
}

// 5. 부모 요소의 버블링 리스너
if (parent !== null) {
    parent.addEventListener(
        "click",
        (): void => {
            showResult("부모 요소 - 버블링");
        },
        { capture: false }
    );
}

export {};
