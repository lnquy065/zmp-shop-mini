import React, { ReactNode, useEffect, useState } from "react";
import { PageLayout } from "../components/layout/page-layout";
import { useCategories } from "../hooks/useCategories";
import { AcademicCapIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { CategorySchema } from "../interfaces/CategorySchema";
import useProducts from "../hooks/useProducts";
import { priceFormat, priceFormatByProduct } from "../utils/price-format";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { ProductCard } from "../components/product-card";

interface CategoryProps {
  children?: ReactNode;
}

const CategoryPage = (props: CategoryProps) => {
  const { data: categories } = useCategories();
  const [selectedCategory, setSelectedCategory] =
    useState<CategorySchema | null>(null);
  const { data: products } = useProducts(selectedCategory?.id || null);

  const onSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (categories && categories?.length > 0) {
      setSelectedCategory(categories[0]);
    }
  }, [categories]);

  return (
    <PageLayout title="Danh mục sản phẩm" icon={Squares2X2Icon}>
      <div className="grid grid-cols-[90px_1fr] h-full gap-x-2">
        <div className="bg-blue-50 h-full">
          {categories?.map((category) => {
            const isActive = selectedCategory?.id === category.id;
            return (
              <div
                onClick={() => onSelectedCategory(category)}
                key={category.id}
                className={clsx(
                  "border-l-4 border-l-transparent px-2 py-3 aspect-square flex flex-col justify-center items-center",
                  {
                    "!border-l-primary text-primary bg-gray-50": isActive,
                  }
                )}
              >
                <img
                  src="https://picsum.photos/200/200"
                  className="w-14 h-14 mb-1 rounded-xl"
                  alt="https://picsum.photos/200/200"
                />
                <span className={clsx("text-sm text-gray-600 text-center", {})}>
                  {category.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="my-2 bg-gray-100 flex flex-col gap-y-4 pr-2">
          {products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </PageLayout>
  );
};

export default CategoryPage;
