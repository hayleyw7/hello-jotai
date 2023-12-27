export default function ThemeSwitcher({ appTheme, onThemeSwitchClick }) {
  const handleClick = () => {
    onThemeSwitchClick();
  };

  return (
    <section>
      <h1>Theme Switcher</h1>
      <button onClick={handleClick}>{appTheme ? 'DARK' : 'LIGHT'}</button>
    </section>
  );
}
