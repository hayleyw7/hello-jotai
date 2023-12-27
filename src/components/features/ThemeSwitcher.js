export default function Theme({ appTheme, onThemeSwitchClick }) {
  const handleClick = () => {
    onThemeSwitchClick();
  };

  return (
    <section>
      <h1>Theme Switcher</h1>
      <button onClick={handleClick}>{appTheme === 'dark' ? 'LIGHT' : 'DARK'}</button>
    </section>
  );
}
