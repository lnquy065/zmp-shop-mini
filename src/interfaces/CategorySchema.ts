export interface CategorySchema {
  id: number;
  createdDate: string;
  createdUser: string;
  updatedDate: string;
  updatedUser: string;
  name: string;
  slug: string;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
  description: string;
  displayOrder: number;
  isPublished: boolean;
  includeInMenu: boolean;
  parentId: number;
  parent: string;
  children: string[];
  imageUrl: string;
}
