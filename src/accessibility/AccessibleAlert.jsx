import React from 'react'

export default function AccessibleAlert() {
  return (
    <>
    <h4>role="alert"는 스크린 리더에게 이 내용이 중요하며 즉시 전달해야 함을 알립니다.</h4>
    <div role="alert">
      중요한 알림: 접근성이 개선되었습니다!
    </div>
    <hr/>
    </>
  )
}
