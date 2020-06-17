import React from 'react';
import './App.css';
import {Header} from './Header'
import {Balance} from './Balance'
import {IncomeExpences} from './IncomeExpences'
import {TransactionList} from './TransactionList'
import {AddTransaction} from './AddTransaction'

import {GlobalProvider} from './Context/GlobalState';
function App() {
  return (
    <GlobalProvider>
    <div>
    <Header/>
    <div className="container">
    <Balance/>
    <IncomeExpences/>
    <TransactionList/>
    <AddTransaction/>
    </div>
   
    </div>
    </GlobalProvider>
  );
}
export default App;
