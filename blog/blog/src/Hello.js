// Hello.js
import React from 'react';
import './Hello.css'

//export default function Hello() {
function Hello(props) {

    return(
        <>
            <p>{props.name}</p>
            <div >
                <h2> { props.message } 전달 받음</h2>
            </div>
            <div>
                <h2> 리액트 기본 문법 테스트</h2>
            </div>
        </>
    );
        
}
export default Hello;