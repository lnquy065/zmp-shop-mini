import { CategorySchema } from "./CategorySchema";

export interface ProductSchema {
  id: number;
  createdDate: string;
  createdUser: string;
  updatedDate: string;
  updatedUser: string;
  name: string;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
  description: string;
  shortDescription: string;
  specification: string;
  price: number;
  oldPrice: number;
  specialPrice: number;
  specialPriceStart: string;
  specialPriceEnd: string;
  hasOptions: boolean;
  isVisibleIndividually: boolean;
  isFeatured: boolean;
  isCallForPricing: boolean;
  isAllowToOrder: boolean;
  stockTrackingIsEnabled: boolean;
  stockQuantity: number;
  sku: string;
  gtin: string;
  slug: string;
  normalizedName: string;
  displayOrder: number;
  vendorId: number;
  isPublished: boolean;
  categories?: {
    id: number;
    categoryId: number;
    productId: number;
    category: CategorySchema;
  }[];
}
