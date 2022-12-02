import { useEffect, useState } from "react";
import productosArray from "../utilities/products.js";
import customFetch from "../utilities/customFetch.js";
import Item from "../container/Item.js";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    if (idCategory === undefined) {
      customFetch(2000, productosArray)
        .then((response) => setDatos(response))
        .catch((err) => console.log(err));
    } else {
      customFetch(
        2000,
        productosArray.filter((productos) => productos.category === idCategory)
      )
        .then((response) => setDatos(response))
        .catch((err) => console.log(err));
    }
  }, [idCategory]);

  return (
    <div className="div__container__list">
      {datos.map((item) => (
        <Item
          nombre={item.nombre}
          key = {item.id}
          id={item.id}
          imagen={item.imagen}
          stock={item.stock}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;
