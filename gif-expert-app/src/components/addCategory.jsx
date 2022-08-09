import React from 'react';
import {useState} from 'react';

export const AddCatergory = ({onNewcategory}) =>{

    const [inputValue, setInputValue] = useState([""]);

    const onInputChange = ({ target }) =>{
        setInputValue(target.value);
    }

    const onSubmit=(event) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1) return;

        //setCategories(categories => [inputValue, ...categories]);
    
        setInputValue("");
        onNewcategory(inputValue.trim() );
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='buscar gifs'
                 value={inputValue}
                onChange={onInputChange}
             />
        </form>
    )
}
