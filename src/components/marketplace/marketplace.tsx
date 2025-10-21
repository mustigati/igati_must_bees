import { productsCardData } from "./productsCardData";
import ProductsCard from "./productsCard";
import toast from "react-hot-toast";

const MarketPlace = () => {
  const handleAddToCart = () => {
    toast.success("Product added to cart");
  };
  return (
    <div className="mt-16 lg:mt-20 p-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center py-4">
        Our Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {productsCardData.map((item) => (
          <div key={item.id}>
            <ProductsCard product={item} addToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketPlace;
