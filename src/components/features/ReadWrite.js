import { atom, useAtom } from "jotai";

const drawBoxWidth = 400;
const drawBoxHeight = 200;
const dotsAtom = atom([]);
const drawingAtom = atom(false);

const handleMouseDownAtom = atom(
  null,
  (get, set) => {
    set(drawingAtom, true);
  }
);

const handleMouseUpAtom = atom(null, (get, set) => {
  set(drawingAtom, false);
});

const handleMouseMoveAtom = atom(
  (get) => get(dotsAtom),
  (get, set, update) => {
    if (get(drawingAtom)) {
      set(dotsAtom, (prev) => [...prev, update]);
    }
  }
);

const SvgDots = () => {
  const [dots] = useAtom(handleMouseMoveAtom);
  return (
    <g>
      {dots.map(([x, y], index) => (
        <circle cx={x} cy={y} r="2" fill="#aaa" key={index} />
      ))}
    </g>
  );
};

const SvgRoot = () => {
  const [, handleMouseUp] = useAtom(handleMouseUpAtom);
  const [, handleMouseDown] = useAtom(handleMouseDownAtom);
  const [, handleMouseMove] = useAtom(handleMouseMoveAtom);
  return (
    <svg
      width={drawBoxWidth}
      height={drawBoxHeight}
      viewBox={`0 0 ${drawBoxWidth} ${drawBoxHeight}`} // Match the viewBox to the drawBox dimensions
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={(e) => {
        // Calculate the coordinates within the drawing area
        const boundingBox = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - boundingBox.left) * (drawBoxWidth / boundingBox.width);
        const y = (e.clientY - boundingBox.top) * (drawBoxHeight / boundingBox.height);
        handleMouseMove([x, y]);
      }}
    >
      <rect width="100%" height="100%" fill="#eee" />
      <SvgDots />
    </svg>
  );
};

export default function ReadWrite() {
  return (
    <section>
      <h1>ReadWrite</h1>
      <SvgRoot />
    </section>
  );
}
