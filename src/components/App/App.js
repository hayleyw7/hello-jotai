import './App.css';
import { atom, useAtom } from 'jotai';

const counter = atom(0);
const theme = atom('dark');

export default function Page() {
  const [count, setCounter] = useAtom(counter);
  const [appTheme, setAppTheme] = useAtom(theme);

  const onClick = () => setCounter(prev => prev + 1);

  const handleClick = () => {
    setAppTheme(appTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${appTheme}`}>
      <header className="App-header">
        <section>
          <h1>Incrementer: {count}</h1>
          <button onClick={onClick}>+1</button>
        </section>

        <section>
          <h1>Theme Switcher</h1>
          <button onClick={handleClick}>{appTheme === 'light' ? 'DARK' : 'LIGHT'}</button>
        </section>
      </header>
    </div>
  );
}
