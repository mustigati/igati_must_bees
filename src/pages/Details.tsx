import {
  productsCardData,
  type Product,
} from "@/components/marketplace/productsCardData";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/stores/cart";
import type { RootState } from "@/stores";

const Details = () => {
  const [detail, setDetail] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const cartItems = useSelector((store: RootState) => store.cart.items);
  console.log("Cart items in state:", cartItems);

  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = productsCardData.filter(
      (product) => product.slug === slug
    );

    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      navigate("*");
    }
  }, [slug, navigate]);

  const handleMinusQuantity = () => {
    setQuantity((prev) => (prev - 1 < 1 ? 1 : prev - 1));
  };

  const handlePlusQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: detail!.id,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="pt-20 h-[100vh]">
      {/* <h2 className=" text-lg md:text-3xl text-center">PRODUCT DETAILS</h2> */}

      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 mt-5">
        <div className="flex items-center justify-center">
          <img
            src={detail?.image}
            alt="product-img"
            className="w-[200px] h-[300px] lg:w-full lg:h-[60vh] object-contain"
          />
        </div>

        <div className="flex flex-col gap-5 p-4">
          <h1 className="text-lg md:text-3xl lg:text-4xl uppercase font-bold">
            {detail?.name}
          </h1>
          <p className="text-lg md:text-2xl font-bold">{detail?.price}</p>

          <div className="flex gap-5">
            <div className="flex gap-2 justify-center items-center ">
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex items-center justify-center cursor-pointer"
                onClick={handleMinusQuantity}
              >
                -
              </button>
              <span className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex items-center justify-center">
                {quantity}
              </span>
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex items-center justify-center cursor-pointer"
                disabled={!detail}
                onClick={handlePlusQuantity}
              >
                +
              </button>
            </div>

            <button
              className="bg-slate-900 text-white px-7 py-3 rounded-xl cursor-pointer shadow-2xl"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>

          <p>{detail?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
