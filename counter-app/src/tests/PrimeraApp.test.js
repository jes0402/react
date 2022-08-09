import React from 'react';
import { shallow } from 'enzyme'
import PrimeraApp from '../PrimeraApp'
import '@testing-library/jest-dom';


describe ("pruebas en <PrimeraApp/>", () => {
    test ("debe de mostrar <PrimeraApp/> correctamente", () => {
      
        const saludo = "Hola soy coco";

        const wrapper = shallow(<PrimeraApp saludo={ saludo} />);

        expect(wrapper).toMatchSnapshot();

    })
 });
 test ("debe de mostrar el subtitulo enviado por props", () => {
      
    const saludo = "Hola soy coco";
    const subTitulo = "Hola soy subtitulo";

    const wrapper = shallow(
    <PrimeraApp
         saludo={ saludo } 
         subtitulo={ subTitulo } 
    />
    );
    const textoParrafo = wrapper.find("p").text()
     expect(textoParrafo).toBe(subTitulo);

})