import React,{useState} from 'react';
import Parent from './Parent';
import './App.css';
import ValueContext from './ValueContext';


function App() {
  //let [number,setNumber] = useState(45);
  let value = useState(48);
  //value[0] = state
  //value[1] = function 
  return (
    <ValueContext.Provider value = {value}>
    
      <div>
        <h1>Hello World</h1>,
        <Parent/>
      </div>
    </ValueContext.Provider>

    
    
  );
}

export default App;
