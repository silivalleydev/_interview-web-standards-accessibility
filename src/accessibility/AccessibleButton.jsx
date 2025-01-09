import React from 'react'

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
