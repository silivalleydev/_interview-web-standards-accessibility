import React from 'react'

export default function Footer() {
  return (
    <>
    <h4>footer 태그</h4>
    <div>의미
<br/>문서나 섹션의 바닥글을 정의합니다.<br/><br/>장점<br/><br/>접근성: 스크린 리더가 푸터 영역을 인식, 문서의 끝을 알려줍니다.<br/><br/>표준: 모든 섹션에 일관된 구조를 제공합니다.<br/><br/>SEO: 푸터 정보(저작권, 정책 등)를 중요 메타데이터로 간주합니다.<br/>

    </div>
    <footer>
      <p>&copy; 2025 내 웹사이트</p>
      <nav>
        <ul>
          <li><a href="#privacy">개인정보 처리방침</a></li>
          <li><a href="#terms">이용 약관</a></li>
        </ul>
      </nav>
    </footer>
    <hr/>
    </>
  )
}
