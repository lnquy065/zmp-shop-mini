import { useQuery } from "react-query";
import { ShopSchema } from "../interfaces/ShopSchema";

export const useShop = () => {
  const shopId = process.env.SHOP_ID || 123;
  return useQuery<ShopSchema>(["shop", shopId], async () => {
    return {
      id: "1",
      name: "Shop 1",
      description: "Shop 1 description",
      url: "https://picsum.photos/200/600",
      logo: "https://vinaspar.co/Themes/vinaspar/Content/images/logo.png",
      primaryColor: "#000000",
      secondaryColor: "#ffffff",
    };
  });
};
