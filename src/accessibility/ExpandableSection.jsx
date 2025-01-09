import React from 'react'

export default function ExpandableSection() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
    <h2>aria-expanded는 요소의 상태(열림/닫힘)를 전달합니다.</h2>
    <div>
      <button
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '접기' : '펼치기'}
      </button>
      {isOpen && <div>여기에 추가 콘텐츠가 표시됩니다.</div>}
    </div>
    <hr/>
    </>
  )
}
