const products = [
  { id: 1, name: "Classic Wooden Frame", price: "₹499" },
  { id: 2, name: "Premium Gold Frame", price: "₹899" },
  { id: 3, name: "Modern Black Frame", price: "₹699" },
];

function Products() {
  return (
    <section>
      <h1>Our Photo Frames</h1>

      <ul style={{ marginTop: "1rem" }}>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "0.75rem" }}>
            <strong>{product.name}</strong> — {product.price}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Products;
