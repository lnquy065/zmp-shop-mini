import { createStoreDummy, productsDummy } from "./dummy/utils";
import { atom, atomFamily, selector } from "recoil";
import { userInfo } from "zmp-sdk";
import {
  Address,
  HeaderType,
  orderOfStore,
  Product,
  ProductInfoPicked,
  Store,
} from "./models";
import { getRandomInt } from "./utils";
import { filter } from "./constants/referrence";
import { ProductSchema } from "./interfaces/ProductSchema";
import { CategorySchema } from "./interfaces/CategorySchema";

console.log(createStoreDummy(1)[0]);
console.log(productsDummy);

export const storeState = atom<Store>({
  key: "user",
  default: {
    id: 0,
    logoStore: "",
    bannerStore: "",
    nameStore: "",
    followers: 0,
    address: "",
    type: "",
    categories: [],
    listProducts: [],
  },
});

export const productState = atom<ProductSchema[]>({
  key: "product",
  default: [],
});

export const cartState = atom<orderOfStore[]>({
  key: "cart",
  default: [],
});

export const headerState = atom<HeaderType>({
  key: "header",
  default: {},
});

export const searchProductState = atom<string>({
  key: "searchProduct",
  default: "",
});

export const activeCateState = atom<number>({
  key: "activeCate",
  default: 0,
});

export const activeFilterState = atom<string>({
  key: "activeFilter",
  default: filter[0].key,
});

export const storeProductResultState = selector<ProductSchema[]>({
  key: "storeProductResult",
  get: ({ get }) => {
    const store = get(storeState);

    const activeCate = get(activeCateState);
    const searchProduct = get(searchProductState);

    let result = [
      ...store.listProducts.filter((product) => {
        return !!product.categories?.find(
          (cate) => cate.categoryId === activeCate
        );
      }),
    ];

    if (searchProduct) {
      result = result.filter(
        (product) =>
          product.normalizedName?.includes(searchProduct) ||
          product.name?.includes(searchProduct)
      );
    }

    return result;
  },
});

export const addressState = atom<Address>({
  key: "address",
  default: {
    city: "",
    district: "",
    ward: "",
    detail: "",
  },
});

export const openProductPickerState = atom<boolean>({
  key: "openProductPicker",
  default: false,
});

export const initialProductInfoPickedState = {
  productId: -1,
  isUpdate: false,
};

export const productInfoPickedState = atom<ProductInfoPicked>({
  key: "productInfoPicked",
  default: initialProductInfoPickedState,
});
