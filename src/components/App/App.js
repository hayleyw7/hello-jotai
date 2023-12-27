import './App.css';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import Incrementer from '../features/Incrementer';
import ThemeSwitcher from '../features/ThemeSwitcher';
import Lowercaser from '../features/Lowercaser';
import Doodler from '../features/Doodler';
// import ReadWrite from '../features/ReadWrite';
import Updater from '../features/Updater';

const counter = atomWithStorage('count', 0);
const theme = atomWithStorage('dark', true);

export default function Page() {
  const [count, setCounter] = useAtom(counter);
  const [appTheme, setAppTheme] = useAtom(theme);

  return (
    <div className={`App ${appTheme ? 'dark' : 'light'}`}>
      <header className="App-header">
        <Incrementer count={count} onIncrementClick={() => setCounter(prev => prev + 1)} setCounter={setCounter} />
        <ThemeSwitcher appTheme={appTheme} onThemeSwitchClick={() => setAppTheme(!appTheme)} />
        <Lowercaser />
        <Updater />
        <Doodler />
        {/* <ReadWrite /> */}
      </header>
    </div>
  );
}
