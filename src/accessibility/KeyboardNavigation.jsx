import React from 'react'

/**
접근성 측면:

키보드 전용 사용자도 Enter와 Space 키로 상호작용 가능.
tabIndex와 role="button"을 추가하여 디브 요소를 버튼처럼 동작.
표준 측면:

WAI-ARIA 표준 활용으로 비표준 요소에 의미를 부여.
키보드 내비게이션은 WCAG 표준 요구사항.
 */
export default function KeyboardNavigation() {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      alert('아이템 선택됨!');
    }
  };

  return (
    <>
    <h2>tabIndex와 role="button"을 추가하여 디브 요소가 버튼처럼 동작하도록 합니다.(키보드 이벤트(Enter, Space 키)를 처리하여 마우스를 사용할 수 없는 사용자도 상호작용할 수 있도록 합니다.)</h2>
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
