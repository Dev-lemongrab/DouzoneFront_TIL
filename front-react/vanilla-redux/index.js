import { createStore } from "redux";

//DOM 레퍼런스
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

//액션타입과 액션생성함수
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });
//초깃값 설정
const initialState = {
  toggle: false,
  counter: 0,
};

//리듀서 함수 정의
//state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
  //action.type에 따라 다른 작업을 처리
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, //불변성 유지를 해주어야 합니다.
        toggle: !state.toggle,
      };

    case INCREASE:
      return {
        ...state,
        counter: state.counter + state.difference,
      };

    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}
const store = createStore(reducer);

const render = () => {
  const state = store.getState();
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  //카운터 처리
  counter.innerText = state.counter;
};

render();
store.subscribe(render);

divToggle.onClick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onClick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onClick = () => {
  store.dispatch(decrease());
};
