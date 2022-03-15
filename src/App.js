import React, { useState } from 'react';
import Tap from './Tap';

function App() {
  const initialStateTapOption = [1,2,3]
  const [tapOption, setTapOption] = useState(initialStateTapOption);
  const [actualTap, setActualTap] = useState(1);


  return (
    <div className="container">
      <div className="etiquetas">
        {tapOption.map(etiqueta => (
            <div className={`etiqueta ${actualTap === etiqueta ? "seleccionado" : null}`}
              onClick={() => setActualTap(etiqueta)}
              key={etiqueta}
            >Tab {etiqueta}</div>
        ))}
      </div>
      {actualTap === 1 && <Tap content="Tap 1 content is showing here"/>}
      {actualTap === 2 && <Tap content="Tap 2 content is showing here"/>}
      {actualTap === 3 && <Tap content="Tap 3 content is showing here"/>}
    </div>
  );
}

export default App;
