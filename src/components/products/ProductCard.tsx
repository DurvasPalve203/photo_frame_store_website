import { Link } from "react-router-dom";

export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image?: string;
};

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const hasDiscount =
    product.originalPrice !== undefined &&
    product.originalPrice > product.price;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        width: "220px",
        background: "#fff",
      }}
    >
      <Link
        to={`/products/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div>
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              style={{
                height: "180px",
                background: "#f2f2f2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#777",
              }}
            >
              No Image
            </div>
          )}
        </div>

        <div style={{ padding: "0.75rem" }}>
          {hasDiscount && (
            <span
              style={{
                background: "#ffe6e6",
                color: "#b00020",
                fontSize: "0.75rem",
                padding: "2px 6px",
                marginBottom: "0.4rem",
                display: "inline-block",
              }}
            >
              Sale
            </span>
          )}

          <h3 style={{ margin: "0.3rem 0" }}>{product.name}</h3>

          <p>
            ₹{product.price}
            {hasDiscount && (
              <span
                style={{
                  marginLeft: "0.5rem",
                  textDecoration: "line-through",
                  color: "#777",
                }}
              >
                ₹{product.originalPrice}
              </span>
            )}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;