import React, { useEffect, useMemo, useState } from "react";
import { Product, orderOfStore } from "../models";
import {
  calcSalePercentage,
  calcTotalPriceOrder,
  convertPrice,
  getImgUrl,
} from "../utils";
import ButtonFixed, {
  ButtonType,
} from "../components/button-fixed/button-fixed";
import ButtonPriceFixed from "../components/button-fixed/button-price-fixed";
import { Box, Button, Icon, Input, Page } from "zmp-ui";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  cartState,
  openProductPickerState,
  productInfoPickedState,
  storeState,
} from "../state";

import { useParams, useNavigate } from "react-router-dom";
import { changeStatusBarColor } from "../services";
import useSetHeader from "../hooks/useSetHeader";
import { ProductSchema } from "../interfaces/ProductSchema";
import useProductDetail from "../hooks/useProductDetail";
import { PageLayout } from "../components/layout/page-layout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import {
  ChevronLeftIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { priceFormat, priceFormatByProduct } from "../utils/price-format";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const mockImage = [
  {
    imageUrl: "https://picsum.photos/400/200",
  },
  {
    imageUrl: "https://picsum.photos/400/201",
  },
  {
    imageUrl: "https://picsum.photos/400/202",
  },
];

const mockOption = {
  labels: ["Loại hạt", "Size"],
  options: [
    {
      id: 1,
      labels: ["Arabica", "S"],
      price: 22000,
    },
    {
      id: 2,
      labels: ["Arabica", "M"],
      price: 25000,
    },
    {
      id: 3,
      labels: ["Arabica", "L"],
      price: 27000,
    },
    {
      id: 4,
      labels: ["Rubusta", "S"],
      price: 18000,
    },
    {
      id: 5,
      labels: ["Rubusta", "M"],
      price: 20000,
    },
    {
      id: 6,
      labels: ["Rubusta", "L"],
      price: 23000,
    },
    {
      id: 7,
      labels: ["Mix", "S"],
      price: 18000,
    },
    {
      id: 8,
      labels: ["Mix", "M"],
      price: 20000,
    },
    {
      id: 9,
      labels: ["Mix", "L"],
      price: 23000,
    },
  ],
};

const DetailProduct = () => {
  const navigate = useNavigate();
  let { productId } = useParams();
  const { data: product } = useProductDetail(productId);
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(mockOption.options[0]);

  const onClickIncrease = () => {
    if (quantity === 99) return;
    setQuantity((prev) => prev + 1);
  };

  const onClickDecrease = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  };

  const onClickOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <PageLayout
      title={product?.name || ""}
      icon={ChevronLeftIcon}
      onClickIcon={() => navigate("/")}
    >
      {product && (
        <div className="flex flex-col relative h-full">
          <div>
            <Carousel
              showThumbs={false}
              showStatus={false}
              className=""
              showArrows={false}
              infiniteLoop={true}
              autoPlay={true}
            >
              {mockImage.map((item) => (
                <div key={item.imageUrl}>
                  <img src={item.imageUrl} alt="mock" />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="px-2 pt-2 pb-4 bg-white">
            <h3 className="text-lg font-semibold">{product.name}</h3>

            {selectedOption && (
              <h4 className="text-lg text-primary font-semibold">
                {priceFormat(selectedOption.price, "VND")}
              </h4>
            )}

            <p className="mt-4">{product.description}</p>
          </div>

          <div className="px-2 bg-white mt-4 py-2 pb-4">
            <h4 className="text-md text-gray-600 font-semibold mb-4">
              <span>Tùy chọn: {mockOption.labels.join(" & ")}</span>
            </h4>

            <div className="flex flex-wrap gap-2">
              {mockOption.options.map((option) => {
                const isSelected = option.id === selectedOption.id;
                return (
                  <span
                    key={option.id}
                    onClick={() => onClickOption(option)}
                    className={clsx(
                      "transition-colors text-sm bg-white border border-primary px-4 py-1 rounded-xl",
                      {
                        "bg-primary text-white": isSelected,
                      }
                    )}
                  >
                    {option.labels.join(" - ")}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="bg-white absolute bottom-0 w-full p-2 flex items-center gap-x-4">
            <div className="flex items-center shrink-0">
              <button
                className="border rounded-md p-1"
                onClick={onClickDecrease}
              >
                <MinusIcon className="w-6 h-6 text-primary" />
              </button>
              <div className="w-12 text-center text-lg font-semibold ">
                {quantity}
              </div>
              <button
                className="border rounded-md p-1"
                onClick={onClickIncrease}
              >
                <PlusIcon className="w-6 h-6 text-primary" />
              </button>
            </div>
            <div className="grow self-stretch">
              <button className="bg-primary rounded-md w-full h-full text-white font-semibold">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default DetailProduct;
