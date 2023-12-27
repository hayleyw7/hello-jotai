export default function Incrementer({ count, onIncrementClick, setCounter }) {
  const onAddOneClick = () => {
    onIncrementClick(prev => prev + 1);
  };

  const onResetClick = () => {
    setCounter(0);
  };

  return (
    <section>
      <h1>Incrementer: {count}</h1>
      <button onClick={onAddOneClick}>ADD 1</button>
      <button onClick={onResetClick}>RESET</button>
    </section>
  );
}
