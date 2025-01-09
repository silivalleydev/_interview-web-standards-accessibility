import React from 'react'

export default function DynamicUpdate() {
  const [count, setCount] = React.useState(0);

  return (
    <>
    <h4>동적으로 변경되는 정보를 aria-live로 스크린 리더가 감지할 수 있도록 합니다.</h4>
    <div>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <div aria-live="polite">현재 카운트는 {count}입니다.</div>
    </div>
    <hr/>
    </>
  )
}
