
// importing react from react app
// stateless components
import React from 'react';

// importing the person css file
import './Person.css';

// made a function to get the props
const person = (props) =>
{
 return (
 <div className="Person"> <p onClick={props.click}> i am {props.name} and i am {props.age} years old</p>
   <p> {props.children} </p>
   <input type="text"  onChange={props.changed} value={props.name}/> 
   </div>
 )
};

export default person;