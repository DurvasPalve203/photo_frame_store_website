import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <section>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
    </section>
  );
}

export default ProductDetails;