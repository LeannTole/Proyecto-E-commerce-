import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getProducts } from "../mock/Fakedata";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [detalle, setdetalle] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getProducts()
      .then((res) => setdetalle(res.find((item) => item.id === id)))
      .catch((error) => console.log(error));
  }, [id]);

  return <ItemDetail detalle={detalle} />;
};

export default ItemDetailContainer;
