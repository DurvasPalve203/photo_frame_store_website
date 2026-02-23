import { useParams } from "react-router-dom";

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
    <section>
      <h1>{product.name}</h1>

      <div style={{ margin: "1rem 0" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "300px", objectFit: "cover" }}
        />
      </div>

      <p>Price: ₹{product.price}</p>
      <p>This is a detailed view of the selected product.</p>
    </section>
  );
}

export default ProductDetails;