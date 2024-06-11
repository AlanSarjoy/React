import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router-dom'

const Category = () => {
  const {id} = useParams();

  const { products } = useProductByCategory(id);
  return (
    <ItemListContainer products={products}/>
  )
}

export default Category