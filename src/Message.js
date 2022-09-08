import React from 'react';


function Message({name}) {
  return (
    <div className='Message'>
      <header className='Message'>
        <h1>My name is {name}</h1>
        <h3>This is my first React app</h3>
      </header>
    </div>
  );
}

export default Message;