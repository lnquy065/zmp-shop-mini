import React, { ReactNode, useEffect } from "react";
import { useCategories } from "../hooks/useCategories";
import useProducts from "../hooks/useProducts";
import { useRecoilState } from "recoil";
import { activeCateState, storeState } from "../state";
import { Store } from "../models";
import { getRandomInt } from "../utils";
import {
  listAddress,
  listNameStore,
  numLogo,
  numStoreBanner,
} from "../dummy/constants";

interface ShopAppProps {
  children?: ReactNode;
}

export const ShopApp = (props: ShopAppProps) => {
  const { data: categories, isFetching: isCategoryFetching } = useCategories();
  const { data: products, isFetching: isProductFetching } = useProducts();
  const [store, setStore] = useRecoilState(storeState);
  const [activeCate, setActiveCate] = useRecoilState<number>(activeCateState);

  const initStore = () => {
    const store: Store = {
      id: 0,
      logoStore: `logo-${getRandomInt(numLogo)}-new`,
      bannerStore: `store-banner-${getRandomInt(numStoreBanner)}`,
      nameStore: listNameStore[getRandomInt(listNameStore.length) - 1],
      followers: getRandomInt(9999, 10),
      address: listAddress[getRandomInt(listAddress.length) - 1],
      type: "Doanh nghiệp",
      listProducts: products || [],
      categories: categories,
    };
    setStore(store);
  };

  // init store
  useEffect(() => {
    if (isCategoryFetching && isProductFetching) {
      initStore();
    }
  }, [isCategoryFetching, isProductFetching]);

  // load categories
  useEffect(() => {
    if (categories) {
      setStore((state) => ({
        ...state,
        categories: categories,
      }));
      setActiveCate(categories[0].id);
    }
  }, [categories]);

  // load products list
  useEffect(() => {
    if (products) {
      setStore((state) => ({
        ...state,
        listProducts: products,
      }));
      console.log({ products });
    }
  }, [products]);

  return <>{props.children}</>;
};
