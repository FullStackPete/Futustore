import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import AllProductsCard from "../components/AllProductsCard";

function AllProducts() {
  const { data, error, loading } = useFetch(
    "https://api.escuelajs.co/api/v1/categories/2/products"
  );

  if (error) return <p className="mt-96">A network error occured!</p>;
  if (loading) return <Loader />;
  return (
    <ul>
      {data?.map((item) => (
        <AllProductsCard item={item}/>
      ))}
    </ul>
  );
}

export default AllProducts;
