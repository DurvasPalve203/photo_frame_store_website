import ProductCard, { Product } from "../components/products/ProductCard";

const products: Product[] = [
  {
    id: "1",
    name: "Classic Wooden Frame",
    price: 449,
    originalPrice: 499,
    image: "https://via.placeholder.com/300x300",
  },
  {
    id: "2",
    name: "Premium Gold Frame",
    price: 799,
    originalPrice: 899,
    image: "https://via.placeholder.com/300x300",
  },
  {
    id: "3",
    name: "Modern Black Frame",
    price: 699,
    image: "https://via.placeholder.com/300x300",
  },
];

function Products() {
  return (
    <section>
      <h1>Available Photo Frames</h1>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
