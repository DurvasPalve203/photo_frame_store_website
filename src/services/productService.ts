import { products as mockProducts } from "../lib/products";

export async function fetchProducts() {
  try {
    // Future API call will go here
    // Example:
    // const response = await fetch("/api/products")
    // const data = await response.json()

    // Temporary fallback to mock data
    return mockProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}