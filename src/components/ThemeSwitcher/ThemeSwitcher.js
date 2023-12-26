// ThemeSwitcher.js
import React from 'react';

export default function ThemeSwitcher({ appTheme, onClick }) {
  return (
    <section>
      <h1>Theme Switcher</h1>
      <button onClick={onClick}>{appTheme === 'light' ? 'DARK' : 'LIGHT'}</button>
    </section>
  );
}
