import React from 'react'

export default function Navigation() {
  return (
    <>
    <h4>navigation 관련 태그</h4>
    <div>
    의미
<br/>내비게이션 링크 그룹을 나타냅니다.<br/><br/>장점<br/><br/>접근성: 스크린 리더가 내비게이션 링크 그룹임을 알림.<br/><br/>표준: 내비게이션 구조를 명확히 정의.<br/><br/>SEO: 검색 엔진이 사이트 구조를 이해하는 데 도움.<br/>

    </div>
    <nav>
      <ul>
        <li><a href="#home">홈</a></li>
        <li><a href="#about">소개</a></li>
        <li><a href="#contact">문의</a></li>
      </ul>
    </nav>
    <hr/>
    </>
  )
}
