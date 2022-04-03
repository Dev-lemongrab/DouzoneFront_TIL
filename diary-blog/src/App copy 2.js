/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle]  = useState(['강촌 소고기 맛집', '송파 샤브샤브 맛집', '홍대 일식집']);
  let [like, setLike] = useState([0,0,0]);
  let [flag, setFlag] = useState(false);
  let [modal, setModal] = useState(false);

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
    if(modal === false) {
      setModal(true);
    } else if(modal === true ){
      setModal(false);
    } 
    // this.setFlag({ flag: !this.state.MyModal})
    // this.setFlag(setModal(!false));
    // this.setModal(!true);
  }

  return (
    <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div className='nav'> 나의 소소한 일상 </div>
          <p>{ nickName } 님 어서오세요!!!</p>
          <a  className="App-link"   href="https://cafe.naver.com/douzone2study"     target="_blank"       rel="noopener noreferrer">
            DouZone TH2기 카페
          </a>
        </header>
        <p>
          <button onClick={ titleChange }>0번째 제목 변경</button>
          <button onClick={ titleSort }>제목 오름차순 정렬</button>
        </p>
        {
          title.map(function(a, index){
            return(
              <div className="list" key={index}>
                <h3 onClick={()=>{ setFlag(true)}} >{ title[index]} 
                    <span onClick={()=>{setLike(like + 1)}}> ❤ </span> {like[index]} 
                </h3>
                <span>3월 31일 발행</span>
                <hr />
              </div>
            )
          })
        }
      
        <button onClick={()=>{ onoff }}>MyModal ON/OFF</button>
        {/* <button onClick={()=>{ onoff }}>MyModal ON/OFF</button> */}
        {/* <button onClick={()=>{ setFlag(true)}}>MyModal ON/OFF</button> */}

        {
          modal === true
          ? <MyModal title={title} flag={flag} key={key} />
          : null
        }

        
        {/* {
          flag === true
          ? <MyModal title={title} flag={flag} key={key} />
          : null
        } */}
    </div>
  );
}

function MyModal(props) {
  return (
    <div className='modal'key={index}>
      <h2 >{props.title[index]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}



export default App;
