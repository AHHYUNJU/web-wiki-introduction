document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.querySelector("#commentInput");
  const submitButton = document.querySelector("#submitButton");
  const commentList = document.querySelector("#commentList");

  if (!inputField || !submitButton) {
    console.error("❌ HTML 요소를 찾을 수 없습니다. id를 확인하세요!");
    return;
  }
  // 버튼 클릭 이벤트 추가
  submitButton.addEventListener("click", function () {
    const commentText = inputField.value.trim(); // 입력된 댓글 가져오기
    console.log("입력된 댓글:", commentText);

    if (commentText === "") {
      alert("댓글을 입력하세요!");
      return;
    }

    // 새로운 댓글을 리스트에 추가
    const listItem = document.createElement("li"); // <li> 요소 생성
    listItem.textContent = commentText; // 입력된 텍스트 삽입
    commentList.appendChild(listItem); // <ul>에 추가

    alert("댓글이 등록되었습니다."); // 알림 메시지 출력

    inputField.value = ""; // 입력 필드 초기화
  });
});
