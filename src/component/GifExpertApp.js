import React, { Fragment, useState } from "react";
import { CategoryAdd } from "./CategoryAdd";
import { CategoryList } from "./CategoryList";

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Dragon Ball', 'Futbol'];

    const [ categories, setCategories ] = useState(['Dragon Ball']);

    return (
    <Fragment>
        <h2>GifExpertApp</h2>
        <CategoryAdd setCategories={setCategories}></CategoryAdd>
        <hr/>
        
        

        <ol>
            {
                categories.map((category)=>{
                   return <CategoryList key={category} category={category}></CategoryList>
                   //return <li key={category}> {category} </li>
                })
            }
        </ol>

    </Fragment>
)
};

export default GifExpertApp;