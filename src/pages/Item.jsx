import React from 'react'
import { useProductById } from '../hooks/useProductById'
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/IteamDetailContainer/ItemDetailContainer';

const Item = () => {
  const {id} = useParams();
  const { product } = useProductById(id);
  return (
    <ItemDetailContainer product={ product } />  
  )
}

export default Item