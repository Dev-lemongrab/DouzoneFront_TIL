import React, {useState} from 'react';
import './App.css';
import Hello from './Hello';

function App() {
  let nickName="oyuns";
  let value= {color:'blue', fontSize:'15px'};
  //let [title, setTitle] = useState('신촌 샤브샤브 맛집');
  let [title, setTitle] = useState(['강남 샤브샤브 맛집', '신촌 샤브샤브 맛집', '홍대 샤브샤브 맛집']);
  //let values= useState('data');//데이터 2개 전달 1, 요소, 변경할 수 있는 
  let [like, setLike] = useState(0);
  let ss = () => {setLike(like++)}
  function changeTitle() {
    let newTitle= [...title];
    newTitle[0] ='서대문222 맛집 리스트';
    setTitle(newTitle);
  }

  return (
    <div className="App">
      <div className='nav'>
        <div>나의 소중한 일상 소개</div>
      </div>  
      <div style={{ color:"red", fontSize : "30px" }}>{nickName}님 어서오세요!!!</div>  
      <div style={value} >{nickName} 님 어서오세요</div>
      <div className='list'>
        <button onClick={changeTitle}>제목변경</button>
        <h3>{title[0]} <span onClick={()=>{setLike(like+1)}}>❤️</span> : {like}</h3>
        <p>3월 30일 발행</p>
      </div>
      <div className='list'>
        <h3>{title[1]} <span onClick={ss}>❤️</span>{like} </h3>
        <p>3월 30일 발행</p>
      </div>
      <div className='list'>
        <h3>{title[2]} <span>❤️</span>{like} </h3>
        <p>3월 30일 발행</p>
      </div>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      
    </div>
  );
}

export default App;
