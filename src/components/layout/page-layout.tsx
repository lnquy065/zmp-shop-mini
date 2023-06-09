import React, { ReactNode, useEffect } from "react";
import { Page } from "zmp-ui";
import { Navigator } from "./navigator";
import { getConfig } from "../config-provider";
import { changeStatusBarColor } from "../../services";
import useSetHeader from "../../hooks/useSetHeader";
import clsx from "clsx";

interface PageLayoutProps {
  children?: ReactNode;
  title?: string;
  icon?: any;
  onClickIcon?: () => void;
  iconClassName?: string;
}

export const PageLayout = (props: PageLayoutProps) => {
  const setHeader = useSetHeader();

  useEffect(() => {
    setHeader({
      customTitle: (
        <div className="flex gap-x-2 items-center">
          {props.icon && (
            <props.icon
              className={clsx("w-6 h-6", props.iconClassName)}
              onClick={props.onClickIcon}
            />
          )}
          <span className="text-secondary font-semibold">{props.title}</span>
        </div>
      ),
      hasLeftIcon: false,
      type: "primary",
    });
    changeStatusBarColor("secondary");
  }, [props.title, props.icon]);

  return (
    <>
      <Page className="flex flex-col">
        <main className="grow">{props.children}</main>
        <div className="h-12 shrink-0"></div>
      </Page>
    </>
  );
};
