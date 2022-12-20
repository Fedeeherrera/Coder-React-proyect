import {useState} from 'react'
import addToCart from './CartContext'

const Counter = () => {

    const [contador, setContador] = useState(0)

    const onAdd = () => {
        addToCart()
    }

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

  return (
    <div>
        <nav>
            <button className = "buttonContador" onClick = {restar}> - </button>
            <button className = "buttonContador" onClick = {sumar}> + </button>
        </nav>
        <span className = "spanContador">{contador}</span>
        <button className = "buttonComprar">Comprar</button>
    </div>
  )
}

export default Counter