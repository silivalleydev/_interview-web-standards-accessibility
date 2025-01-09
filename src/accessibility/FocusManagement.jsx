import React from 'react'

export default function FocusManagement() {
  const inputRef = React.useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };


  return (
    <>
    <h2>포커스를 적절히 이동시켜 사용자 경험을 개선합니다.</h2>
    <div>
      <button onClick={handleClick}>입력란으로 포커스 이동</button>
      <input ref={inputRef} type="text" placeholder="여기에 입력하세요" />
    </div>
    <hr/>
    </>
  )
}
