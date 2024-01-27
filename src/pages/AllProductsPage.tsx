import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import AllProductsCard from "../components/AllProductsCard";

function AllProducts() {
  const { data, error, loading } = useFetch(
    "https://api.escuelajs.co/api/v1/categories/2/products?offset=0&limit=10"
  );

  if (error) return <p className="mt-96">A network error occurred!</p>;
  if (loading) return <Loader />;
  return (
    <div>
      <p className="mt-28 m-4 font-semibold text-2xl">Browse our products</p>
      <ul className="flex flex-wrap">
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
