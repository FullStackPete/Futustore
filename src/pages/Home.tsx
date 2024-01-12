import { useEffect, useState } from "react";
import Card from "../components/Card";
import { productsType } from "../models/models";
import Navbar from "../components/Navbar";
import axios from "axios";



function Home() {
  const [products, setProducts] = useState<productsType[]>([]);
  const [error, setError] = useState<string | undefined>();

  //"https://api.escuelajs.co/api/v1/products/?offset=1&limit=5&categoryId=2"
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products/?categoryId=2")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      <Navbar />
      {error && (
        <p className="mt-28 text-2xl text-red-400">Error occured: {error}</p>
      )}
      <ul className="flex flex-col mt-16">
        <Card prodId={19} products={products}/>                

      </ul>
    </>
  );
}

export default Home;
