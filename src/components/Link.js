import React from 'react';

function Link({ onClick, className, children}) {
  return (
    <a
      onClick={onClick}
      className={className}
    >
      {children}
    </a>
  )
}

export default Link;