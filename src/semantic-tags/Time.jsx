import React from 'react'

export default function Time() {
  return (
    <>
    <h4>time 태그</h4>
    <div>
    의미
<br/>날짜나 시간을 나타냅니다.<br/><br/>dateTime 속성으로 기계 판독 가능한 값을 제공합니다.<br/><br/>장점<br/><br/>접근성: 날짜/시간 정보를 명확히 전달.<br/><br/>표준: 시간 정보를 구조화.<br/><br/>SEO: 기계 판독 가능한 시간 데이터로 검색 최적화.<br/>

    </div>
    <time dateTime="2025-01-09">2025년 1월 9일</time>
    <hr/>
    </>
  )
}
