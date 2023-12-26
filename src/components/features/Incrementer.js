import React from 'react';

export default function Incrementer({ count, onIncrementClick }) {
  const onClick = () => {
    onIncrementClick();
  };

  return (
    <section>
      <h1>Incrementer: {count}</h1>
      <button onClick={onClick}>+1</button>
    </section>
  );
}
