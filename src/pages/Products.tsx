import MarketPlace from "@/components/marketplace/marketplace";
import PromoCarousel from "@/components/marketplace/promoCarousel";

const Products = () => {
  return (
    <div className="pt-16 md:pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-3">
        <div className="bg-amber-500 w-full px-4 py-3 rounded">
          <h1 className="text-lg font-bold text-gray-700">
            Igati/MUST Marketplace
          </h1>
        </div>

        <div className="px-4 py-6 flex flex-col gap-4">
          <h4 className="text-xl md:text-2xl font-bold tracking-wide">
            Grab our best selling products
          </h4>
          <PromoCarousel />
          <MarketPlace />
        </div>
      </div>
    </div>
  );
};

export default Products;
