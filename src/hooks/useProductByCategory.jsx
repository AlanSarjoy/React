import React from 'react'
import { getProductByCategory } from '../services/products';

const useProductByCategory = () => {
    const [products, setProducts] = Reac.useState([]);

    React.useEffect(() => {
        getProductByCategory(category)
        .then((res) => {
            setProducts(res.data.category);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [category])

    return { products }
}

