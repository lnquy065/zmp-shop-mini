import React, { ReactNode, useEffect, useState } from "react";
import { PageLayout } from "../components/layout/page-layout";
import { useCategories } from "../hooks/useCategories";
import { AcademicCapIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { CategorySchema } from "../interfaces/CategorySchema";
import useProducts from "../hooks/useProducts";
import { priceFormat, priceFormatByProduct } from "../utils/price-format";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { ProductCardRow } from "../components/cards/product-card-row";
import { Select } from "zmp-ui";

const { Option } = Select;

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
      <div className="flex gap-x-2 flex-col">
        <div className="px-2 py-2 bg-primary sticky -top-1">
          <Select
            onChange={(value) => {
              setSelectedCategory(
                categories?.find((cate) => cate.id === value) || null
              );
            }}
            value={selectedCategory?.id}
            className="bg-white"
          >
            {categories?.map((category) => {
              return (
                <Option value={category.id} title={category.name}>
                  {category.name}
                </Option>
              );
            })}
          </Select>
        </div>

        <div className="px-2 grow my-4 bg-gray-100 flex flex-col gap-y-4 overflow-y-auto">
          {products?.map((product) => {
            return <ProductCardRow key={product.id} product={product} />;
          })}
        </div>
      </div>
    </PageLayout>
  );
};

export default CategoryPage;
