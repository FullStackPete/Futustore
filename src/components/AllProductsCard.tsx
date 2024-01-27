import { productsType } from "../models/models";
import { Link } from "react-router-dom";
function AllProductsCard({ item }: { item: productsType }) {
  return (
    <>
      <div className="flex flex-col">
        <Link to={`/product/${item.id}`}>
        <img src={item.images[0]} alt={item.title} />
        <p className="text-sm font-medium">{item.title}</p>
        <p className="text-red-400 font-medium">{item.price}$,-</p>
        </Link>
      </div>
    </>
  );
}
export default AllProductsCard;
