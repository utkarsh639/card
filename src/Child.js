import React from 'react';


function FormChild(props) {
  return (
      <div>
        <h2>Your email is  {props.email}</h2>
        <h2>Your passowrd is  {props.password}</h2>
      </div>

  )
  
}

export default FormChild;