import { productsCardData } from "./productsCardData";
import ProductsCard from "./productsCard";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/stores";
import { addToCart } from "@/stores/cart";

const MarketPlace = () => {
  const carts = useSelector((store: RootState) => store.cart.items);
  console.log(carts);

  const dispatch = useDispatch();

  const handleAddToCart = (productId: string) => {
    try {
      dispatch(
        addToCart({
          productId,
          quantity: 1,
        })
      );

      toast.success("Product added to cart");
    } catch (error) {
      toast.error("Failed to add product to cart");
      return error;
    }
  };
  return (
    <div className="mt-16 lg:mt-20 p-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center py-4">
        Our Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {productsCardData.map((item) => (
          <div key={item.id}>
            <ProductsCard
              product={item}
              addToCart={() => handleAddToCart(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketPlace;
