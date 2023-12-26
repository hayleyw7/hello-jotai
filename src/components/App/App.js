import React from 'react';
import './App.css';
import { atom, useAtom } from 'jotai';
import Incrementer from '../Incrementer/Incrementer';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const counter = atom(0);
const theme = atom('dark');

export default function Page() {
  const [count, setCounter] = useAtom(counter);
  const [appTheme, setAppTheme] = useAtom(theme);

  const handleIncrementClick = () => setCounter(prev => prev + 1);
  const handleThemeSwitchClick = () => {
    setAppTheme(appTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${appTheme}`}>
      <header className="App-header">
        <Incrementer count={count} onClick={handleIncrementClick} />
        <ThemeSwitcher appTheme={appTheme} onClick={handleThemeSwitchClick} />
      </header>
    </div>
  );
}
