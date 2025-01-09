
import React from 'react'

export default function AccessibleForm() {
  return (
    <>
    <h4>label과 input을 htmlFor와 id로 연결하여 폼 컨트롤을 더 쉽게 사용할 수 있게 합니다.(라벨을 누르면 htmlFor와 id가 연결되어 해당 인풋으로 포커싱이 감 / 특히 스크린 리더(시각장애인) 사용자에게 유용)</h4>
    <form>
      <label htmlFor="username">사용자 이름</label>
      <input type="text" id="username" name="username" />
      
      <button type="submit">제출</button>
    </form>
    <hr/>
    </>
  )
}
