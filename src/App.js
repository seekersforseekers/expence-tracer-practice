import React from 'react';
import './App.css';
import {Header} from './Header'
import {Balance} from './Balance'
import {IncomeExpences} from './IncomeExpences'
function App() {
  return (
    <div className="App">
    <Header/>
    <Balance/>
    <IncomeExpences/>
    </div>
  );
}
export default App;
