import React from 'react'

/**
접근성 측면:

시각 장애 사용자가 버튼의 기능을 명확히 이해할 수 있도록 aria-label 제공.
스크린 리더가 "저장하기"라는 텍스트를 읽음.
표준 측면:

ARIA는 WAI-ARIA 표준의 일부로, 의미를 보완하는 표준 기술입니다.
브라우저와 보조 기술 간의 호환성을 보장.
 */
export default function AccessibleButton() {
  return (
    <>
    <h4>버튼에 아이콘만 있는 경우 시각 장에인 사용자에게 의미 전달위해 aria-label 추가</h4>
    <button aria-label='저장하기' onClick={() => alert('저장이 완료되었습니다.')}>
        💾
    </button>
    <hr/>
    </>
  )
}
