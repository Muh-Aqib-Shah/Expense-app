
const TransactionReducer =  (state, action)=>{
    switch(action.type){
        case "ADD_TRANSACTION": {
            return [action.payload , ...state]
        }

        default:
             return state;
      }
        
    }
export default TransactionReducer;



// return (<li  className={`value ${transObj.amount>0? "positive": "negative"}`}>
//<span>{transObj.desc}</span>
//<span>${transObj.amount}</span>
//<button className="delete-btn"
//onClick={() => delTransaction()}>
//X
//</button>
//</li>
//)

