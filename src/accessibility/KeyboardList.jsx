import React from 'react'

export default function KeyboardList() {
  const items = ['항목 1', '항목 2', '항목 3'];
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setSelectedIndex((prev) => (prev + 1) % items.length);
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  };
  return (
    <>
    <h4>키보드로 리스트 항목을 선택할 수 있도록 이벤트를 처리합니다.</h4>
    <ul role="listbox" onKeyDown={handleKeyDown} tabIndex="0">
      {items.map((item, index) => (
        <li
          key={index}
          role="option"
          aria-selected={selectedIndex === index}
          style={{
            backgroundColor: selectedIndex === index ? '#ddd' : 'transparent',
          }}
        >
          {item}
        </li>
      ))}
    </ul>
    <hr/>
    </>
  )
}
