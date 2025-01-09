import React from 'react'

export default function SkipToContent() {
  return (
    <>
    <h4>"콘텐츠로 건너뛰기" 링크를 추가하여 키보드 사용자가 반복되는 내비게이션을 건너뛸 수 있도록 합니다.</h4>
    <div>
      <a href="#mainContent" style={{ position: 'absolute', top: 0, left: 0 }}>Sementic 콘텐츠로 건너뛰기</a>
      <header>헤더 영역</header>
      <main id="mainContent" style={{fontWeight: 'bold', fontSize: 30}}>Sementic 콘텐츠</main>
    </div>
    </>
  )
}
