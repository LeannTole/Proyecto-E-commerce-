import { useEffect, useState } from "react";
import ItemList from "./itemlist";
import "../App.css";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { type } = useParams();

  useEffect(() => {
    setLoading(true);

    const prodCollection = type
      ? query(collection(db, "productos"), where("category", "==", type))
      : collection(db, "productos");

    getDocs(prodCollection)
      .then((res) => {
        const list = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [type]);

  return (
    <>
      {loading ? (
        <LoaderComponent
          texto={type ? "Cargando categoría..." : "Cargando productos..."}
        />
      ) : (
        <div>
          <ItemList data={data} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
