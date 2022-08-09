import "@testing-library/jest-dom";

import {retornaArreglo} from '../../base/07-deses-arr'


describe("prueba en desestructuracion", () =>{
    
    test("debe de retornar un string y un numero", () =>{
       const [ letras, numeros ] = retornaArreglo();

       expect(numeros).toBe(123);
       expect(typeof numeros).toBe("number")

       expect(letras).toBe("ABC");
       expect(typeof letras).toBe("string")

    })
    


 })  