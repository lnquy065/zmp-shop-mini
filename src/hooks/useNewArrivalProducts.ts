import { ProductSchema } from "../interfaces/ProductSchema";
import { useQuery } from "react-query";
import apiClient from "../configs/api-client";

const useNewArrivalProducts = () => {
  const shopId = process.env.SHOP_ID;
  return useQuery<ProductSchema[]>(
    ["products", "newArrival", shopId],
    async () => {
      const response = await apiClient.get<ProductSchema[]>("Product", {
        withCredentials: true,
      });
      return response.data;
    }
  );
};

export default useNewArrivalProducts;
