import { useAtom } from 'jotai';
import { atomWithImmer } from 'jotai-immer';

const magic = {
  magic: {
    a: {
      b: "test",
        c: {
          status: "PENDING"
        },
    }
  }
};

const immerAtom = atomWithImmer(magic);

export default function Immer() {
  const [magicAtom, setAtomMagic] = useAtom(immerAtom);

  const updateMagic = () => {
    setAtomMagic(state => {
        state.magic.a.c.status = "READY";
        return state;
    });
  }

  return (
    <section>
      <h1>Updater</h1>
      <button onClick={updateMagic}>UPDATE</button>
      <p>Status: {magicAtom.magic.a.c.status}</p>
    </section>
  )
}
