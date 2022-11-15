import { useState, useEffect } from "react";
import {getProduct} from '../utilities/products';
import {useParams} from 'react-router-dom'
//import {itemDetail} from '../container/itemDetail'

const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState({})
  const {idItem} = useParams();
  useEffect(()=> {
        getProduct(idItem).then(item => {
          setProduct(item)
      })
      }, [idItem])
      console.log({product})
  return (
    <div>
        <h3>{props.nombre}</h3>
        <h4> ID: {props.id}</h4>
        <img src={props.imagen} alt="" />
        <h4> Stock: {props.stock}</h4>
        <h4> Categoria: {props.category}</h4>
    </div>
  )
}

export default ItemDetailContainer