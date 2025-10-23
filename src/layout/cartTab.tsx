import CartItem from "@/components/marketplace/cartItem";
import type { RootState } from "@/stores";
import { useSelector } from "react-redux";

const CartTab = () => {
  const carts = useSelector((store: RootState) => store.cart.items);
  return (
    <div className="fixed top-12 right-0 bg-gray-200 shadow-3xl w-96 h-full grid grid-rows-[60px_1fr_60px] p-4 ">
      <h2 className="p-5 text-black text-2xl mb-4">Shopping Cart</h2>

      <div>
        {carts.map((item, idx) => (
          <CartItem key={idx} item={item} />
        ))}
      </div>

      <div className="grid grid-cols-2">
        <button className="bg-black text-white cursor-pointer">CLOSE</button>
        <button className="bg-amber-600 text-white cursor-pointer">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartTab;
