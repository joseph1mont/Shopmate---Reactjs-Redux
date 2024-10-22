import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";

export const Home = () => {
  useTitle("Home");

  const products = [
    {
      id: 1,
      name: "women's Chanel pressed powder beside tube bottles",
      price: 149,
      image: "/assets/images/1001.png",
    },
    {
      id: 2,
      name: "COCOOIL Body Oil",
      price: 49,
      image: "/assets/images/1002.png",
    },
    {
      id: 3,
      name: "Vya Naturals",
      price: 179,
      image: "/assets/images/1003.png",
    },
    {
      id: 4,
      name: "Hylamide",
      price: 39,
      image: "/assets/images/1004.png",
    },
    {
      id: 5,
      name: "Shea butter body butter",
      price: 199,
      image: "/assets/images/1005.png",
    },
    {
      id: 6,
      name: "MISS SWISS Mascara Photo",
      price: 29,
      image: "/assets/images/1006.png",
    },
  ];

  return (
    <main>
      <section className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
