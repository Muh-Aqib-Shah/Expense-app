import React,{ createContext, useReducer } from "react";
import TransactionReducer from './transReducer.js';

const initialTransactions=[
    
    {id: 1, desc: `Salary`, amount: 1500 },
    { id: 2, desc: `electricity-bill`, amount: -200 },
    { id: 3, desc: `utility-stuff`, amount: -400 },
    { id: 4, desc: `monthly-bonus`, amount: 500 },
    { id: 5, desc: `school-fee`, amount: -150 },
    { id: 6, desc: `crypto-income`, amount: 2300 },
    { id: 7, desc: `tax-paid`, amount: -250 },
]

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children})=> {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);
       function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    
 function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: { 
                amount: transObj.amount, 
                desc: transObj.desc 
            },
        })
   
    }

    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction,
            delTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}
