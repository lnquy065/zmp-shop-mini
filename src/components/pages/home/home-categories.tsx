import React, { ReactNode, useEffect, useRef, useState } from "react";
import { useCategories } from "../../../hooks/useCategories";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { CategorySchema } from "../../../interfaces/CategorySchema";
import useProducts from "../../../hooks/useProducts";
import { ProductCardRow } from "../../cards/product-card-row";
import clsx from "clsx";

interface HomeCategoriesProps {
  children?: ReactNode;
}

export const HomeCategories = (props: HomeCategoriesProps) => {
  const { data: categories } = useCategories();
  const [selectedCategory, setSelectedCategory] =
    useState<CategorySchema | null>(null);
  const { data: products } = useProducts(selectedCategory?.id || null);
  const refSticky = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (categories && categories.length > 0) {
      setSelectedCategory(categories[0]);
    }
  }, [categories]);

  const onSelectCategory = (category: CategorySchema) => {
    setSelectedCategory(category);
  };

  return (
    <div className="relative">
      <div className="h-4  bg-gray-100">
        <div className="w-full h-full bg-primary rounded-tl-full"></div>
      </div>
      <div className="sticky -top-2 bg-primary" ref={refSticky}>
        <div className="px-4 pt-2 flex justify-between items-center">
          <h3 className="text-white font-bold text-lg">Categories</h3>

          <Link
            to={"/category"}
            className="text-white flex gap-x-1 items-center"
          >
            See all <ChevronRightIcon className="w-4 h-4" />
          </Link>
        </div>
        <div className="px-4 py-4 flex flex-row gap-x-4 overflow-x-auto">
          {categories?.map((category) => {
            const isActive = selectedCategory?.id === category.id;
            return (
              <div
                className={clsx("flex flex-col items-center gap-y-1", {})}
                key={category.id}
                onClick={() => onSelectCategory(category)}
              >
                <img
                  src={category.imageUrl || "https://picsum.photos/200/200"}
                  alt={category.name}
                  className={clsx("transition-all w-14 h-14 rounded-xl ", {
                    "border-2 border-white": isActive,
                  })}
                />
                <div
                  className={clsx(
                    "text-center text-sm text-white overflow-y-hidden truncate w-16",
                    {
                      "bg-white rounded-xl !text-primary": isActive,
                    }
                  )}
                >
                  {category.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-4 gap-y-2 flex flex-col">
        {products?.map((product) => {
          return <ProductCardRow product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};
