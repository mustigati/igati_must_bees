import CartItem from "@/components/marketplace/cartItem";
import type { RootState } from "@/stores";
import { toggleStatusTab } from "@/stores/cart";
import { useDispatch, useSelector } from "react-redux";

const CartTab = () => {
  const carts = useSelector((store: RootState) => store.cart.items);
  const statusTab = useSelector((store: RootState) => store.cart.statusTab);

  const dispatch = useDispatch();
  const handleCloseTab = () => {
    dispatch(toggleStatusTab());
  };
  return (
    <div
      className={`fixed top-0 right-0 bg-[#426b3f]  shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] z-50 transform transition-transform duration-500  ${
        statusTab ? "translate-x-full" : ""
      }`}
    >
      <h2 className="p-5 text-white text-2xl mb-4">Shopping Cart</h2>

      <div className="flex flex-col gap-4 p-4">
        {carts.map((item, idx) => (
          <CartItem key={idx} item={item} />
        ))}
      </div>

      <div className="grid grid-cols-2">
        <button
          className="bg-black text-white cursor-pointer"
          onClick={handleCloseTab}
        >
          CLOSE
        </button>
        <button className="bg-amber-600 text-white cursor-pointer">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartTab;
