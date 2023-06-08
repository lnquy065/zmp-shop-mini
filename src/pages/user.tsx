import React, { ReactNode } from "react";
import { PageLayout } from "../components/layout/page-layout";

interface UserProps {
  children?: ReactNode;
}

export const UserPage = (props: UserProps) => {
  return <PageLayout>User</PageLayout>;
};
