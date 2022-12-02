import { useState, useEffect } from "react";
import { getProduct } from "../utilities/products";
import { useParams } from "react-router-dom";

const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState({});
  const { idItem } = useParams();
  useEffect(() => {
    getProduct(idItem).then((item) => {
      setProduct(item);
    });
  }, [idItem]);
  console.log({ product });
  return (
    <>
      <div className="item__card">
        <div className="item__card1">
          <h3>{product.nombre}</h3>
          <h4> ID: {product.id}</h4>
        </div>

        <img className="img__item__card" src={product.imagen} alt="" />
        <div className="item__card2">
          <h4> Stock: {product.stock}</h4>
          <h4> Categoria: {product.category}</h4>
        </div>
      </div>
    </>
  );
};

export default ItemDetailContainer;
