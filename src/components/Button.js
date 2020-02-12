import React from 'react';

function Button(props) {
  return (
    <button
      onClick={() => { console.log("oi"); props.handleClick()}}
      className={props.className}
    >
      {props.title}
    </button>
  )
}

export default Button;