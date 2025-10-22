import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Link } from "react-router-dom";

export interface Product {
  id: string;
  image: string; // or StaticImageData if using Next.js Image
  name: string;
  description: string;
  price: string; // formatted string like "Ksh 500"
  priceValue: number; // numeric value for calculations
  slug: string;
}

interface ProductsCardProps {
  product: Product;
  addToCart: () => void;
}

const ProductsCard = ({ product, addToCart }: ProductsCardProps) => {
  const { image, name, description, price, slug } = product;

  return (
    <Card className="p-4 rounded-lg shadow-md overflow-hidden bg-gradient-card border-border shadow-card hover:shadow-hover transition-all duration-300 hover:scale-[1.02]">
      <Link to={slug}>
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-md mb-3 cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>

      <div className="flex items-center justify-between">
        <span className="text-xl font-bold  text-amber-500">{price}</span>
        <Button
          size="sm"
          className="gap-1 cursor-pointer bg-amber-500 hover:bg-amber-600"
          onClick={addToCart}
        >
          <Plus className="w-4 h-4" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductsCard;
