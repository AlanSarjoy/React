import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import "./CartWidget.css";




const CartWidget = () => {
  return (
    <div>
        <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: "1.3rem"}} />
        <span className='Span-carrito'>
            0
        </span>
    </div>
  )
}

export default CartWidget