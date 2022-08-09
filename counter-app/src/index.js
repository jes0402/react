import React from "react";
import {createRoot}  from "react-dom/client";
//import PrimeraApp from "./primeraApp"
import CounterApp from "./counterApp";
import "./index.css"



//const saludo = <h1>Hola mundo</h1>;

const divRoot = document.querySelector("#root");
const root = createRoot(divRoot)

//root.render (<PrimeraApp saludo="hola soy coco"  /> );
ReacDOM.render (<CounterApp/>, divRoot);