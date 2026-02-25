import ProductCard from "../components/products/ProductCard";
import { products } from "../lib/products";

function Products() {
  return (
    <section>
      <h1>Available Photo Frames</h1>

      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          flexWrap: "wrap",
          marginTop: "1.5rem",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;