import { useQuery } from "react-query";
import { CategorySchema } from "../interfaces/CategorySchema";
import apiClient from "../configs/api-client";

export const useCategories = () => {
  return useQuery<CategorySchema[]>("categories", async () => {
    const response = await apiClient.get<CategorySchema[]>("Category", {
      withCredentials: true,
    });
    return response.data;
  });
};
