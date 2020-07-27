import React,{useState,useContext} from 'react'
import {GlobalContext} from './Context/GlobalState';
import { getElementError } from '@testing-library/react';
export const AddTransaction = () =>{
    let [text,setText]=useState('');
    let [amount,setAmount]=useState(0);

    const {addTransaction}=useContext(GlobalContext);
    const onSubmit= e=>{
        e.target.text='';
        e.target.amount="0";
        e.preventDefault();
       
        
       const newTransaction ={
        
         id:Math.floor(Math.random()*100000000),
         text,
         amount:+amount
        }
       
addTransaction(newTransaction);

    }
   
   return(
<>

    <h3>Add New Transaction</h3>
 
    <form onSubmit={onSubmit} >
     <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text"  value={text} id="in1" onChange={(e)=>setText(e.target.value)}  placeholder="Enter Text..." required/>
        </div>
<div className="form-control">
    <label htmlFor="amount">  enter Nagative value as expences and enter positive value  for Amount
    </label>
<input type="number" id="input1" VALUE={amount} id="in2" onChange={(e)=>setAmount(e.target.value)}  placeholder="Enter amount.." required />

</div>

<button type="submit"   className="btn" >Add Transaction</button>
    </form>
 
</>
    );
} 