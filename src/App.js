import React from 'react';
import './App.css';
import First from './components/First'
import Second from './components/Second';
import {MuliExport1} from './components/MuliExport';
function App() {
  return (
   <div>
     {/* <h1>Hello World</h1>
      <h2>Hello World</h2> */ }
      <h1>Hello World</h1>
      <First></First>
      <Second></Second>
      <MuliExport1></MuliExport1>
    </div>

  );
}

export default App;
