# 웹 표준과 접근성

## 1. 웹 표준(Web Standards)

### 정의
웹 표준은 웹 콘텐츠와 기술의 일관성과 호환성을 보장하기 위해 국제적으로 합의된 규칙, 기술 사양, 지침을 말합니다. 이를 통해 웹사이트와 웹 애플리케이션이 다양한 브라우저, 기기, 플랫폼에서 동일하게 작동하고 일관된 사용자 경험을 제공합니다.

### 핵심 목적
- **호환성**: 다양한 웹 브라우저와 기기에서 동일한 사용자 경험 보장.
- **유지보수성**: 구조화된 코드로 유지보수 및 확장 용이.
- **효율성**: 중복 코드 감소 및 표준화된 접근 방식 활용.
- **SEO 최적화**: 검색 엔진이 콘텐츠를 잘 색인화하도록 도움.

### 비유
웹 표준은 "전 세계에서 통용되는 공용 언어"와 같습니다. 특정 지역에서만 쓰이는 방언이 아니라 어디서나 이해 가능한 언어로 웹을 제작하는 것을 의미합니다.

---

## 2. 웹 접근성(Web Accessibility)

### 정의
웹 접근성은 장애나 제약이 있는 사람을 포함하여 누구나 웹 콘텐츠와 서비스를 사용할 수 있도록 만드는 설계 및 개발 방법을 말합니다. 이를 통해 다양한 사용자, 특히 신체적 장애를 가진 사용자도 동등하게 웹을 이용할 수 있도록 보장합니다.

### 핵심 목적
1. **포괄성**: 모든 사용자(장애 여부와 관계없이)에게 접근 가능한 웹 제공.
2. **공평성**: 기술에 대한 접근권 보장.
3. **법적 준수**: WCAG(Web Content Accessibility Guidelines)와 같은 국제 표준 준수.
4. **사용자 경험 개선**: 접근성 향상은 모든 사용자 경험에도 긍정적인 영향을 미침.

### 비유
웹 접근성은 "모든 사람을 위한 문턱 없는 건물"과 같습니다. 계단만 있는 입구가 아니라 휠체어 램프를 추가해 누구나 접근 가능하게 만드는 것과 같은 개념입니다.

---

## 3. 조건부 포커스 이동: 접근성의 편의성 사례

### 정의
조건부 포커스 이동은 특정 입력 필드에서 일정 조건(예: 텍스트 길이, 형식 조건 등)이 충족되면 자동으로 다음 입력 필드로 포커스를 이동시키는 기능입니다. 이는 사용자 편의를 높이고, 웹 접근성의 일부로 간주될 수 있습니다.

### 접근성 측면의 장점
1. **효율성과 편리함 제공**:
   - 전화번호, 인증 코드 입력 등에서 자동으로 다음 필드로 이동하면 추가적인 탭(Tab) 키 입력 없이 효율적인 작업 가능.
   - 특히 키보드 사용자가 시간을 절약할 수 있음.

2. **포커스 관리**:
   - 포커스가 예상대로 자연스럽게 이동해 사용자 흐름을 방해하지 않음.
   - WCAG의 "맥락 변화는 예측 가능해야 한다"는 가이드라인 준수.

3. **스크린 리더 사용자 배려**:
   - 포커스가 이동할 때 보조 기술이 사용자에게 새로운 입력 필드의 목적을 명확히 전달하도록 설계 가능.

### 구현 예시
```jsx
import React, { useRef } from 'react';

function OTPInput() {
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const { value } = e.target;

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      // 다음 입력 필드로 포커스 이동
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div>
      {Array(4).fill().map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          ref={(el) => (inputRefs.current[index] = el)}
          onChange={(e) => handleInputChange(e, index)}
          aria-label={`OTP 입력 ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default OTPInput;
