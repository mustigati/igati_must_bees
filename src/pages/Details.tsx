import {
  productsCardData,
  type Product,
} from "@/components/marketplace/productsCardData";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState<Product | null>(null);

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

  return (
    <div className="pt-20">
      <h2 className="text-3xl text-center">PRODUCT DETAILS</h2>

      <div className="grid grid-cols-2 gap-5 mt-5">
        <div className="">
          <img
            src={detail?.image}
            alt="product-img"
            className="w-full h-[60vh] object-contain"
          />
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-4xl uppercase font-bold">{detail?.name}</h1>
          <p className="text-2xl font-bold">{detail?.price}</p>

          <div className="flex gap-5">
            <div className="flex gap-2 justify-center items-center ">
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex items-center justify-center"
                // onClick={handleMinusQuantity}
              >
                -
              </button>
              <button className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex items-center justify-center">
                1
              </button>
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex items-center justify-center"
                // onClick={handleAddQuantity}
              >
                +
              </button>
            </div>

            <button
              className="bg-slate-900 text-white px-7 py-3 rounded-xl cursor-pointer shadow-2xl"
              //   onClick={handleAddToCart}
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
