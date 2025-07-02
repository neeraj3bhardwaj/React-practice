import React, { useState } from 'react';
import UsingProps from './usingProps';

function App() {
  const [bgColor, setBgColor] = useState('white');

  const colors = ['red', 'blue', 'green', 'black'];

  return (
    <div
      className="w-screen h-screen flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex space-x-4 p-4 rounded-3xl bg-white shadow-md">
        {colors.map((color) => (
          <UsingProps key={color} color={color} setBgColor={setBgColor} />
        ))}
      </div>
    </div>
  );
}

export default App;
