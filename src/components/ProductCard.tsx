import { useState, useEffect, useContext } from "react";
import ImageGallery from "react-image-gallery";
import { productsType, cartItemType } from "../models/models";
import Icon from "../components/Icon";
import { useParams } from "react-router-dom";
import axios from "axios";
import ShoppingCartContext from "../context/ShoppingCartContext";
import Loader from "./Loader";
import QuantityInput from "./QuantityInput";
import { CartContextValue } from "../context/ShoppingCartProvider";

function ProductCard() {
  const [itemCounter, setItemCounter] = useState<number>(1);
  const [product, setProduct] = useState<productsType>();
  const [cartItems, setCartItems] = useContext<CartContextValue | undefined>(
    ShoppingCartContext
  )!;
  const [imagesArray, setImagesArray] =
    useState<{ original: string; thumbnail: string }[]>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

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
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function addToCart(id: number) {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => (item as cartItemType).product?.id === id
    );

    if (existingCartItemIndex !== -1) {
      // If the item already exists in cartItems
      const updatedCartItems = [...cartItems];
      if (
        updatedCartItems[existingCartItemIndex].quantity + itemCounter >=
        10
      ) {
        (updatedCartItems[existingCartItemIndex] as cartItemType).quantity = 10;
      } else if (
        updatedCartItems[existingCartItemIndex].quantity + itemCounter <
        10
      ) {
        (updatedCartItems[existingCartItemIndex] as cartItemType).quantity +=
          itemCounter;
      }
      setCartItems(updatedCartItems);
    } else {
      // If the item does not exist in cartItems
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { product, quantity: itemCounter },
      ]);
    }
    console.log(cartItems);
  }

  if (error) return <p className="mt-28">A network error occured!</p>;
  if (loading) return <Loader />;
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
              <QuantityInput
                decreaseNumber={() => {
                  if (itemCounter > 1) {
                    setItemCounter((prev) => prev - 1);
                  }
                }}
                inputValue={itemCounter}
                increaseNumber={() => {
                  if (itemCounter < 10) setItemCounter((prev) => prev + 1);
                }}
              />
            </div>
            <button
              className="border border-black rounded-md p-2 m-2 bg-white"
              onClick={() => addToCart(product!.id)}
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
