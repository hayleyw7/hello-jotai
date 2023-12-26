import React from 'react';

export default function ThemeSwitcher({ appTheme, onThemeSwitchClick }) {
  const handleClick = () => {
    onThemeSwitchClick();
  };

  return (
    <section>
      <h1>Theme Switcher</h1>
      <button onClick={handleClick}>{appTheme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}</button>
    </section>
  );
}
