function getUser(callback) {
  console.log("사용자 데이터 요청");

  setTimeout(() => {
    const success = true;

    if (success) {
      callback(null, "홍길동");
    } else {
      callback(new Error("사용자 데이터 조회 실패"));
    }
  }, 1000);
}

getUser((error, userName) => {
  if (error) {
    console.log(error.message);
    return;
  }

  console.log(`사용자 이름: ${userName}`);
});