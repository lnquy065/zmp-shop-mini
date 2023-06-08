import { ProductSchema } from "../interfaces/ProductSchema";
import { useQuery } from "react-query";
import apiClient from "../configs/api-client";

const useProducts = (
  categoryId: number | null,
  searchKeyword: string | null = null
) => {
  return useQuery<ProductSchema[]>(
    ["products", "category", categoryId],
    async () => {
      const response = await apiClient.get<ProductSchema[]>("Product", {
        withCredentials: true,
      });
      return response.data;
    }
  );
};

export default useProducts;
