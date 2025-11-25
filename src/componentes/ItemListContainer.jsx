import { useEffect, useState } from "react";
import { getProducts } from "../mock/Fakedata";
import ItemList from "./itemlist";
import "../App.css";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    getProducts()
      .then((res) => {
        if (type) {
          setData(res.filter((item) => item.category === type));
        } else {
          setData(res);
        }
      })
      .catch((error) => console.log(error));
  }, [type]);

  return (
    <div>
      <h1 className="text-success">{mensaje}</h1>
      <ItemList data={data} />
    </div>
  );
};
export default ItemListContainer;
