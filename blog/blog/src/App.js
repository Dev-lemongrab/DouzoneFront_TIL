/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {

  let [title, setTitle]  = useState(['강촌 소고기 맛집', '송파 샤브샤브 맛집', '홍대 일식집']);
  let [like, setLike] = useState(0);
  let [flag, setFlag] = useState(false);

  let nickName = 'kingsmile';

  function titleChange(){
    var newTitle = [...title];
    newTitle[0] = '센텀 고기 맛집';
    setTitle(newTitle);
  }

  function titleSort(){
    var titleSort = [...title];
    titleSort = title.sort();
    setTitle(titleSort);
  }

  function onoff() {
    this.setFlag({ flag: !this.state.Modal})
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>나의 소소한 일상 소개</div>
      </div>
      <div style={ value }  >{ nickName } 님 어서오세요!!!</div>

      <button onClick={ titleChange }>0번째 제목 변경</button>
      <button onClick={ titleSort }>제목 오름차순 정렬</button>
      <div className="list">
        <h3>{ title[0] } <span onClick={ ()=>{ setLike( ok + 1) } }>👍</span> { ok } </h3>
        <p>3월 22일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[1] }</h3>
        <p>3월 22일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3 onClick={ () => { setFlag(true) }}>{ title[2] } </h3>
        <p>3월 22일 발행</p>
        <hr/>
      </div>
      <button onClick={ ()=>{ onoff } }>Modal ON/OFF</button>

      {
        flag === true 
        ? <Modal></Modal>
        : null
      }
      
    </div>
  )
}

function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
