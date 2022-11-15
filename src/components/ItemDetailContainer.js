import { useState, useEffect } from "react";
import {getProduct} from '../utilities/products';
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
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
        <h1>BIENVENIDO A ITEM DETAIL CONTAINER</h1>
    </div>
  )
}

export default ItemDetailContainer