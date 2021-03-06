import React, { useState, useEffect, Fragment } from "react";

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const CategoryList = ({category})=> {
    
    const { data:images, loading } = useFetchGifs(category);
    
    return (
        <Fragment>
            <h3>{category}</h3>

            { loading && <p>Cargando...</p>}

            <div className="card-grid">
                {
                    images.map( (img) => {
                        return <GifGridItem 
                        key={img.id} 
                        {...img} 
                        />
                    })
                }
            </div>

        </Fragment>
            
    );
}