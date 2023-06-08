import React, { ReactNode, useState } from "react";
import { PageLayout } from "../components/layout/page-layout";
import {
  InboxIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Button, Input } from "zmp-ui";
import useProducts from "../hooks/useProducts";
import { ProductCard } from "../components/product-card";

interface SearchPageProps {
  children?: ReactNode;
}

export const SearchPage = (props: SearchPageProps) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const { data: products } = useProducts(null, searchKeyword);

  return (
    <PageLayout title="Tìm kiếm sản phẩm" icon={MagnifyingGlassCircleIcon}>
      <div className="p-2 flex items-center">
        <Input
          type="text"
          maxLength={200}
          placeholder={"Nhập tên sản phẩm..."}
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <button className="my-1 h-auto px-4 bg-primary text-white self-stretch rounded-lg ml-2">
          <MagnifyingGlassIcon className="w-6 h-6" />
        </button>
      </div>
      {/*SEARCH RESULTS*/}
      <div className="flex flex-col px-2 pt-4 border-t ">
        {products?.map((product) => (
          <ProductCard product={product} />
        ))}
        {searchKeyword && products?.length === 0 && (
          <div className="flex flex-col justify-center items-center grow mt-16">
            <InboxIcon className="w-16 text-gray-300" />
            <span className="text-gray-400 mt-4">Không tìm thấy sản phẩm</span>
          </div>
        )}
      </div>
    </PageLayout>
  );
};
