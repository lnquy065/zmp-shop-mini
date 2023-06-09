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
import { Link, useNavigate } from "react-router-dom";
import useSetHeader from "../hooks/useSetHeader";
import { changeStatusBarColor } from "../services";
import { getConfig } from "../components/config-provider";
import { ProductSchema } from "../interfaces/ProductSchema";
import { PageLayout } from "../components/layout/page-layout";
import { useShop } from "../hooks/useShop";
import {
  ChevronRightIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Carousel } from "react-responsive-carousel";
import { useBanners } from "../hooks/useBanners";
import useNewArrivalProducts from "../hooks/useNewArrivalProducts";
import { ProductCardSquare } from "../components/cards/product-card-square";
import { useCategories } from "../hooks/useCategories";
import { HomeCarousel } from "../components/pages/home/home-carousel";
import { HomeNewArrivals } from "../components/pages/home/home-new-arrivals";
import { HomeCategories } from "../components/pages/home/home-categories";

const HomePage: React.FunctionComponent = () => {
  const { data: store } = useShop();
  const { data: categories } = useCategories();

  const cart = useRecoilValue(cartState);

  const [activeCate, setActiveCate] = useRecoilState<number>(activeCateState);
  const [activeFilter, setActiveFilter] =
    useRecoilState<string>(activeFilterState);
  const storeProductResult = useRecoilValue<ProductSchema[]>(
    storeProductResultState
  );
  const setSearchProduct = useSetRecoilState(searchProductState);
  const navigate = useNavigate();

  const onClickSearch = () => {
    navigate("/search");
  };

  return (
    <PageLayout
      title={store?.name || ""}
      icon={() =>
        store && (
          <img src={store.logo} alt={store.name} className="h-8 w-auto" />
        )
      }
    >
      {store && (
        <>
          <div className="px-4 bg-primary rounded-b-full h-8 mb-10 -mt-1">
            <div className="pt-2 relative">
              <Input
                placeholder={"Tìm sản phẩm..."}
                onClick={() => {
                  navigate("/search");
                }}
                readOnly
              />
              <MagnifyingGlassIcon className="absolute right-3 top-6 w-6 h-6 text-gray-400" />
            </div>
          </div>

          <div className="rounded-xl">
            <HomeCarousel />
          </div>
          {/*NEW ARRIVALS*/}
          <div>
            <HomeNewArrivals />
          </div>

          {/*HOME CATEGORIES*/}
          <div className="">
            <div className="bg-primary h-8 -mt-8">
              <div className="w-full h-full bg-gray-100 rounded-br-3xl"></div>
            </div>
            <div className="bg-primary rounded-tl-3xl pb-4">
              <HomeCategories />
            </div>
          </div>
        </>
      )}
    </PageLayout>
  );
};

export default HomePage;
