import ProductCard, { Product } from "../components/products/ProductCard";

const products: Product[] = [
  { id: "1", name: "Classic Wooden Frame", price: 499 },
  { id: "2", name: "Premium Gold Frame", price: 899 },
  { id: "3", name: "Modern Black Frame", price: 699 },
];

function Products() {
  return (
    <section>
      <h1>Our Photo Frames</h1>

      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
