import Carousel, { type DotProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productsData } from "./productsData";
import { Button } from "../ui/button";

const CustomDot = ({ onClick, active }: DotProps) => (
  <button
    onClick={onClick}
    className={`mx-1 h-[4px] mt-5 w-[30px] rounded-full transition-all duration-300 ${
      active ? "bg-emerald-800 w-[40px]" : "bg-gray-300"
    }`}
  />
);

const PromoCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="py-4 px-5 rounded overflow-hidden bg-amber-500">
      <Carousel
        responsive={responsive}
        arrows={false}
        showDots
        customDot={<CustomDot />}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        pauseOnHover
        containerClass="carousel-container"
        dotListClass="flex justify-center mt-4"
        itemClass="px-2 flex flex-col gap-20 h-[380px] md:h-[280px]"
      >
        {productsData.map((product) => (
          <div key={product.id} className="flex flex-col gap-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <p className="mt-3 text-lg md:text-2xl font-semibold text-white tracking-wide ">
                  {product.title}
                </p>
                <p className="text-gray-500 text-sm text-white">
                  {product.description}
                </p>
              </div>
              <img
                src={product.image}
                alt={product.title}
                className="mx-auto h-[150px] md:h-[200px]  object-contain"
              />
            </div>

            <div>
              <Button>Shop Now</Button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PromoCarousel;
