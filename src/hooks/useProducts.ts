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

  useEffect(() => {
    // Simulating async fetch
    const timer = setTimeout(() => {
      setProducts(staticProducts);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getProductById = (id: string | undefined) => {
    return products.find((product) => product.id === id);
  };

  return {
    products,
    loading,
    getProductById,
  };
}