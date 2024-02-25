import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import AllProductsCard from "../components/AllProductsCard";

function AllProducts() {
  const { data, error, loading } = useFetch(
    "https://api.escuelajs.co/api/v1/categories/2/products"
  );

  if (error) return <p className="mt-96">A network error occurred!</p>;
  if (loading) return <Loader />;
  return (
    <div className="md:flex md:flex-col md:justify-center md:items-center">
      <p className="mt-28 p-4 lg:p-2 md:rounded-t-md font-semibold text-2xl md:bg-white">Browse our products</p>
      <ul className="flex flex-wrap md:w-4/5 lg:w-3/5 md:bg-white md:rounded-md">
        {data?.map((item) => (
          <div key={item.id} className="w-1/3 p-4">
            <AllProductsCard item={item} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default AllProducts;
