import React from 'react'

export default function DetailsNSummary() {
  return (
    <>
    <h4>details와 summary 태그</h4>
    <div>
    의미:<br/>details: 사용자가 열고 닫을 수 있는 추가 정보를 제공합니다.<br/>summary: details 태그의 요약 또는 제목 역할을 합니다.<br/>접근성 표준: 기본적으로 키보드 및 스크린 리더 지원이 포함되어 있어 사용자 경험을 향상시킵니다.<br/>SEO 장점: 콘텐츠가 HTML에 그대로 포함되므로, 검색 엔진에서 크롤링이 가능해 가독성과 가치를 높입니다.<br/>    </div>
    <div>
      <h1>FAQ</h1>
      <details>
        <summary>React란 무엇인가요?</summary>
        <p>React는 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리입니다.</p>
      </details>
      <details>
        <summary>React의 주요 장점은 무엇인가요?</summary>
        <p>컴포넌트 기반 설계, 가상 DOM, 높은 성능 등이 주요 장점입니다.</p>
      </details>
    </div>
    <hr/>
    </>
  )
}
