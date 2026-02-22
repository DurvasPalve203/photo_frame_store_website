import { useParams } from "react-router-dom";

const products = [
  { id: "1", name: "Classic Wooden Frame", price: 449 },
  { id: "2", name: "Premium Gold Frame", price: 799 },
  { id: "3", name: "Modern Black Frame", price: 699 },
];

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <section>
      <h1>{product.name}</h1>
      <p>Price: ₹{product.price}</p>
      <p>This is a detailed view of the selected product.</p>
    </section>
  );
}

export default ProductDetails;