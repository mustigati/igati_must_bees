import { useEffect, useState } from "react";
import type { Product } from "./productsCard";
import { productsCardData } from "./productsCardData";

const CartItem = ({
  item,
}: {
  item: { productId: string; quantity: number };
}) => {
  const [detail, setDetail] = useState<Product | null>(null);

  const { productId, quantity } = item;

  useEffect(() => {
    const findDetail = productsCardData.filter(
      (product) => product.id === productId
    )[0];
    setDetail(findDetail);
  }, [productId]);
  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
      <img src={detail?.image} alt="item" className="w-12" />
      <h3>{detail?.name}</h3>
      <p>Ksh{detail!.priceValue * quantity}</p>

      <div className="w-20 flex justify-between gap-2">
        <button className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600 cursor-pointer">
          -
        </button>
        <span>{quantity}</span>
        <button className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600 cursor-pointer">
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
