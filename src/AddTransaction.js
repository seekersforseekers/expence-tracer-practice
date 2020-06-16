import React,{useState} from 'react'

export const AddTransaction = () =>{
    let [text,setText]=useState('');
    let [amount,setAmount]=useState(0);
    return(
<div>
    <h3>Add New Transaction</h3>
    <form >
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