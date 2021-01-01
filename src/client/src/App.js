import React from 'react';
import { ipcRenderer } from 'electron'

function App() {
  return (
    <div>
      <button onClick={() => {
        ipcRenderer.invoke('hide-window');
      }}>x</button>
    </div>
  );
}

export default App;
