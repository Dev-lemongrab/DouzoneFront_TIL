import React , { Component } from 'react';
import './MyComponents.css';
import PropTypes from 'prop-types';

class MyComponents extends Component {
    //생성자
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // 상태변수(state variable)
    //         number: 0
    //     }
    // }

    //상태변수 선언
    state = {
        number: 0,
        message:'',
        validate: false,
        messages: ['AngularJS', 'React', 'Vue', 'Ember']
    }

    //event handler 함수 선언 (arrow function)
    onDecrement = () => {
        this.setState({
            number: this.state.number - 1
        });
    }
    handleClick= ()=>{
        this.setState({
            validate: true
        });
        this.myInput.focus();
    };
    handlerKeyPress = (event) => {
        const { messages, message } = this.state;
        // if(event.keyCode === 'Enter'){
        if(event.keyCode === 13 ){
            this.setState({
                messages: messages.concat(message),
                message: ''
            });
        }
    };
    handleDoubleClick = (index) => {
        this.setState({
            messages: this.state.messages.filter( (item, idx) => idx !== index )
        })
    }

    render() {
        //변수선언
        const {msg, age} = this.props;
        const { number, message, validate, messages }= this.state;
        const {onDecrement, handleClick, handlerKeyPress, handleDoubleClick} = this;
        const message_list=messages.map((item, idx)=>(
            <li key={idx} onDoubleClick={()=>handleDoubleClick(idx)}>{item}</li>
        ));

        return (
            <>
                <h2>Welcome {this.props.nai} / {this.props.hi}</h2>
                <hr/>
                <h3>Hello{msg}/{age}</h3>
                <h4>상태변수{number}</h4>
                <button onClick={
                    ()=>(this.setState({
                        number: number+1
                    }))
                } >증가</button>
                <button onClick={onDecrement}>감소</button>
                <h4>Message : {message}</h4>
                <button onClick={handleClick}>포커스주기</button>
                <input type="text" name="message" value={message}
                    onChange={(event)=> {this.setState({
                        [event.target.name]:event.target.value
                    });
                }}
                className= {validate ?'success' :'failure'}
                ref={(ref)=>this.myInput=ref}
                onKeyDown={handlerKeyPress}
                />
                <ul>
                    {message_list}
                </ul>
            </>
        ); 
    }
}

MyComponents.defaultProps = {
    msg:'기본값555'
}
MyComponents.propTypes = {
    msg:PropTypes.string,
    age:PropTypes.number.isRequired
}

export default MyComponents;