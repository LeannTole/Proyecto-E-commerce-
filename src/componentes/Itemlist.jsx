import React from "react";
import Item from "./Item";
import "../App.css";
const ItemList = ({ data }) => {
  return (
    <div className="div-cards">
      {data.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default ItemList;
