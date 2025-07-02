import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <div className="w-screen h-screen flex items-center justify-center" style={{ backgroundColor: bgColor }}>
      <div className="flex space-x-4 p-4 rounded-3xl bg-white shadow-md">
        <button
          className="rounded-full px-4 py-2 text-white"
          onClick={() => setBgColor('red')}
          style={{ backgroundColor: 'red' }}
        >
          Red
        </button>
        <button
          className="rounded-full px-4 py-2 text-white"
          onClick={() => setBgColor('green')}
          style={{ backgroundColor: 'green' }}
        >
          Green
        </button>
        <button
          className="rounded-full px-4 py-2 text-white"
          onClick={() => setBgColor('blue')}
          style={{ backgroundColor: 'blue' }}
        >
          Blue
        </button>
        <button
          className="rounded-full px-4 py-2 text-white"
          onClick={() => setBgColor('black')}
          style={{ backgroundColor: 'black' }}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
