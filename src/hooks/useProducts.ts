import { useMemo } from "react";
import { products } from "../lib/products";

export function useProducts() {
  // In future this can fetch from API
  const allProducts = useMemo(() => products, []);

  const getProductById = (id: string | undefined) => {
    return allProducts.find((product) => product.id === id);
  };

  return {
    products: allProducts,
    getProductById,
  };
}