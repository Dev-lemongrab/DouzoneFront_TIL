import React, { useState } from 'react';

function MyComponentFunc({ name, children }) {
  let [item, setItem] = useState(9);

  return (
    <div>
      <h3>나는{name}</h3>
      {children}
    </div>
  );
}
function MyComponentFunc2() {
  return (
    <div>
      <h3>나는 함수형 컴포넌트입니다.</h3>
      {children}
    </div>
  );
}
function MyComponentFunc3() {
  return (
    <div>
      <h3>나는 함수형컴포넌트입니다.</h3>
      {children}
    </div>
  );
}
export default { MyComponentFunc, MyComponentFunc2, MyComponentFunc3 };
