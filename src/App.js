import React,{useState} from 'react';
import Parent from './Parent';
import './App.css';

function App() {
  let [number,setNumber] = useState(45);
  return (
    <div>
      <h1>Hello World</h1>,
      <Parent num = {number}/>
      <button onClick = {() => {setNumber(++number)}}>Update Number</button>
    </div>
    
    
  );
}

export default App;
