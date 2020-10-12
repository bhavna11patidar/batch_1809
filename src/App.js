import React from 'react';
import './App.css';
import First from './components/First'
import Second from './components/Second';
import {MuliExport1} from './components/MuliExport';
import FunctiionalComp from './components/FunctiionalComp';
import Parent1 from './components/Parent1';

import Header from './components/main/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/main/Home';
import About from './components/main/About';
import Contact from './components/main/Contact';
import StateExample from './components/main/StateExample';
function App() {
  return (
   <div>
     {/* <h1>Hello World</h1>
      <h2>Hello World</h2> 
      <h1>Hello World</h1>
      <First></First>
      <Second></Second>
      <MuliExport1></MuliExport1>
      <FunctiionalComp title="Hello World" name="Bhavna"></FunctiionalComp>
      <Parent1 title="Hello World" name="Bhavna"/>
      */ }
      <Router>
      <Header></Header>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/state" component={StateExample}></Route>
      </Router>
    </div>

  );
}

export default App;
