import React,{useContext} from 'react'
import {GlobalContext} from './Context/GlobalState';

export const IncomeExpences = () => {
    const {transactions}=useContext(GlobalContext);
    const amounts = transactions.map(transaction =>transaction.amount);
    const income=amounts
    .filter(item=>item>0)
    .reduce((acc,item)=>(acc+=item),0)
    .toFixed(2);

    const expense=(
        amounts.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0)*-1
    ).toFixed(2);
    return(
        <div class="inc-exp-container">
            <div>
            <h4>Income</h4>
            <p className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expence</h4>
                <p  className="money sminus">{expense}</p>
            </div>
            </div>
    );
}