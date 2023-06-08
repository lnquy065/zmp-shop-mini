import { ProductSchema } from "../interfaces/ProductSchema";

export const priceFormat = (value: string | number, currency: string) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(Number(value));
};

export const priceFormatByProduct = (product: ProductSchema) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  }).format(Number(product.price));
};
