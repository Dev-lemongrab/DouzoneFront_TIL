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

- 항상 태그를 닫아줘야합니다. 👀 ex) <input></input>

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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
