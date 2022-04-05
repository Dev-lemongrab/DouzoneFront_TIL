import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    //state의 초깃값 설정하기
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  render() {
    const { number, fixedNumber } = this.state; //비구조화 할당
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }, () =>
              console.log("방금 setState가 호출됐습니다.")
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
export default Counter;
