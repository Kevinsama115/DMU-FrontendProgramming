export {};
type UserCallback = (
  error: Error | null,
  userName?: string
) => void;

function getUser(callback: UserCallback): void {
  console.log("사용자 데이터 요청");

  setTimeout((): void => {
    const success: boolean = true;

    if (success) {
      callback(null, "홍길동");
    } else {
      callback(new Error("사용자 데이터 조회 실패"));
    }
  }, 1000);
}

getUser((error: Error | null, userName?: string): void => {
  if (error) {
    console.log(error.message);
    return;
  }

  console.log(`사용자 이름: ${userName}`);
});