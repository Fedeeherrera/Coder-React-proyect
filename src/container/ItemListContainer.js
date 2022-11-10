import {useEffect, useState} from 'react'
import productosArray from '../utilities/products.js'
import customFetch from '../utilities/customFetch.js'
import Item from './Item.js'


const ItemListContainer = () => {
  const [datos, setDatos] = useState([])

  useEffect( () => {
    customFetch(2000, productosArray)
    .then(response => setDatos(response))
    .catch(err => console.log(err))
  }, [])
  return (
    <>
      {
        datos.map(item => (
          <Item
          nombre={item.nombre}
          id={item.id}
          imagen={item.imagen}
          stock={item.stock}
          categoria={item.categoria}
          />
        ))
      }

    </>
  );
};

export default ItemListContainer;
