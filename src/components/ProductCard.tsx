import { useState, useEffect, useRef } from "react";
import ImageGallery from "react-image-gallery";
import { productsType } from "../models/models";
import Icon from "../components/Icon";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductCard() {

  const [itemCounter, setItemCounter] = useState<number>(1);
  const [product, setProduct] = useState<productsType>();
  const [imagesArray, setImagesArray] =
    useState<{ original: string; thumbnail: string }[]>();
  const [error, setError] = useState();
  const { id } = useParams();  
  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        const images = [
          {
            original: res.data.images[0],
            thumbnail: res.data.images[0],
            thumbnailClass: "",
          },
          { original: res.data.images[1], thumbnail: res.data.images[1] },
          { original: res.data.images[2], thumbnail: res.data.images[2] },
        ];
        setImagesArray(images);
        console.log(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  return (
    <>
      <div className="mt-20">
        {imagesArray && (
          <ImageGallery
            items={imagesArray}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={false}
          />
        )}
        <div className="text-2xl m-2 font-medium">{product?.title}</div>
        <div className="flex flex-row justify-between border-y-2 bg-slate-200">
          <div className="flex flex-col items-center text-2xl m-4">
            {product?.price}$,-
            <div className="text-gray-400 text-sm">vat included</div>
          </div>
          <div id="cart" className="flex items-center">
            Add to cart
            <div className="flex flex-row border border-black rounded-md ml-2 bg-white">
              <button
                onClick={() => {
                  if (itemCounter > 1) {
                    setItemCounter((prev) => prev - 1);
                  }
                }}
                className="px-2"
              >
                -
              </button>
              <input
                className=" border-black h-8 w-12 border-x text-center"
                value={itemCounter}
              />
              <button
                className="px-2"
                onClick={() => {
                  setItemCounter((prev) => prev + 1);
                }}
              >
                +
              </button>
            </div>
            <button
              className="border border-black rounded-md p-2 m-2 bg-white"              
            >
              <Icon
                name="shopping_cart"
                className="flex items-center justify-center "
              />
            </button>
          </div>
        </div>
        <div id="description" className="m-4 text-justify flex-col">
          <p className="text-2xl font-semibold my-4">Description</p>
          {product?.description}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
