import React, {useState} from 'react';
import './App.css';
import Expenses from './Components/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';
// import AddExpense from './Components/NewExpense/AddExpense';
// import Todo from './Components/Todo';
// import MainPage from './MainPage';



function App() {
  const [data, setData] = useState([]);

  const handleAddData =(newData)=>{
    console.log("data func")
    setData([...data, newData])
    
  }
  return (
    <div className='main-app' >
      < NewExpense handleAddData={handleAddData}/>
       <Expenses data={data} />
     </div>
  );
}

export default App;