```

### 장애가 있는 사람을 위한 추가 사례
1. **시각 장애 사용자 지원**:
   - 입력 필드에 대체 텍스트와 설명을 제공하여 스크린 리더 사용자가 각 필드의 목적을 명확히 이해할 수 있도록 합니다.
   ```jsx
   <input
     type="text"
     id="otp1"
     aria-label="첫 번째 인증 코드 입력"
     aria-describedby="otpInstruction"
   />
   <p id="otpInstruction">각 칸에 한 자리 숫자를 입력하세요.</p>
   ```

2. **모터 장애 사용자 지원**:
   - 키보드 외에도 음성 명령(예: VoiceOver, Dragon NaturallySpeaking)을 사용할 수 있도록 각 입력 필드의 순서를 명확히 하고, `tabIndex`를 순차적으로 설정.
   ```jsx
   <input type="text" tabIndex="1" />
   <input type="text" tabIndex="2" />
   ```

3. **색맹 사용자 지원**:
   - 입력 오류를 단순히 색상으로만 표시하지 않고 텍스트로도 명확히 알림.
   ```jsx
   <input aria-invalid="true" />
   <p style={{ color: 'red' }}>입력 오류가 발생했습니다. 다시 시도하세요.</p>
   ```

---

## 4. 웹 표준에 대한 사례

1. **시맨틱 HTML 사용**:
   - `<header>`, `<main>`, `<footer>` 등 HTML5 시맨틱 태그를 사용해 문서의 구조를 명확히 정의.
   ```jsx
   <header>
     <h1>내 웹사이트</h1>
   </header>
   <main>
     <section>
       <h2>소개</h2>
       <p>이 섹션은 내 웹사이트에 대한 설명입니다.</p>
     </section>
   </main>
   <footer>
     <p>© 2025 내 웹사이트</p>
   </footer>
   ```

2. **폼 요소와 관련 속성 사용**:
   - HTML5 표준 속성(예: `required`, `type="email"`, `placeholder`)을 사용하여 기본 유효성 검사를 제공.
   ```jsx
   <form>
     <label htmlFor="email">이메일</label>
     <input type="email" id="email" required placeholder="example@domain.com" />
   </form>
   ```

3. **미디어 태그 활용**:
   - `<video>` 및 `<audio>` 태그에 기본 컨트롤과 대체 텍스트를 추가해 사용자 경험 향상.
   ```jsx
   <video controls>
     <source src="video.mp4" type="video/mp4" />
     동영상을 지원하지 않는 브라우저입니다.
   </video>
   ```

---

## 5. 접근성과 웹 표준을 확인하기 위한 툴

### 접근성 확인 툴
1. **[axe DevTools](https://www.deque.com/axe/)**:
   - 브라우저 확장 프로그램으로 접근성 문제를 자동으로 감지.
   - WCAG 가이드라인 준수 여부를 검사.

2. **[WAVE](https://wave.webaim.org/)**:
   - 웹페이지의 접근성 문제를 시각적으로 강조해 보여줌.
   - 시각적 대체 텍스트, ARIA 레이블 등의 요소를 검사.

3. **[Lighthouse](https://developers.google.com/web/tools/lighthouse)**:
   - Google Chrome에 내장된 개발자 도구로 성능, SEO, 접근성을 포함한 웹 표준을 분석.

4. **[VoiceOver / NVDA / JAWS]**:
   - 스크린 리더 도구를 사용해 웹사이트가 보조 기술과 호환되는지 테스트.

### 웹 표준 확인 툴
1. **[W3C Markup Validation Service](https://validator.w3.org/)**:
   - HTML 및 CSS 코드가 W3C 웹 표준을 준수하는지 검사.
   - 구조적 오류와 비표준 속성 감지.

2. **[CSS Validator](https://jigsaw.w3.org/css-validator/)**:
   - CSS 코드의 문법과 웹 표준 준수 여부를 확인.

# 시맨틱 태그(Semantic Tags)

시맨틱 태그는 HTML5에서 추가된 태그로, 웹페이지의 구조와 콘텐츠의 의미를 명확히 전달하기 위해 사용됩니다. 이 문서에서는 주요 시맨틱 태그의 종류와 사용 예시를 설명합니다.

---

## 1. 문서 구조 관련 태그

### 1.1 `<header>`
- 문서나 섹션의 머리말을 정의.
- 로고, 제목, 내비게이션 메뉴 등을 포함.
```html
<header>
  <h1>웹 표준과 접근성</h1>
  <nav>
    <ul>
      <li><a href="#section1">소개</a></li>
      <li><a href="#section2">예시</a></li>
    </ul>
  </nav>
</header>
```

### 1.2 `<main>`
- 문서의 주요 콘텐츠를 나타냄.
- 페이지의 고유하고 핵심적인 내용을 담으며, 한 페이지에 하나만 있어야 함.
```html
<main>
  <h2>주요 내용</h2>
  <p>이 영역은 페이지의 주요 정보를 포함합니다.</p>
