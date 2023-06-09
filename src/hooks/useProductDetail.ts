import { ProductSchema } from "../interfaces/ProductSchema";
import { useQuery } from "react-query";
import apiClient from "../configs/api-client";

const useProductDetail = (productId: string | null | undefined) => {
  return useQuery<ProductSchema>(
    ["product", "detail", productId],
    async () => {
      const response = await apiClient.get<ProductSchema>(
        `Product/${productId}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    },
    {
      enabled: !!productId,
    }
  );
};

export default useProductDetail;
