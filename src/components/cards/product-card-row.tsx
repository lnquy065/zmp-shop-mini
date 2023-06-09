import React, { ReactNode } from "react";
import { ProductSchema } from "../../interfaces/ProductSchema";
import { priceFormatByProduct } from "../../utils/price-format";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

interface ProductCardProps {
  children?: ReactNode;
  product: ProductSchema;
}

export const ProductCardRow = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-md p-2 flex gap-x-2 items-center">
      <img
        src="https://picsum.photos/200/200"
        className="w-16 h-16 rounded-xl block"
        alt="https://picsum.photos/200/200"
      />
      <div className="flex flex-col self-stretch">
        <span className="font-semibold line-clamp-2">{product.name}</span>
        <span className="mt-auto text-primary font-semibold">
          {priceFormatByProduct(product)}
        </span>
      </div>
      <span className="ml-auto mr-2">
        <PlusCircleIcon className="text-primary w-8 h-8" />
      </span>
    </div>
  );
};
