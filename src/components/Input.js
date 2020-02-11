import React from 'react';

function Input(props) {
  return (
    <input
      className={props.className}
      type={props.type}
    >
      {props.title}
    </input>
  )
}

export default Input;