import React, { ReactNode } from "react";
import {
  HomeIcon,
  MagnifyingGlassCircleIcon,
  ShoppingBagIcon,
  Squares2X2Icon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

interface NavigatorProps {
  children?: ReactNode;
}

const NavigatorItem = [
  {
    name: "Category",
    icon: Squares2X2Icon,
    path: "/category",
  },
  {
    name: "Search",
    icon: MagnifyingGlassCircleIcon,
    path: "/search",
  },
  {
    name: "Home",
    icon: HomeIcon,
    path: "/",
  },
  {
    name: "Cart",
    icon: ShoppingBagIcon,
    path: "/cart",
  },
  {
    name: "User",
    icon: UserCircleIcon,
    path: "/user",
  },
];

export const Navigator = (props: NavigatorProps) => {
  // get current react route
  const currentPath = window.location.pathname;
  console.log(currentPath);

  return (
    <div className="absolute bottom-0 left-0 w-full drop-shadow">
      <nav className="grid grid-cols-5 bg-white">
        {NavigatorItem.map((item, index) => {
          const isActive = currentPath === item.path;
          return (
            <a
              key={item.name}
              href={item.path}
              className={clsx(
                "transition-all flex justify-center items-center w-full py-2",
                {
                  "border-t-primary border-t-4": isActive,
                }
              )}
            >
              {
                <item.icon
                  className={clsx("transition-all w-8 text-gray-500", {
                    "!text-primary": isActive,
                  })}
                />
              }
            </a>
          );
        })}
      </nav>
    </div>
  );
};
