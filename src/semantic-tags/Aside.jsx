import React from 'react'

export default function Aside() {
  return (
    <>
    <h2>aside 태그</h2>
    <div>
    의미
<br/>보조 콘텐츠를 나타냅니다.<br/><br/>주요 콘텐츠와 관련되거나 별도의 추가 정보를 제공합니다.<br/><br/>장점<br/><br/>접근성: 스크린 리더가 보조 콘텐츠로 인식.<br/><br/>표준: 콘텐츠를 구분하여 가독성 향상.<br/><br/>SEO: 관련 링크와 정보를 검색 엔진이 별도로 처리.<br/>

    </div>
    <aside>
      <h3>관련 링크</h3>
      <ul>
        <li><a href="#link1">웹 접근성 가이드</a></li>
        <li><a href="#link2">HTML5 소개</a></li>
      </ul>
    </aside>
    <hr/>
    </>
  )
}
