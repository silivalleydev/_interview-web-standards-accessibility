
import React from 'react'
/**
접근성 측면:

스크린 리더가 입력 필드와 레이블을 정확히 연결.
레이블을 클릭해도 입력 필드가 활성화되어 사용자 편의성 증가.
표준 측면:

label과 id는 HTML 표준으로, 폼 컨트롤과의 상호작용을 명시적으로 연결.

 */
export default function AccessibleForm() {
  return (
    <>
    <h2>label과 input을 htmlFor와 id로 연결하여 폼 컨트롤을 더 쉽게 사용할 수 있게 합니다.(라벨을 누르면 htmlFor와 id가 연결되어 해당 인풋으로 포커싱이 감 / 특히 스크린 리더(시각장애인) 사용자에게 유용)</h2>
    <form>
      <label htmlFor="username">사용자 이름</label>
      <input type="text" id="username" name="username" />
      
      <button type="submit">제출</button>
    </form>
    <hr/>
    </>
  )
}
