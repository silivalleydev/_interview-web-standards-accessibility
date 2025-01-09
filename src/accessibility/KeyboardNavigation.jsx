import React from 'react'

export default function KeyboardNavigation() {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      alert('아이템 선택됨!');
    }
  };

  return (
    <>
    <h4>tabIndex와 role="button"을 추가하여 디브 요소가 버튼처럼 동작하도록 합니다.(키보드 이벤트(Enter, Space 키)를 처리하여 마우스를 사용할 수 없는 사용자도 상호작용할 수 있도록 합니다.)</h4>
    <div
      tabIndex="0"
      role='button'
      onKeyDown={handleKeyDown}
      onClick={() => alert('아이템 선택됨!')}
      style={{ padding: '10px', border: '1px solid #ccc', display: 'inline-block' }}
    >
      선택 가능한 아이템
    </div>
    <hr/>
    </>
  );
}
