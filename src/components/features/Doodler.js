import React, { useRef, useState } from 'react';
import { atom, useAtom } from 'jotai';

const dotsAtom = atom([]);
const drawBoxWidth = 200;
const drawBoxHeight = 200;

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
  const [isDrawing, setIsDrawing] = useState(false);
  const [dots, setDots] = useAtom(dotsAtom);

  const svgRef = useRef(null);

  const handleStart = (event) => {
    event.preventDefault();
    setIsDrawing(true);
    const coords = getCoordinates(event);
    setDots([...dots, coords]);
  };

  const handleEnd = () => {
    setIsDrawing(false);
  };

  const handleMove = (event) => {
    if (isDrawing) {
      const coords = getCoordinates(event);
      setDots([...dots, coords]);
    }
  };

  const getCoordinates = (event) => {
    const rect = svgRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) * (drawBoxWidth / rect.width);
    const y = (event.clientY - rect.top) * (drawBoxHeight / rect.height);
    return [x, y];
  };

  return (
    <svg
      ref={svgRef}
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
