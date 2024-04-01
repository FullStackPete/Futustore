import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import { CardProps } from "../models/models";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function Card({ products, prodId, cardColors, text }: CardProps) {
  if (products === null) return;
  const newArray: ReactImageGalleryItem[][] = products
    .filter((product) => product.id == prodId)
    .map((product) => {
      return [
        {
          original: product.images[0],
        },
        {
          original: product.images[1],
        },
        { original: product.images[2] },
      ];
    });

  return (
    <>
      {products
        .filter((product) => product.id == prodId)
        .map((product) => (
          <li
            key={product.id}
            style={{ background: cardColors.background }}
            className=" md:flex-row md:flex md:items-center md:w-4/5 lg:w-3/5 md:rounded-3xl md:bg-[#FFFFFF] md:m-4"
          >
            <Link to={`/Futustore/product/${product.id}`}>
              <ImageGallery
                showNav={false}
                additionalClass="md:py-4 md:pl-4 lg:py-6 lg:pl-6 md:max-w-[420px] lg:max-w-[720px]"
                items={newArray[0]}
                showFullscreenButton={false}
                slideDuration={1500}
                slideInterval={5000}
                showPlayButton={false}
                autoPlay={true}
              />
            </Link>
            <div className="flex flex-col my-4">
              <div className="flex flex-row md:flex-col justify-between">
                <div className="hidden md:flex md:max-w-96 text-2xl m-4 font-semibold text-center">
                  {product.title}
                </div>
                <div
                  style={{
                    background: cardColors.topColor,
                    border: cardColors.topColor,
                  }}
                  className={`border p-1 rounded-r-xl text-black flex items-center w-fit`}
                >
                  <p className="m-2 text-xl md:text-lg lg:text-xl font-medium">
                    {text.topText}
                  </p>
                </div>
                <div className="flex items-center justify-center ml-8 p-2 md:py-8">
                  <Link
                    className="flex items-center hover:animate-pulse font-semibold text-base md:text-lg"
                    to={"/Futustore/product/" + product.id}
                  >
                    Discover now{" "}
                    <Icon className="ml-2 text-lg" name="East"></Icon>
                  </Link>
                </div>
              </div>
              <div
                style={{ background: cardColors.bottomColor }}
                className={`w-80 text-white rounded-r-xl `}
              >
                <p className="m-2 md:text-base">{text.bottomText}</p>
              </div>
            </div>
          </li>
        ))}
    </>
  );
}

export default Card;
