import React from 'react'

export default function FormWithError() {
  const [error, setError] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('이 필드는 필수입니다.');
  };

  return (
    <>
    <h4>에러 메시지를 aria-invalid와 aria-describedby로 연결하여 접근성을 높입니다.</h4>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">사용자 이름</label>
      <input
        id="username"
        type="text"
        aria-invalid={!!error}
        aria-describedby="errorMessage"
      />
      {error && <span id="errorMessage" style={{ color: 'red' }}>{error}</span>}
      <button type="submit">제출</button>
    </form>
    <hr/>
    </>
  )
}
