import React from "react";
import PropTypes from "prop-types";
//import React, { Fragment } from "react";


//funcional components

const PrimeraApp = ( {saludo, subtitulo}) => {

    //const saludo = "Hola mundo HTML";

    //const saludo2 = {
    //    nombre: "fernando",
   //     edad:34
    //}

    return (
    //<Fragment >
    <>
        <h1> {saludo} </h1>
      {/* <pre> {JSON.stringify (saludo2)} </pre>*/} 
        <h1>Hola mundo</h1>
        <p>{subtitulo}</p>
    </>
    
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: "soy un subtitulo",
}

export default PrimeraApp;