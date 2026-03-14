import { Link } from "react-router-dom";

export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image?: string;
  category?: string;
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
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      <Link
        to={`/products/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {/* Image Container */}
        <div
          style={{
            height: "200px",
            background: "#f5f5f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <span style={{ color: "#aaa" }}>No Image Available</span>
          )}
        </div>

        {/* Content */}
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

          {/* Category */}
          {product.category && (
            <p
              style={{
                fontSize: "0.75rem",
                color: "#777",
                textTransform: "uppercase",
                marginBottom: "0.25rem",
              }}
            >
              {product.category}
            </p>
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
