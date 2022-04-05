# 📌 React Basic

## 🤓 react js

### 💡 개념

- 자바스크립트 라이브러리로 사용자 인터페이스를 만드는데 사용
- 오직 view만 신경쓰는 라이브러리

### 💡 리액트 이해

1. 컴포넌트
   - 특정부분이 어떻게 생길지 정하는 선언체
   - 재사용이 가능한 api로 수많은 기능들을 내장하고 있습니다.
   - 컴포넌트 하나에서 해당컴포넌트의 생김새와 작동방식을 정의
2. 랜더링
   - 사용자화면에 뷰를 보여주는 것을 랜더링 이라고 함.
   - 초기랜더링
     - 맨처음 어떻게 보일지 정하는 것
     - render 함수가 있다.
     - 컴포넌트가 어떻게 생겼는지 정의하는 역할
     - Render함수를 실행하면 내부에 있는 컴포넌트들도 재귀적으로 렌더링
     - 최상위 컴포넌트의 렌더링 작업이 끝나면 갖고있는 정보들을 사용하여 HTML마크업을 만들고 실제 페이지의 DOM요소 안에 주입합니다.
   - 조화과정
     - 컴포넌트에 데이터 변화가 있을때 새로운 요소로 갈아끼우는 것을 말합니다.
     - 새로운 데이터를 갖고 render함수가 또 다시 호출됩니다.
     - render 함수가 반환하는 결과를 바로 DOM에 반영하지 않고, 이전 컴포넌트 정보와 현재 컴포넌트 정보를 비교합니다.
     - 둘의 차이를 알아내 최소한의 연산으로 DOM트리를 업데이트 합니다.
       - 결국 최적의 자원을 사용하여 이를 수행하는 것

### 💡 리액트의 특징

- Virtual DOM
  - DOM이란❓
  - Document Object Model
  - 객체로 문서구조를 표현하는 방법
  - 자바스크립트와 CSS를 적용
  - 트리형태라서 특정 노드를 찾거나 수정하거나 제거하거나 원하는 곳에 삽입할 수 있습니다.
  - XML, HTML
  - 동적UI에 최적화 돼있지 않기 떄문에 자바스크립트를 이용해 동적으로 구현
    - 필요한 이유
      - 웹브라우저 단에 DOM에 변화가 일어나면 웹브라우저가 CSS를 다시연산, 레이아웃 구성, 페이지 리페인트 -> 시간 소모 증가
      - virtualDOM방식을 사용해 DOM업데이트를 추상화함으로써 DOM처리 횟수를 최소화 하고 효율적으로 진행
    - 실제 DOM에 접근하여 조작하는 대신, 이를 추상화한 자바스크립트 객체를 구성하여 사용합니다.
      1.  데이터를 업데이트 하면 UI를 Virtual DOM에 리렌더링 합니다.
      2.  이전 Virtual DOM에 있던 내용과 현재 내용을 비교합니다.
      3.  바뀐 부분만 실제 DOM에 적용합니다.

## 🤓 JSX

### 💡 개념

- 자바스크립트의 확장 문법이며 XML과 매우 비슷하게 생겼습니다.
- 브라우저에서 실행되기 전에 번들링되는 과정에서 바벨에 의해 일반 자바스크립트 형태의 코드로 변환됩니다.

### 💡 장점

- 보기쉽고 익숙하다
- 활용도가 높다.

### 💡 문법

1. 감싸인 요소

- 부모요소 하나로 감싸야합니다.

2. 컴포넌트의 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM트리 구조로 이뤄져야한다는 규칙

- <></>

3. 자바스크립트 표현

- {}를 활용해서 자바스크립트 값을 JSX안에서 렌더링 할 수 있습니다.

4. if 문 대신 조건부 연산자
5. JSX안에서 if문을 사용할 수 없습니다.

- { }안에 조건부 연산자를 사용합니다.
- {name === 조건?(true) :(false) }
- AND연산자(&&)를 사용한 조건부 렌더링
- undefined를 렌더링 하지 않기

6. 인라인 스타일링

- css를 카멜표기법으로 작성

7. class 대신 className
8. 꼭 닫아야하는 태그

- 항상 태그를 닫아줘야합니다. 👀 ex) ` <input></input>`

