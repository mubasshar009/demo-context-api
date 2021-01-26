import React , {useContext}from 'react';
import ValueContext from './ValueContext';


function Child(props) {
    let value = React.useContext(ValueContext);
    
    return (
        <div>
            <h1>CHild Number {value}</h1>
        </div>
        

    );
}

export default Child;

