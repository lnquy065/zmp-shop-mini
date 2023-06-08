import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Input, Page, Spinner } from "zmp-ui";
import ButtonFixed from "../components/button-fixed/button-fixed";
import ButtonPriceFixed from "../components/button-fixed/button-price-fixed";
import CategoriesStore from "../components/categories-store";
import CardProductHorizontal from "../components/custom-card/card-product-horizontal";
import CardShop from "../components/custom-card/card-shop";

import { filter } from "../constants/referrence";
import { Product } from "../models";
import {
  activeCateState,
  activeFilterState,
  cartState,
  searchProductState,
  storeProductResultState,
  storeState,
} from "../state";
import { calcTotalPriceOrder } from "../utils";
import { useNavigate } from "react-router-dom";
import useSetHeader from "../hooks/useSetHeader";
import { changeStatusBarColor } from "../services";
import { getConfig } from "../components/config-provider";
import { ProductSchema } from "../interfaces/ProductSchema";
import { PageLayout } from "../components/layout/page-layout";

const HomePage: React.FunctionComponent = () => {
  const store = useRecoilValue(storeState);
  const cart = useRecoilValue(cartState);

  const [activeCate, setActiveCate] = useRecoilState<number>(activeCateState);
  const [activeFilter, setActiveFilter] =
    useRecoilState<string>(activeFilterState);
  const storeProductResult = useRecoilValue<ProductSchema[]>(
    storeProductResultState
  );
  const setSearchProduct = useSetRecoilState(searchProductState);
  const navigate = useNavigate();
  const setHeader = useSetHeader();

  const totalPrice = useMemo<Number>(() => {
    if (cart.length > 0) return calcTotalPriceOrder(cart[0].listOrder);
    return 0;
  }, [cart]);

  const handleInputSearch = useCallback((text: string) => {
    setSearchProduct(text);
  }, []);

  const searchBar = useMemo(
    () => (
      <Input.Search
        placeholder="Tìm kiếm sản phẩm"
        onSearch={handleInputSearch}
        className="cus-input-search"
      />
    ),
    []
  );

  useEffect(() => {
    setHeader({
      customTitle: getConfig((c) => c.template.searchBar) ? searchBar : "",
      hasLeftIcon: false,
      type: "secondary",
    });
    changeStatusBarColor("secondary");
  }, []);

  return (
    <PageLayout>
      {store && storeProductResult && (
        <>
          <div className="bg-primary">
            <CardShop storeInfo={store} />
            <CategoriesStore
              categories={store.categories!}
              activeCate={activeCate}
              setActiveCate={(cateId) => setActiveCate(cateId)}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              filter={filter}
              quantity={storeProductResult.length}
              storeId={store.id}
            />
          </div>
          <div className="bg-gray-100 h-3" />
          <div
            className="bg-white p-3"
            style={{ marginBottom: totalPrice > 0 ? "120px" : "0px" }}
          >
            {storeProductResult.map((product) => (
              <div className=" mb-2 w-full" key={product.id}>
                <CardProductHorizontal
                  pathImg={product.normalizedName}
                  nameProduct={product.name}
                  salePrice={product.price}
                  retailPrice={product.specialPrice}
                  productId={product.id}
                  storeId={product.vendorId}
                />
              </div>
            ))}
          </div>
          {totalPrice > 0 && (
            <>
              <ButtonPriceFixed
                quantity={cart[0].listOrder.length}
                totalPrice={totalPrice}
                handleOnClick={() => {
                  navigate("/finish-order");
                }}
              />
              <ButtonFixed
                listBtn={[
                  {
                    id: 1,
                    content: "Hoàn tất đơn hàng",
                    type: "primary",
                    onClick: () => {
                      navigate("/finish-order");
                    },
                  },
                ]}
                zIndex={99}
              />
            </>
          )}
        </>
      )}
    </PageLayout>
  );
};

export default HomePage;
