import React from 'react'

export default function Section() {
  return (
    <>
    <h4>section 태그</h4>
    <div>의미<br/>문서 내에서 관련 콘텐츠를 그룹화합니다.<br/><br/>제목 태그(h1~h6)와 함께 사용됩니다.<br/><br/>장점<br/><br/>접근성: 각 섹션의 내용을 명확히 정의하여 스크린 리더가 쉽게 탐색 가능.<br/><br/>표준: 논리적 콘텐츠 분리로 코드 가독성을 향상.<br/><br/>SEO: 검색 엔진이 섹션별 콘텐츠를 주제 단위로 색인화.<br/>

    </div>
    <section>
      <h2>소개</h2>
      <p>이 섹션은 우리 회사의 소개를 포함합니다.</p>
    </section>
    <hr/>
    </>
  )
}
