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
import FunctionsWithState from './components/main/FunctionsWithState'
import FormInputs from './components/main/FormInputs';
import Register from "./components/main/Register";
import Hooks from './components/main/Hooks';
import RegisterWithHooks from "./components/main/RegisterWithHooks";
import CounterComp1 from './components/main/CounterComp1';
import CounterComp2 from './components/main/CounterComp2';
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
      <Route exact path="/funwithstate" component={FunctionsWithState}></Route>
      <Route exact path="/form-input" component={FormInputs}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/hooks" component={Hooks}/>
      <Route exact path="/counter-comp1" component={CounterComp1}/>
      <Route exact path="/counter-comp2" component={CounterComp2}/>
      </Router>
    </div>

  );
}

export default App;
