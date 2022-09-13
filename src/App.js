import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function App() {

  const count = useSelector((store)=> store.counter.count);
  const [finalValue, setFinalValue] = useState(0);

  const dispatch = useDispatch();

  return (
    <div className="App">

      <h1>count: {count}</h1>

      <input 
         type="number"
         value={finalValue}
         placeholder='Enter amount'
         onChange={(e)=> setFinalValue(Number(e.target.value)) }
         />

      <br></br>
      <button onClick={() => dispatch({type:"INCREMENT", payload:finalValue })}>INCREMENT</button>
      <br></br>
      <button onClick={() => dispatch({type:"DECREMENT", payload:finalValue })}>DECREMENT</button>
      <br></br>
      <button onClick={() => dispatch({type:"MULTIPLY", payload:finalValue })}>MULTIPLY</button>  
      <br></br>     
      <button onClick={() => dispatch({type:"DIVIDE", payload: finalValue })}>DIVIDE</button>   

    </div>
  );
}

export default App;
