import React, { ReactNode } from "react";
import { Carousel } from "react-responsive-carousel";
import { useBanners } from "../../../hooks/useBanners";
import "react-responsive-carousel/lib/styles/carousel.css";

interface ShopCarouselProps {
  children?: ReactNode;
}

export const HomeCarousel = (props: ShopCarouselProps) => {
  const { data: banners } = useBanners();

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      className="px-4 pt-1 pb-4 rounded-xl"
      showArrows={false}
      infiniteLoop={true}
      autoPlay={true}
    >
      {banners?.map((banner) => (
        <div key={banner.id} className="rounded-xl">
          <img
            src={banner.imageUrl}
            alt={banner.title}
            className="rounded-xl"
          />
        </div>
      ))}
    </Carousel>
  );
};
