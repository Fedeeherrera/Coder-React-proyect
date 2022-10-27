import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'



function CartWidget() {
  return (
    <>
        <FontAwesomeIcon icon = { faCartShopping } className= "cart__icon"/>
        <FontAwesomeIcon icon = { faCircle  } className= "circle__icon"/>
        <p className='numberIcons'>3</p>
    </>
  )
}

export default CartWidget;

