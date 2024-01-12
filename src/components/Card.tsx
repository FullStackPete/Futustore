import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import { CardProps } from "../models/models";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function Card({ products, prodId }: CardProps) {
  const newArray = products
    .filter((product) => product.id == prodId)
    .map((product) => {return [
        {            
          original: product.images[0],
        },
        {
          original: product.images[1],
        },
        { original: product.images[2] },
    ]});

  return (
    <>
      {products
        .filter((product) => product.id == prodId)
        .map((product) => (
          <li key={product.id} className="bg-[#E5E3E0]">
              <ImageGallery items={newArray[0]} />
            <div className="flex flex-col my-4">
              <div className="flex flex-row justify-between">
                <div className="border border-[#B6C9C0] w-60 h-16 bg-[#B6C9C0] rounded-r-xl text-black text-3xl flex items-center">
                  <p className="m-2">Future is here</p>
                </div>
                <div className="flex items-center justify-center ml-8 text-lg p-2">
                  <Link
                    className="flex items-center hover:animate-pulse font-semibold"
                    to="/cart"
                  >
                    Discover now <Icon className="ml-2 " name="East"></Icon>
                  </Link>
                </div>
              </div>
              <div className="w-80 bg-[#0D0A09] text-[#E5E3E0] text-xl rounded-r-xl">
                <p className="m-2">
                  Experience the world again with our futuristic AyeBeats
                </p>
              </div>
            </div>
          </li>
        ))}
    </>
  );
}

export default Card;
