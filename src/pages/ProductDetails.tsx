import { useParams, Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

function ProductDetails() {
  const { id } = useParams();
  const { getProductById } = useProducts();

  const product = getProductById(id);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <section style={{ marginTop: "1.5rem" }}>
      <Link
        to="/products"
        style={{ display: "inline-block", marginBottom: "1rem" }}
      >
        ← Back to Products
      </Link>

      <div style={{ display: "flex", gap: "2rem" }}>
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "350px", objectFit: "cover" }}
          />
        </div>

        <div>
          <h1>{product.name}</h1>
          <p style={{ fontSize: "1.2rem", margin: "0.5rem 0" }}>
            ₹{product.price}
          </p>
          <p>
            This is a detailed description of the product. High-quality
            material and premium finish.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;