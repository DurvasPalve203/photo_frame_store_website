import { useParams, Link } from "react-router-dom";
import { products } from "../lib/products";

const products = [
  {
    id: "1",
    name: "Classic Wooden Frame",
    price: 449,
    image: "https://via.placeholder.com/400x400",
  },
  {
    id: "2",
    name: "Premium Gold Frame",
    price: 799,
    image: "https://via.placeholder.com/400x400",
  },
  {
    id: "3",
    name: "Modern Black Frame",
    price: 699,
    image: "https://via.placeholder.com/400x400",
  },
];

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found.</p>;
  }

return (
  <section style={{ marginTop: "1.5rem" }}>
    <Link to="/products" style={{ display: "inline-block", marginBottom: "1rem" }}>
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
          This is a detailed description of the product. High-quality material
          and premium finish.
        </p>
      </div>
    </div>
  </section>
);
}

export default ProductDetails;