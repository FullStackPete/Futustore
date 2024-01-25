import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
function Home() {
  const { data, error, loading } = useFetch(
    "https://api.escuelajs.co/api/v1/categories/2/products"
  );

  if (error) return <p>A network error was encountered!</p>;
  if (loading) return <Loader/>
    

  //"https://api.escuelajs.co/api/v1/products/?offset=1&limit=5&categoryId=2"

  return (
    <>
      {error && (
        <p className="mt-28 text-2xl text-red-400">Error occured: {error}</p>
      )}
      <ul className="flex flex-col mt-16">
        <Card
          text={{
            topText: "Stay in contact",
            bottomText:
              "Don't get disconnected. Buy our newest smartwatch - AyeWatch 45",
          }}
          cardColors={{
            background: "#E5E3E0",
            topColor: "#EBCCCF",
            bottomColor: "#5BB0CF",
          }}
          prodId={25}
          products={data}
        />
        <Card
          text={{
            topText: "Future is here",
            bottomText: "Experience the world again with AyeBeats",
          }}
          cardColors={{
            background: "#E5E3E0",
            topColor: "#B6C9C0",
            bottomColor: "#0D0A09",
          }}
          prodId={24}
          products={data}
        />
        <Card
          text={{
            topText: "Work with ease",
            bottomText: "Try our new notebook - AyeBook 16'",
          }}
          cardColors={{
            background: "#E5E3E0",
            topColor: "#FCC940",
            bottomColor: "#0D0A09",
          }}
          prodId={22}
          products={data}
        />
      </ul>
    </>
  );
}

export default Home;
