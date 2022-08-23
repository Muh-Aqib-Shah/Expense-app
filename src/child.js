
import React, { useContext,useState } from 'react';
import './child.css';
import { TransactionContext } from './transContext.js'



function Child() {

  let {transactions, addTransaction} = useContext(TransactionContext)
  console.log({transactions})
  const { delTransaction } = useContext(TransactionContext);
  let [newDesc,setDesc] = useState()
  let [newAmount,setAmount] = useState()
  console.log(newDesc,newAmount)
  const handleAddition = (event) => { 
    event.preventDefault();
    

    if (Number(newAmount) === 0) {
        alert("Please enter correct value");
        return false;
    }
    addTransaction({
        amount: Number(newAmount),
        desc: newDesc
    });

    setDesc('');
    setAmount(0)
 
}

const getIncome = () => {
  let income = 0;
  for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0)
          income = income + transactions[i].amount
  }
  return income;
}

const getExpense = () => {
  let expense = 0;
  for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0)
          expense += transactions[i].amount
          
  }
  return expense* -1;
}

    return(
        <div className="container"> 
          <h1 className="header">Expense App By Aqib</h1>
          <h2 className="balance">Balance <br/><div className='bln'> ${getIncome() - getExpense()}</div></h2>
         <div className='box1'><div className="income">Income<br/><span className='moneyp'>${getIncome()}</span></div><div className="expense">Expense<br/><span className='moneyn'>-${getExpense()}</span></div></div>
          <div className="Trans-ht">Transaction History</div>
          <hr/>
          <ul>
          {transactions.map((transObj, ind) => {
                    return (<li key={ind} className={`value ${transObj.amount>0? "positive": "negative"}`}>   
                        <span>{transObj.desc}</span>
                        <span>${transObj.amount}</span>
                    </li>
                    )
                })}
          </ul>
          <hr/>
          <div className="add-new">Add New Transaction</div>
          <hr/>
          <form onSubmit={handleAddition}>
            <div className='des'><label className="description">Enter Description</label></div>
            <br/>
            <input type="text" placeholder='Enter your description here' onChange={(e)=>{setDesc(e.target.value)}}></input>
            <br/>
            <div className='val'><label className="value">Enter value</label></div>
            <br/>
            <input type="number" placeholder='Enter your amount here' onChange={(e)=>{setAmount(e.target.value)}} ></input>
            <br/>
            <input type="submit"  className='btn'></input>
          </form>
          <ul></ul>
        </div>
       
    )
}
export default Child;



