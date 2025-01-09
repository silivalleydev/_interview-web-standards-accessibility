import React from 'react'

export default function Figure() {
  return (
    <>
    <h2>figure, figcaption 태그(멀티미디어 관련 태그)</h2>
    <div>
    의미
<br/>figure: 이미지나 삽화 등의 독립된 콘텐츠를 나타냄.<br/><br/>figcaption: 콘텐츠에 대한 설명을 제공.<br/><br/>장점<br/><br/>접근성: 스크린 리더가 이미지를 설명과 함께 읽을 수 있음.<br/><br/>표준: 이미지와 설명을 구조적으로 연결.<br/><br/>SEO: 이미지와 설명이 검색 엔진에 함께 색인화.<br/>
    </div>
    <figure>
      <img src="example.jpg" alt="예제 이미지" />
      <figcaption>이 이미지는 예제 이미지입니다.</figcaption>
    </figure>
    <hr/>
    </>
  )
}
