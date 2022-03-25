import { useEffect, useState } from "react"
import { getGifs } from "../helpers/helper";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    
    useEffect(()=>{
        getGifs(category)
        .then(res=>{
            setState({
                data: res,
                loading: false
            })
        })
    },[category] );

    return state;
}
