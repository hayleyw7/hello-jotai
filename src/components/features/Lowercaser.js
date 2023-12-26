import { atom, useAtom } from 'jotai';

const textAtom = atom('edit me');

export default function Lowercaser() {
  const [text, setText] = useAtom(textAtom);

  const handleChange = (e) => {
    const newValue = e.target.value.toLowerCase(); // Convert to lowercase
    setText(newValue);
  };

  return (
    <section>
      <h1>Lowercaser</h1>
      <input value={text.toUpperCase()} onChange={handleChange} />
      <p>{text}</p>
    </section>
  );
}
