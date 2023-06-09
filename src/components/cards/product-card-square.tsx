import React, { ReactNode } from "react";
import { ProductSchema } from "../../interfaces/ProductSchema";
import { priceFormatByProduct } from "../../utils/price-format";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

interface ProductCardSquareProps {
  children?: ReactNode;
  product: ProductSchema;
}

export const ProductCardSquare = ({ product }: ProductCardSquareProps) => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-y-1">
      <span className="absolute right-2 top-2">
        <PlusCircleIcon className="text-primary w-8 h-8 bg-gray-100 rounded-full" />
      </span>
      <img
        src={"https://picsum.photos/200/200"}
        alt="https://picsum.photos/200/200"
        className="w-full rounded-xl aspect-square mb-1"
      />
      <span className="font-semibold line-clamp-2 leading-[1.25]">
        {product.name}
      </span>
      <span className="text-primary text-sm font-semibold">
        {priceFormatByProduct(product)}
      </span>
    </div>
  );
};
