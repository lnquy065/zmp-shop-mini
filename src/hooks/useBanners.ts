import { useQuery } from "react-query";
import { ShopSchema } from "../interfaces/ShopSchema";
import { BannerSchema } from "../interfaces/BannerSchema";

export const useBanners = () => {
  return useQuery<BannerSchema[]>(["banners"], async () => {
    return [
      {
        id: "1",
        url: "",
        imageUrl: "https://picsum.photos/400/200",
        title: "Banner 1",
      },
      {
        id: "2",
        url: "",
        imageUrl: "https://picsum.photos/401/200",
        title: "Banner 2",
      },
      {
        id: "3",
        url: "",
        imageUrl: "https://picsum.photos/402/200",
        title: "Banner 3",
      },
    ];
  });
};
