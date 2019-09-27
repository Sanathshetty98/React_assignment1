import React from 'react';
import './Comp.css';

const style ={
  font: 'inherit',
  textAlign : 'center',
  padding : '16px'
}

const userInput = (props) =>{
  return(
  <div className = 'UserInput'>
  <input style ={style} type="text" onChange={props.changed} value={props.name} onClick={props.click} />
  </div> 
  ) 
};

export default userInput;