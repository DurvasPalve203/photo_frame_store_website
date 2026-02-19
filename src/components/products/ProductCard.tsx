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
        padding: "1rem",
        maxWidth: "220px",
      }}
    >
      <Link
        to={`/products/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {/* Image */}
        <div style={{ marginBottom: "0.75rem" }}>
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
              }}
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
                color: "#777",
              }}
            >
              No Image
            </div>
          )}
        </div>

        {/* Discount Badge */}
        {hasDiscount && (
          <span
            style={{
              display: "inline-block",
              background: "#ffe6e6",
              color: "#b00020",
              padding: "2px 6px",
              fontSize: "0.75rem",
              marginBottom: "0.5rem",
            }}
          >
            Sale
          </span>
        )}

        {/* Content */}
        <div style={{ marginTop: "0.75rem" }}>
          <h3 style={{ margin: "0.4rem 0" }}>{product.name}</h3>
          <p style={{ margin: 0 }}>
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
