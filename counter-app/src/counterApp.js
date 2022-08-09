import React, { useState} from "react";
import PropTypes from "prop-types";


const CounterApp = ({valor = 10}) => {

    //hooks
    const [counter, setCounter] = useState(valor);

    //funcion del button
    const handleAdd = () => {
        setCounter(counter + 1);
    }
    const handleReset = () => {
        setCounter(valor);
    }
    const handleSubtract  = () => {
        setCounter(counter - 1);
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2> {counter} </h2>
            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleReset}> Reset </button>
            <button onClick={handleSubtract}> -1 </button>
        </>

    );
}


CounterApp.propTypes = {
    valor: PropTypes.number.isRequired
}



export default CounterApp;