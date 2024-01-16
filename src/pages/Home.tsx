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
      .get("https://api.escuelajs.co/api/v1/categories/2/products")
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
        <Card cardColors={{background:"#E5E3E0",topColor:"#B6C9C0",bottomColor:"#0D0A09"}} prodId={19} products={products}/>                
        <Card cardColors={{background:"#E5E3E0",topColor:"#B6C9C0",bottomColor:"#0D0A09"}} prodId={20} products={products}/>
        <Card cardColors={{background:"#E5E3E0",topColor:"#B6C9C0",bottomColor:"#0D0A09"}} prodId={21} products={products}/>
      </ul>
    </>
  );
}

export default Home;
