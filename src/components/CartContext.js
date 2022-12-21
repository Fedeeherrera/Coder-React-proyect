import { createContext } from 'react'
import {useState} from 'react'

export const CartContext = createContext()

const CartContextProvider = (props) => {

    const [cartList] = useState([])



    return (
        <CartContext.Provider value = {cartList}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider