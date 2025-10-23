import { useEffect, useState } from "react";
import type { Product } from "./productsCard";
import { productsCardData } from "./productsCardData";
import { useDispatch } from "react-redux";
import { changeQuantity } from "@/stores/cart";

const CartItem = ({
  item,
}: {
  item: { productId: string; quantity: number };
}) => {
  const [detail, setDetail] = useState<Product | null>(null);

  const dispatch = useDispatch();

  const { productId, quantity } = item;

  useEffect(() => {
    const findDetail = productsCardData.filter(
      (product) => product.id === productId
    )[0];
    setDetail(findDetail);
  }, [productId]);

  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };
  const handleAddQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  if (!detail) {
    return (
      <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="flex justify-between items-center bg-white text-black p-2 border-b-2 border-slate-700 gap-5 rounded-md">
      <img src={detail.image} alt="item" className="w-12" />
      <h3>{detail.name}</h3>
      <p>Ksh{detail.priceValue * quantity}</p>

      <div className="w-20 flex justify-between gap-2">
        <button
          onClick={handleMinusQuantity}
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600 cursor-pointer"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={handleAddQuantity}
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600 cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
