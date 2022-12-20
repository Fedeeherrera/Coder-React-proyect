import React from 'react'
import {useContext} from 'react'
import {CartContext} from './CartContext'


const Cart = () => {
  const test = useContext(CartContext)
  console.log(test)
  return (
    <>
      <h1>Cart</h1>
      {
        test.length === 0 ? <h2>NO HAY PRODUCTOS EN EL CARRITO</h2>
        : test.map(item => <li> {item.name} </li>
        )
      }
    </>
  )
}

export default Cart