import { productsType } from "../models/models";
import { Link } from "react-router-dom";
function AllProductsCard({ item }: { item: productsType }) {
  return (
    <>
      <div className="flex md:text-base text-center flex-col">
        <Link to={`/Futustore/product/${item.id}`}>
          <img className="rounded-sm" src={item.images[0]} alt={item.title} />
          <p className=" font-medium">{item.title}</p>
          <p className="text-gray-400">{item.price}$,-</p>
        </Link>
      </div>
    </>
  );
}
export default AllProductsCard;
