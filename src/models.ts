import { ReactNode } from "react";
import { CategorySchema } from "./interfaces/CategorySchema";
import { ProductSchema } from "./interfaces/ProductSchema";

export type OrderStatus = "pending" | "shipping" | "finish";

export type Options = {
  name: string;
  title: string;
  option: {
    value: string;
    label: string;
    checked?: boolean;
  }[];
};

export type CartProduct = {
  id: number;
  order: {
    quantity: number;
    note: string;
    [key: string]: any;
  };
};

export type Product = {
  id: number;
  vendorId: number;
  imgProduct: string;
  name: string;
  price: number | string;
  specialPrice: number | string;
  description: string;
  options: Options[];
};

export type Store = {
  id: number;
  logoStore: string;
  bannerStore: string;
  nameStore: string;
  followers: number;
  address: string;
  type: string;
  categories?: CategorySchema[];
  listProducts: ProductSchema[];
};

export type orderOfStore = {
  orderId: number;
  storeId: number;
  status: OrderStatus;
  listOrder: CartProduct[];
  date: Date;
  address?: Address;
};

export type SectionProductsProps = {
  id?: number;
  title: string;
  watchMore?: boolean;
  pathBanner?: string;
  direction?: "vertical" | "horizontal";
  colPercentage?: number;
  children?: (data: Product | Store) => ReactNode;
  data: any;
  onChoose?: () => void;
};

export type OrderStoreProps = {
  keyStore: number;
  listPickupItems: { keyItem: number; quantity: number }[];
};

export type Address = {
  city: string;
  district: string;
  ward: string;
  detail: string;
};

export type HeaderType = {
  route?: string;
  hasLeftIcon?: boolean;
  title?: string;
  customTitle?: ReactNode;
  type?: "primary" | "secondary";
  rightIcon?: ReactNode;
};

export type AddressFormType = {
  name: "detail" | "city" | "district" | "ward";
  label: string;
  type: "text" | "select";
  placeholder: string;
  isValidate: boolean;
  errorMessage?: string;
};

export type ProductInfoPicked = {
  productId: number;
  isUpdate?: boolean;
};
