import './Expenseitem.css';
import ExpenseDate from './ExpenseDate';

function Expenseitem(props){ 
    /* props k dwara data bhejenge*/
    const month=props.date.toLocalString('en-US', {month: 'long'});
    const year=props.date.getFullYear();
    const day=props.date.toLocalString('en-US', {day:'2-digit'});
    
    return (
        <div className="expense-item">
            <ExpenseDate/>
            <div className="expense-item__description">

                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>
    )

}

export default Expenseitem;