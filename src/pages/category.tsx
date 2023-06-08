import React, { ReactNode } from "react";
import { PageLayout } from "../components/layout/page-layout";

interface CategoryProps {
  children?: ReactNode;
}

const CategoryPage = (props: CategoryProps) => {
  return (
    <PageLayout>
      <div>Category</div>
    </PageLayout>
  );
};

export default CategoryPage;
