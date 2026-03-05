import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";

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
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data as Product[]);
      } catch {
        setError("Unable to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
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