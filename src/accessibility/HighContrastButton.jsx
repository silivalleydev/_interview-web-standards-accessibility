import React from 'react'

export default function HighContrastButton() {
  return (
    <>
    <h4>색상 대비를 충분히 확보하여 저시력 사용자도 쉽게 읽을 수 있도록 합니다. WCAG는 최소 4.5:1의 대비를 권장합니다.</h4>
    <button style={{ backgroundColor: '#000', color: '#fff', padding: '10px 20px' }}>
      대비가 높은 버튼
    </button>
    <hr/>
    </>
  )
}
