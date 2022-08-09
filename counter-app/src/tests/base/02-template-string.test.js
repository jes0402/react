import "@testing-library/jest-dom";

import {getSaludo} from '../../base/02-template-string'

describe('pruebas en 02-template-string.js', () =>{
    
    test("getSaludo debe retornar hola fernando" ,() => { 

        const nombre = "fernando"
        const saludo = getSaludo(nombre);
        expect(saludo).toBe("Hola " + nombre);

    
    })
    test("getSaludo debe hola Carlos si no hay argumento" ,() => { 

        const saludo = getSaludo();
        expect(saludo).toBe("Hola carlos");

    
    })
 })
