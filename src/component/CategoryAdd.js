import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types';

export const CategoryAdd = ({setCategories})=> {

    //useState(); <= un useState undefined will throw an error
    const [inputValue, setInputValue] = useState('');

    const handlerInputChange = (e)=>{
        setInputValue(e.target.value);
    };
    
    const handlerSubmit = (e)=>{
        e.preventDefault();
        
        setCategories(categories=> [inputValue, ...categories]);
        setInputValue('');
    }

    return (
        <form onSubmit={handlerSubmit}>
            <input type="text" value={inputValue} onChange={handlerInputChange}/>
        </form>
    );
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}