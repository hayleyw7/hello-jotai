import './App.css';
import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import Incrementer from '../features/Incrementer';
import ThemeSwitcher from '../features/ThemeSwitcher';
import Lowercaser from '../features/Lowercaser';
import WriteOnly from '../features/WriteOnly';

const counter = atomWithStorage('count', 0);
const theme = atomWithStorage('dark', false);

export default function Page() {
  const [count, setCounter] = useAtom(counter);
  const [appTheme, setAppTheme] = useAtom(theme);

  return (
    <div className={`App ${appTheme}`}>
      <header className="App-header">
        <Incrementer count={count} onIncrementClick={() => setCounter(prev => prev + 1)} />
        <ThemeSwitcher appTheme={appTheme} onThemeSwitchClick={() => setAppTheme(appTheme === 'light' ? 'dark' : 'light')} />
        <Lowercaser />
        <WriteOnly />
      </header>
    </div>
  );
}
