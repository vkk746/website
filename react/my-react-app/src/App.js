


import Expenseitem  from "./Component/Expenseitem";
function App(){
  let expense=[ {
    id:'e1',
    title:'school Fee',
    amount:250,
    date:new Date(2021, 5, 12)
  },
  {
    id:'e1',
    title:'school Fee',
    amount:250,
    date:new Date(2021, 5, 12)
  },
  {
    id:'e1',
    title:'school Fee',
    amount:250,
    date:new Date(2021, 5, 12)
  }
];
  return (
    <div>
      <h2>lets get started</h2>
      
      <Expenseitem date={expense[0].title}  title={expense[0].date} amount={expense[0].amount}></Expenseitem> 
      <Expenseitem date={expense[1].title}  title={expense[1].date} amount={expense[1].amount}></Expenseitem> 
      <Expenseitem date={expense[2].title}  title={expense[2].date} amount={expense.amount}></Expenseitem>  
    </div>
          
  );
}

export default App;