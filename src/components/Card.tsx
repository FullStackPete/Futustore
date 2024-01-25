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
          <li key={product.id} style={{background:cardColors.background}}>
              <ImageGallery items={newArray[0]} showFullscreenButton={false} slideDuration={1000} showPlayButton={false} autoPlay={true}/>
            <div className="flex flex-col my-4">
              <div className="flex flex-row justify-between">
                <div style={{background:cardColors.topColor,border:cardColors.topColor}} className={`border h-16 rounded-r-xl text-black text-3xl flex items-center`}>
                  <p className="m-2 font-semibold text-2xl">{text.topText}</p>
                </div>
                <div className="flex items-center justify-center ml-8 text-lg p-2">
                  <Link
                    className="flex items-center hover:animate-pulse font-semibold text-base"
                    to={'/product/'+product.id}
                  >
                    Discover now <Icon className="ml-2 text-xl" name="East"></Icon>
                  </Link>
                </div>
              </div>
              <div style={{background:cardColors.bottomColor}}className={`w-80  text-[#E5E3E0] text-xl rounded-r-xl`}>
                <p className="m-2 text-xl">
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
