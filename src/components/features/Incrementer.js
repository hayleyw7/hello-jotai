import { useAtom } from 'jotai';
import { counter } from '../App/App';

export default function Incrementer({ count, onIncrementClick }) {
  const onClick = () => {
    onIncrementClick(prev => prev + 1);
  };

  return (
    <section>
      <h1>Incrementer: {count}</h1>
      <button onClick={onClick}>+1</button>
    </section>
  );
}
