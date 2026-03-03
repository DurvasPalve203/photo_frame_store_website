import ProductCard from "../components/products/ProductCard";
import { useProducts } from "../hooks/useProducts";

function Products() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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