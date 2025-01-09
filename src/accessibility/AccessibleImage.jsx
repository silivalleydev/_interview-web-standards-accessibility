import React from 'react'

export default function AccessibleImage() {
  return (
    <>
    <h4>alt 속성을 사용해 이미지의 내용을 설명합니다.</h4>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg"
      alt="파란 하늘 아래 있는 노란 해바라기"
      width={50}
      height={50}
    />
    <hr/>
    </>
  )
}
