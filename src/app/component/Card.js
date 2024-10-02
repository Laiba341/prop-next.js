import React from 'react'

const Card = (props) => {
  return (
    <div>
        
         <h1><li> Name : {props.name} </li></h1> 
        <h1><li>Rollno : {props.rollno}</li></h1> 
         <h1><li>Day : {props.day}</li></h1>
         <h1><li>Timing :  {props.timing}</li></h1>
        
    </div>
  )
}

export default Card

