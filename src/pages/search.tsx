import React, { ReactNode } from "react";
import { PageLayout } from "../components/layout/page-layout";

interface SearchPageProps {
  children?: ReactNode;
}

export const SearchPage = (props: SearchPageProps) => {
  return <PageLayout>SearchPage</PageLayout>;
};
