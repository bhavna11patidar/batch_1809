import React from 'react';
import './App.css';
import First from './components/First'
import Second from './components/Second';
import {MuliExport1} from './components/MuliExport';
import FunctiionalComp from './components/FunctiionalComp';
import Parent1 from './components/Parent1';
function App() {
  return (
   <div>
     {/* <h1>Hello World</h1>
      <h2>Hello World</h2> */ }
      <h1>Hello World</h1>
      <First></First>
      <Second></Second>
      <MuliExport1></MuliExport1>
      <FunctiionalComp title="Hello World" name="Bhavna"></FunctiionalComp>
      <Parent1 title="Hello World" name="Bhavna"/>
    </div>

  );
}

export default App;
