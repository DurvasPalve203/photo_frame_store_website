import { Link } from "react-router-dom";

export type Product = {
  id: string;
  name: string;
  price: number;
};

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <Link to={`/products/${product.id}`}>
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
      </Link>
    </div>
  );
}

export default ProductCard;
