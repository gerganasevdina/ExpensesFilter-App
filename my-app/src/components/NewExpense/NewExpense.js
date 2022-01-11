import  React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const  NewExpense = (props) =>  {
    const [showExpenseForm, toggleShowExpenseForm] = useState(false);

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        toggleShowExpenseForm(false);
    };

    const showAddNewForm = () => {
        toggleShowExpenseForm(true);
    };

    const showAddNewButton = () => {
        toggleShowExpenseForm(false);
    };

    return (
     <div className="new-expense">
         {!showExpenseForm && (
             <button type ="submit" onClick={showAddNewForm}>
                 Add New Expense
             </button>
         )}
         {showExpenseForm && <ExpenseForm onCancel ={showAddNewButton} onSaveExpenseData={saveExpenseDateHandler} />}
    </div>
    
    );
};

export default NewExpense;