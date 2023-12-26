import React from 'react';
import { atom, useAtom } from 'jotai';

const dotsAtom = atom([]);
const drawingAtom = atom(false);

const handleMouseDownAtom = atom(null, (get, set) => {
  set(drawingAtom, true);
});

const handleMouseUpAtom = atom(null, (get, set) => {
  set(drawingAtom, false);
});

const handleMouseMoveAtom = atom(null, (get, set, update) => {
  if (get(drawingAtom)) {
    set(dotsAtom, (prev) => [...prev, update]);
  }
});

const SvgDots = () => {
  const [dots] = useAtom(dotsAtom);
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

  const drawBoxWidth = 400;
  const drawBoxHeight = 200;

  return (
    <svg
      width={drawBoxWidth}
      height={drawBoxHeight}
      viewBox={`0 0 ${drawBoxWidth} ${drawBoxHeight}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={(e) => {
        const rect = e.target.getBoundingClientRect();
        const x = (e.clientX - rect.left) * (drawBoxWidth / rect.width);
        const y = (e.clientY - rect.top) * (drawBoxHeight / rect.height);
        handleMouseMove([x, y]);
      }}
    >
      <rect width={drawBoxWidth} height={drawBoxHeight} fill="#eee" />
      <SvgDots />
    </svg>
  );
};

export default function Doodler() {
  return (
    <section>
      <h1>Doodler</h1>
      <SvgRoot />
    </section>
  );
}
