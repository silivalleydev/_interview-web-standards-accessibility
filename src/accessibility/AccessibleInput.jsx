import React from 'react'

export default function AccessibleInput() {
  return (
    <>
    <h4>aria-describedby는 추가 정보를 연결하여 사용자에게 도움말을 제공합니다.</h4>
    <div>
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        type="email"
        aria-describedby="emailHelp"
      />
      <small id="emailHelp">이메일 형식을 지켜주세요 (예: user@example.com).</small>
    </div>
    <hr/>
    </>
  )
}
