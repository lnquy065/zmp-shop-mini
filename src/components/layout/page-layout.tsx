import React, { ReactNode } from "react";
import { Page } from "zmp-ui";
import { Navigator } from "./navigator";

interface PageLayoutProps {
  children?: ReactNode;
}

export const PageLayout = (props: PageLayoutProps) => {
  return (
    <Page>
      <main>{props.children}</main>
      <Navigator />
    </Page>
  );
};
