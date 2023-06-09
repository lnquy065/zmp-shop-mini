import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ProductCardSquare } from "../../cards/product-card-square";
import useNewArrivalProducts from "../../../hooks/useNewArrivalProducts";

interface ProductNewArrivalsProps {
  children?: ReactNode;
}

export const HomeNewArrivals = (props: ProductNewArrivalsProps) => {
  const { data: newArrivalProducts } = useNewArrivalProducts();

  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="pl-4 text-primary font-bold text-lg">New arrivals</h3>
        <Link
          to={"/category"}
          className="relative text-white flex gap-x-1 items-center px-4 py-1 bg-primary rounded-l-full"
        >
          See all <ChevronRightIcon className="w-4 h-4" />
          <div className="absolute h-4 w-4 bg-primary -top-4 right-0">
            <div className="w-full h-full rounded-br-3xl bg-gray-100"></div>
          </div>
          <div className="absolute h-4 w-4 bg-primary -bottom-4 right-0">
            <div className="w-full h-full rounded-tr-3xl bg-gray-100"></div>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        {newArrivalProducts?.slice(0, 4).map((product) => (
          <ProductCardSquare product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};
