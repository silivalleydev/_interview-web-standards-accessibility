import React from 'react'

export default function Header() {
  return (
    <>
    <h4>header 태그:</h4>
    <div>
    의미
<br/>문서나 섹션의 머리말을 정의합니다.<br/><br/>로고, 제목, 내비게이션 메뉴 등이 포함될 수 있습니다.<br/><br/>장점<br/><br/>접근성: 스크린 리더는 header를 문서의 머리말로 인식, 문서 구조를 더 잘 이해할 수 있게 합니다.<br/><br/>표준: HTML5 표준에 맞게 문서 구조를 명확히 합니다.<br/><br/>SEO: 검색 엔진은 header의 콘텐츠를 더 중요한 정보로 간주합니다.
    </div>
    <header>
      <h1>내 블로그</h1>
      <nav>
        <ul>
          <li><a href="#home">홈</a></li>
          <li><a href="#about">소개</a></li>
          <li><a href="#contact">문의</a></li>
        </ul>
      </nav>
    </header>
    <hr/>
    </>
  )
}
