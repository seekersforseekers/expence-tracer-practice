import React, { createContext, useReducer } from 'react'

import AppReducer from './AppReducer' 

const initialState ={ // it is destructring means it will retrieve objects value in this case it will get array value
    transactions:[]
}
//create context
export const GlobalContext=createContext(initialState);
//provider component 
export const GlobalProvider = ({children}) => { 
    const[state,dispatch]=useReducer(AppReducer,initialState);//dispatch will help to call action

  function deleteTransaction(id){
      dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id
      });
  }

  function addTransaction(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}
    return(<GlobalContext.Provider value={{ 
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
        }}>
        {children}
    </GlobalContext.Provider>);

}