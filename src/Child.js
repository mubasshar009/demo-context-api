import React , {useContext}from 'react';
import ValueContext from './ValueContext';


function Child(props) {
    let value = React.useContext(ValueContext);
    console.log("value",value);
    let updateValue = value[1]
    return (
        <div>
            <h1>CHild Number {value}</h1>
            <button onClick = {() => {updateValue(++value[0])}}>Update Value</button>
        </div>
        

    );
}

export default Child;

