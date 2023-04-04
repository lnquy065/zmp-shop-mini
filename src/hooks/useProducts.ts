import { ProductSchema } from "../interfaces/ProductSchema";
import { useQuery } from "react-query";
import apiClient from "../configs/api-client";

const useProducts = () => {
  return useQuery<ProductSchema[]>("products", async () => {
    const response = await apiClient.get<ProductSchema[]>("Product", {
      withCredentials: true,
    });
    return response.data;
  });
};

export default useProducts;
