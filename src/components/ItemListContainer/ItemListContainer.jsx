import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "./ItemListContainer.css";
import { Link } from 'react-router-dom';


const ItemListContainer = ({ products }) => {

  return products.map((product) => {
    return(
        <div className='ItemListContianer'>
          <Card  key={product.id} style={{ width: '18rem', margin: 10, }}>
          <Card.Img variant="top" src={product.thumbnail} />
          <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Link to={`/item/${product.id}`}>Ir a detalle</Link>
          </Card.Body>
        </Card>
        </div>

    )
  })
}

export default ItemListContainer