9. 주석

- {/\* 주석은 이렇게 작성 \*/)}

### 💡 ESLint와 Prettier적용하기

- ESLint는 문법검사도구
  - vsCode내에서 바로바로 경고메세지를 확인할 수 있습니다.
- Prettier는 코드 스타일 자동정리 도구입니다.
  - f1 누르고 format 입력하여 사용
  - 커스터마이징이 가능
    - ```javascript
        {
          "singleQuote" : true,
          "semi":true,
          "useTabs":false,
          "tabWidth":2
          }
      ```
    - 작은따옴표 사용, 세미콜론 사용, 탭 사용X, 공백 2칸
  - 설정에서 format on save 체크하면 저장할때마다 바로 적용됩니다.

## 🤓 Component

> 컴포넌트의 기능은 단순한 템플릿 이상입니다. 데이터가 주어졌을 때, UI를 만들어 주는 것, 라이프사이클 API를 이용한 작업처리, 임의 메서드를 만들어 특별한 기능을 줄 수 있습니다.

### 1. 💡 클래스형 컴포넌트

### 2. 💡 함수형 컴포넌트

### props

- props는 properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소.
- props값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정 가능.
- 컴포넌트명.defaultProps = {
  변수명 : '값'
  }
- 디폴트값으로 할당해줍니다.

### children

- 태그사이의 내용을 보여줌
- {props.children}

### 비구조화 할당 문법

- props내부 값 추출
- 구조분해문법이라고도 불리며, 함수의 파라미터 부분에서도 사용할 수 있습니다.

### propTypes를 통한 props검증

- 컴포넌트의 필수 props를 지정하거나 props의 타입을 지정할 때는 propTypes를 사용합니다.
- 컴포넌트의 propTypes를 지정하는 방법
  1. ` import PropTypes from "prop-types";`
  2. ````MyComponent.propTypes = {
         name: PropTypes.string,
         favoriteNumber: PropTypes.number.isRequired,
         };  ```
     ````
- 꼭 사용할 필요는 없지만 협업 시 능률이 좋아진다.
- PropTypes 종류
  1. array : 배열
  2. arrayOf(다른 PropType) : PropType으로 이루어진 배열을 의미.
  3. bool : true, false
  4. func : 함수
  5. number : 숫자
  6. object : 객체
  7. string : 문자열
  8. symbol : ES6의 symbol
  9. node : 렌더링할 수 있는 모든 것
  10. instanceOf : 특정클래스의 인스턴스
  11. oneOf(['dog','cat']) : 주어진 배열요소중 값 하나
  12. oneOfType([React.PropTypes.string, PropTypes.number]) : 주어진 배열 안의 종류 중 하나
  13. objectOf(React.PropTypes.number) : 객체의 모든 키값이 인자로 주어진 PropType인 객체

### 클래스형 컴포넌트에서 props사용하기

- render 함수에서 this.props를 조회하면 됩니다.
- ````class MyComponent extends Component {
      render() {
          const { name, favoriteNumber, children } = this.props; //비구조화 할당
          return (
          <div>
              안녕하세요 제 이름은 {name}입니다. children 값은 {children} 입니다.{" "}
              <br />
              제가 좋아하는 숫자는 {favoriteNumber} 입니다.
          </div>
          );
      }
  } ```
  ````

### state

- 컴포넌트 내부에서 바뀔 수 있는 값을 의미합니다.
- props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값
- 자식 컴포넌트에서 props의 값을 바꿀 수는 없다.
- 클래스 : state <br> 함수 : useState

### 배열 비구조화 할당

- 배열안에 있는 값을 쉽게 추출할 수 있도록 해주는 문법.

## 🤓 EventHandling

### ❗️ 주의사항

1. 이벤트 이름은 카멜 표기법으로 작성
2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라 함수형태의 값을 전달.
3. DOM요소에만 이벤트를 설정할 수 있습니다.

### 💡 이벤트 종류

- Clipboard
- Composition
- Keyboard
- Focus
- Form
- Mouse
- Selection
- Touch
- UI
- Wheel
- Media
- Image
- Animation
- Transition

### 이벤트 실습

- e.target.value 하면 event에서 들어오는 값을 구할 수 있다.
- state에 input값 담기
