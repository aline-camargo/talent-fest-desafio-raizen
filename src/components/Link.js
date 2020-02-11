import React from 'react';

function Link(props) {
  return (
    <a
      onClick={props.handleClick}
      className={props.className}
    >
      {props.title}
    </a>
  )
}

export default Link;