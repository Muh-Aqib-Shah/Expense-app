import React,{ createContext, useReducer } from "react";
import TransactionReducer from './transReducer.js';

const initialTransactions=[
    
    {  desc: `Salary`, amount: 1500 },
    {   desc: `electricity-bill`, amount: -200 },
    {   desc: `utility-stuff`, amount: -400 },
    {   desc: `monthly-bonus`, amount: 500 },
    {   desc: `school-fee`, amount: -150 },
    {   desc: `crypto-income`, amount: 2300 },
    {  desc: `tax-paid`, amount: -250 },
]

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children})=> {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);
       

    
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
