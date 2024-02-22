import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import { CardProps } from "../models/models";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


function Card({ products, prodId, cardColors,text }: CardProps) {
  if(products===null) return;
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
          <li key={product.id} style={{background:cardColors.background}} className="md:flex-row md:flex md:items-center lg:w-3/5 md:rounded-3xl md:bg-[#FFFFFF] md:m-4">
            <Link to={`/product/${product.id}`}>
              <ImageGallery showNav={false} additionalClass="md:py-6 md:pl-6 lg:py-12 lg:pl-12 lg:w-[720px]" items={newArray[0]} showFullscreenButton={false} slideDuration={1500} slideInterval={5000} showPlayButton={false} autoPlay={true}/>
              </Link>
            <div className="flex flex-col my-4">
              <div className="flex flex-row md:flex-col justify-between">
                <div className="hidden md:flex text-3xl m-4 font-semibold text-center">{product.title}</div>
                <div style={{background:cardColors.topColor,border:cardColors.topColor}} className={`border h-16 rounded-r-xl text-black text-3xl flex items-center w-fit`}>
                  <p className="m-2 text-2xl md:text-3xl lg:text-4xl">{text.topText}</p>
                </div>
                <div className="flex items-center justify-center ml-8 p-2">
                  <Link
                    className="flex items-center hover:animate-pulse font-semibold text-base md:text-2xl"
                    to={'/product/'+product.id}
                  >
                    Discover now <Icon className="ml-2 text-xl" name="East"></Icon>
                  </Link>
                </div>
              </div>
              <div style={{background:cardColors.bottomColor}} className={`w-80 text-white text-xl rounded-r-xl `}>
                <p className="m-2 text-xl lg:text-2xl">
                  {text.bottomText}
                </p>
              </div>
            </div>
          </li>
        ))}
    </>
  );
}

export default Card;
