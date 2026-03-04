import { products } from "../lib/products";

export async function fetchProducts() {
  // Simulate async API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 400);
  });
}