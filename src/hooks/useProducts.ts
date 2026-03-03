import { useEffect, useState } from "react";
import { products as staticProducts } from "../lib/products";

export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image?: string;
};

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        // Simulated fetch success
        setProducts(staticProducts);
      } catch (err) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getProductById = (id: string | undefined) => {
    return products.find((product) => product.id === id);
  };

  return {
    products,
    loading,
    error,
    getProductById,
  };
}