</main>
```

### 1.3 `<footer>`
- 문서나 섹션의 바닥글을 정의.
- 저작권 정보, 추가 링크, 연락처 정보 등을 포함.
```html
<footer>
  <p>&copy; 2025 내 웹사이트. All rights reserved.</p>
</footer>
```

### 1.4 `<section>`
- 주제별로 문서를 나누는 구역을 나타냄.
- 제목(`<h1>~<h6>`)과 함께 사용해 구역을 명확히 정의.
```html
<section>
  <h2>웹 표준이란?</h2>
  <p>웹 표준은...</p>
</section>
```

### 1.5 `<article>`
- 독립적으로 배포 가능한 콘텐츠(예: 블로그 글, 뉴스 기사)를 나타냄.
```html
<article>
  <h2>오늘의 블로그 포스트</h2>
  <p>이 글은 독립적으로 사용할 수 있는 콘텐츠입니다.</p>
</article>
```

---

## 2. 내비게이션 관련 태그

### 2.1 `<nav>`
- 내비게이션 링크 그룹을 정의.
- 사이트나 페이지 내 다른 섹션으로 이동하는 링크를 포함.
```html
<nav>
  <ul>
    <li><a href="#home">홈</a></li>
    <li><a href="#about">소개</a></li>
    <li><a href="#contact">문의</a></li>
  </ul>
</nav>
```

---

## 3. 멀티미디어 관련 태그

### 3.1 `<figure>`
- 이미지나 삽화 등 독립된 콘텐츠를 나타냄.
- `<figcaption>`을 사용해 설명을 제공할 수 있음.
```html
<figure>
  <img src="example.jpg" alt="예제 이미지">
  <figcaption>이 이미지는 예제 이미지입니다.</figcaption>
</figure>
```

### 3.2 `<figcaption>`
- `<figure>` 태그 내 콘텐츠의 캡션(설명)을 제공.
```html
<figure>
  <img src="chart.png" alt="차트">
  <figcaption>이 차트는 2025년 데이터를 나타냅니다.</figcaption>
</figure>
```

---

## 4. 기타 중요한 태그

### 4.1 `<aside>`
- 메인 콘텐츠와 관련된 보조 콘텐츠(사이드바, 참고 정보 등)를 나타냄.
```html
<aside>
  <h3>관련 링크</h3>
  <ul>
    <li><a href="#link1">웹 접근성 가이드</a></li>
    <li><a href="#link2">HTML5 소개</a></li>
  </ul>
</aside>
```

### 4.2 `<time>`
- 날짜나 시간을 나타냄. `datetime` 속성을 통해 기계가 읽을 수 있는 형식으로 제공 가능.
```html
<p>작성 날짜: <time datetime="2025-01-09">2025년 1월 9일</time></p>
```

### 4.3 `<mark>`
- 하이라이트 또는 중요한 텍스트를 나타냄.
```html
<p>이 부분은 <mark>중요한 정보</mark>입니다.</p>
```

### 4.4 `<details>`
- 추가 정보를 숨기거나 표시하는 대화형 위젯을 제공.
```html
<details>
  <summary>추가 정보 보기</summary>
  <p>이 영역은 더 많은 정보를 제공합니다.</p>
</details>
```

### 4.5 `<summary>`
- `<details>` 태그 내에서 숨겨진 콘텐츠를 설명하는 제목.
```html
<details>
  <summary>FAQ 보기</summary>
  <p>여기에 질문에 대한 답변이 있습니다.</p>
</details>
```

---

## 5. 시맨틱 태그 사용 시 장점

### 5.1 접근성 향상
- 보조 기술(스크린 리더 등)이 콘텐츠 구조를 더 잘 이해할 수 있음.

### 5.2 SEO 최적화
- 검색 엔진이 콘텐츠의 의미를 명확히 파악하여 색인화 가능.

### 5.3 코드 가독성 증가
- 코드 구조가 명확해져 개발자 간 협업이 쉬워짐.

---

## 요약
시맨틱 태그는 웹페이지를 더 의미 있고 구조적으로 만드는 데 중요한 역할을 합니다. 이를 올바르게 사용하면 접근성과 사용자 경험이 모두 향상됩니다.


