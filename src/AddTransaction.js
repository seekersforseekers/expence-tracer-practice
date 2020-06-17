import React,{useState,useContext} from 'react'
import {GlobalContext} from './Context/GlobalState';
export const AddTransaction = () =>{
    let [text,setText]=useState('');
    let [amount,setAmount]=useState(0);

    const {addTransaction}=useContext(GlobalContext);
    const onSubmit= e=>{
        e.preventDefault();
        
       const newTransaction ={
         id:Math.floor(Math.random()*100000000),
         text,
         amount:+amount
        }
addTransaction(newTransaction);
    }
   return(
<div>
    <h3>Add New Transaction</h3>
    <form onSubmit={onSubmit} >
        <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}  placeholder="Enter Text..."/>
        </div>
<div className="form-control">
    <label htmlFor="amount">  enter - for expences and enter + for Amount
    </label>
<input type="number" VALUE={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount.."></input>

</div>
<button className="btn">Add Transaction</button>
    </form>
</div>
    );
} 