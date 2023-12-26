import React from 'react';

export default function Theme({ appTheme, onThemeSwitchClick }) {
  const handleClick = () => {
    onThemeSwitchClick();
  };

  return (
    <section>
      <h1>Theme Toggle</h1>
      <button onClick={handleClick}>{appTheme === 'light' ? 'DARK' : 'LIGHT'}</button>
    </section>
  );
}
