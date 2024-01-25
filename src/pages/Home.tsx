import { useEffect, useState } from "react";
import Card from "../components/Card";
import { productsType } from "../models/models";
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
      {error && (
        <p className="mt-28 text-2xl text-red-400">Error occured: {error}</p>
      )}
      <ul className="flex flex-col mt-16">
        <Card
          text={{
            topText: "Stay in contact",
            bottomText:
              "Don't get disconnected. Buy our newest smartwatch - AyeWatch 45",
          }}
          cardColors={{
            background: "#E5E3E0",
            topColor: "#EBCCCF",
            bottomColor: "#5BB0CF",
          }}
          prodId={27}
          products={products}
        />
        <Card
          text={{
            topText: "Future is here",
            bottomText: "Experience the world again with AyeBeats",
          }}
          cardColors={{
            background: "#E5E3E0",
            topColor: "#B6C9C0",
            bottomColor: "#0D0A09",
          }}
          prodId={24}
          products={products}
        />
        <Card
          text={{
            topText: "Work with ease",
            bottomText: "Try our new notebook - AyeBook 16'",
          }}
          cardColors={{
            background: "#E5E3E0",
            topColor: "#FCC940",
            bottomColor: "#0D0A09",
          }}
          prodId={18}
          products={products}
        />
      </ul>
    </>
  );
}

export default Home;
