import React from 'react';

function ColorButton({ color, setBgColor }) {
  return (
    <button
      className="rounded-full px-4 py-2 text-white capitalize"
      onClick={() => setBgColor(color)}
      style={{ backgroundColor: color }}
    >
      {color}
    </button>
  );
}

export default ColorButton;
