import React from 'react';
import './Comp.css';

const userOutput = (props) => {
  return(
    <div className = 'UserInput'>
    <h1> Hi, I'm {props.name} </h1>
    <p> A computer is a machine that can be instructed to carry out sequences of arithmetic or logical operations automatically via computer programming. </p>
    <p>  Conventionally, a modern computer consists of at least one processing element, typically a central processing unit (CPU) in the form of a metal-oxide-semiconductor (MOS) microprocessor, along with some type of computer memory</p>
    </div>
  )
};

export default userOutput;