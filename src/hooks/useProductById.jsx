import React from 'react'
import { getProductById } from '../services/products';

 export const useProductById = (id) => {
    const [products, setProducts] = React.useState({});

    React.useEffect(() =>{
        getProductById(id)
        .then((res) => {
            setProducts((res.data))
        })
        .catch((error) => {
            console.log(error);
        })
    }, [id]);
    
    return { products }
};

