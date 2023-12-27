import React from 'react';
import { atom, useAtom } from 'jotai';

const dotsAtom = atom([]);
const drawingAtom = atom(false);

const handleStartAtom = atom(null, (get, set, event) => {
  set(drawingAtom, true);
  const coords = getCoordinates(event);
  set(dotsAtom, (prev) => [...prev, coords]);
});

const handleEndAtom = atom(null, (get, set) => {
  set(drawingAtom, false);
});

const handleMoveAtom = atom(null, (get, set, event) => {
  if (get(drawingAtom)) {
    const coords = getCoordinates(event);
    set(dotsAtom, (prev) => [...prev, coords]);
  }
});

const getCoordinates = (event) => {
  const rect = event.target.getBoundingClientRect();
  const x = (event.clientX - rect.left) * (drawBoxWidth / rect.width);
  const y = (event.clientY - rect.top) * (drawBoxHeight / rect.height);
  return [x, y];
};

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
  const [, handleEnd] = useAtom(handleEndAtom);
  const [, handleStart] = useAtom(handleStartAtom);
  const [, handleMove] = useAtom(handleMoveAtom);

  const drawBoxWidth = 200;
  const drawBoxHeight = 200;

  return (
    <svg
      width={drawBoxWidth}
      height={drawBoxHeight}
      viewBox={`0 0 ${drawBoxWidth} ${drawBoxHeight}`}
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onMouseMove={handleMove}
      onTouchStart={(e) => {
        e.preventDefault();
        handleStart(e.touches[0]);
      }}
      onTouchEnd={handleEnd}
      onTouchMove={(e) => {
        e.preventDefault();
        handleMove(e.touches[0]);
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
