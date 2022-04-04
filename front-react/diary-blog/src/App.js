/* eslint-disable */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponents from './components/MyComponents';
import { MyComponentFunc } from './components/MyComponentFunc';

function App() {
  return (
    <div>
      <p>안녕333</p>
      <MyComponents msg={'React!!!'} age={27} />
      <MyComponents age={100} />
      <MyComponents hi={'안녕하세요'} nai={99} />
      <MyComponentFunc name={'함수형 컴포넌트'}>
        hjkjh
        <div>함수형 Children</div>
      </MyComponentFunc>
    </div>
  );
}

export default App;
