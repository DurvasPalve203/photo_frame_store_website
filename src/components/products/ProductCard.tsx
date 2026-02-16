import { Link } from "react-router-dom";

export type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
};

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", maxWidth: "220px" }}>
      <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
          ) : (
            <div
              style={{
                height: "150px",
                background: "#f2f2f2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.9rem",
              }}
            >
              No Image
            </div>
          )}
        </div>

        <h3 style={{ margin: "0.25rem 0" }}>{product.name}</h3>
        <p>₹{product.price}</p>
      </Link>
    </div>
  );
}

export default ProductCard;
