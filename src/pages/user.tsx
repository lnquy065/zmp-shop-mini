import React, { ReactNode } from "react";
import { PageLayout } from "../components/layout/page-layout";
import { Avatar, Input } from "zmp-ui";
import {
  GiftIcon,
  HomeModernIcon,
  IdentificationIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { priceFormat } from "../utils/price-format";

interface UserProps {
  children?: ReactNode;
}

export const UserPage = (props: UserProps) => {
  return (
    <PageLayout title={"User"} icon={UserCircleIcon}>
      <div className="px-4 bg-primary rounded-b-full h-8 mb-10 -mt-1">
        <div className="pt-2 relative"></div>
        <div className="bg-white border drop-shadow p-4 rounded-xl flex gap-x-4 ">
          <Avatar
            src="https://picsum.photos/200/200"
            className="ring-primary ring-offset-2 ring-2"
          />
          <div className="flex flex-col self-stretch">
            <h2 className="font-semibold">Quy Luong</h2>
            <span className="flex items-centers gap-x-1 mt-auto">
              <span className="font-semibold text-primary">1,000</span>
              <StarIcon className="w-4 h-4 mt-0.5 text-orange-600" />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-20 px-4">
        <div className="bg-white border p-4 rounded-md grid grid-cols-3 gap-x-4">
          <div className="text-sm font-semibold text-gray-500  flex flex-col items-center">
            <IdentificationIcon className="w-6 h-8 text-orange-900" />
            Cá nhân
          </div>
          <div className="text-sm font-semibold text-gray-500  flex flex-col items-center">
            <HomeModernIcon className="w-6 h-8 text-blue-500" />
            Địa chỉ
          </div>
          <div className="text-sm font-semibold text-gray-500  flex flex-col items-center">
            <GiftIcon className="w-6 h-8 text-green-600" />
            Đổi thưởng
          </div>
        </div>
      </div>

      <div className="mt-4 px-4 pb-8">
        <h4 className="font-semibold text-gray-600">Lịch sử đơn hàng</h4>

        <div className="flex flex-col mt-2 gap-y-2">
          <div className="bg-white border px-2 py-2 rounded-md flex gap-x-4">
            <img
              src="https://picsum.photos/200/200"
              alt=""
              className="w-16 h-16 rounded-md"
            />
            <div className="flex flex-col grow">
              <h4 className="font-semibold line-clamp-2">
                Capuchino và 3 sản phẩm khác
              </h4>
              <span className="text-sm text-gray-600 mt-auto flex justify-between w-full">
                <span>Số lượng: 6</span>{" "}
                <span className="font-semibold">
                  {priceFormat(300000, "VND")}
                </span>
              </span>
            </div>
          </div>

          {/*MOCK*/}
          <div className="bg-white border px-2 py-2 rounded-md flex gap-x-4">
            <img
              src="https://picsum.photos/200/200"
              alt=""
              className="w-16 h-16 rounded-md"
            />
            <div className="flex flex-col grow">
              <h4 className="font-semibold line-clamp-2">
                Capuchino và 3 sản phẩm khác
              </h4>
              <span className="text-sm text-gray-600 mt-auto flex justify-between w-full">
                <span>Số lượng: 6</span>{" "}
                <span className="font-semibold">
                  {priceFormat(300000, "VND")}
                </span>
              </span>
            </div>
          </div>
          <div className="bg-white border px-2 py-2 rounded-md flex gap-x-4">
            <img
              src="https://picsum.photos/200/200"
              alt=""
              className="w-16 h-16 rounded-md"
            />
            <div className="flex flex-col grow">
              <h4 className="font-semibold line-clamp-2">
                Capuchino và 3 sản phẩm khác
              </h4>
              <span className="text-sm text-gray-600 mt-auto flex justify-between w-full">
                <span>Số lượng: 6</span>{" "}
                <span className="font-semibold">
                  {priceFormat(300000, "VND")}
                </span>
              </span>
            </div>
          </div>
          <div className="bg-white border px-2 py-2 rounded-md flex gap-x-4">
            <img
              src="https://picsum.photos/200/200"
              alt=""
              className="w-16 h-16 rounded-md"
            />
            <div className="flex flex-col grow">
              <h4 className="font-semibold line-clamp-2">
                Capuchino và 3 sản phẩm khác
              </h4>
              <span className="text-sm text-gray-600 mt-auto flex justify-between w-full">
                <span>Số lượng: 6</span>{" "}
                <span className="font-semibold">
                  {priceFormat(300000, "VND")}
                </span>
              </span>
            </div>
          </div>
          <div className="bg-white border px-2 py-2 rounded-md flex gap-x-4">
            <img
              src="https://picsum.photos/200/200"
              alt=""
              className="w-16 h-16 rounded-md"
            />
            <div className="flex flex-col grow">
              <h4 className="font-semibold line-clamp-2">
                Capuchino và 3 sản phẩm khác
              </h4>
              <span className="text-sm text-gray-600 mt-auto flex justify-between w-full">
                <span>Số lượng: 6</span>{" "}
                <span className="font-semibold">
                  {priceFormat(300000, "VND")}
                </span>
              </span>
            </div>
          </div>
          <div className="bg-white border px-2 py-2 rounded-md flex gap-x-4">
            <img
              src="https://picsum.photos/200/200"
              alt=""
              className="w-16 h-16 rounded-md"
            />
            <div className="flex flex-col grow">
              <h4 className="font-semibold line-clamp-2">
                Capuchino và 3 sản phẩm khác
              </h4>
              <span className="text-sm text-gray-600 mt-auto flex justify-between w-full">
                <span>Số lượng: 6</span>{" "}
                <span className="font-semibold">
                  {priceFormat(300000, "VND")}
                </span>
              </span>
            </div>
          </div>
          <div className="bg-white border px-2 py-2 rounded-md flex gap-x-4">
            <img
              src="https://picsum.photos/200/200"
              alt=""
              className="w-16 h-16 rounded-md"
            />
            <div className="flex flex-col grow">
              <h4 className="font-semibold line-clamp-2">
                Capuchino và 3 sản phẩm khác
              </h4>
              <span className="text-sm text-gray-600 mt-auto flex justify-between w-full">
                <span>Số lượng: 6</span>{" "}
                <span className="font-semibold">
                  {priceFormat(300000, "VND")}
                </span>
              </span>
            </div>
          </div>
          <div className="bg-white border px-2 py-2 rounded-md flex gap-x-4">
            <img
              src="https://picsum.photos/200/200"
              alt=""
              className="w-16 h-16 rounded-md"
            />
            <div className="flex flex-col grow">
              <h4 className="font-semibold line-clamp-2">
                Capuchino và 3 sản phẩm khác
              </h4>
              <span className="text-sm text-gray-600 mt-auto flex justify-between w-full">
                <span>Số lượng: 6</span>{" "}
                <span className="font-semibold">
                  {priceFormat(300000, "VND")}
                </span>
              </span>
            </div>
          </div>
          <div className="bg-white border px-2 py-2 rounded-md flex gap-x-4">
            <img
              src="https://picsum.photos/200/200"
              alt=""
              className="w-16 h-16 rounded-md"
            />
            <div className="flex flex-col grow">
              <h4 className="font-semibold line-clamp-2">
                Capuchino và 3 sản phẩm khác
              </h4>
              <span className="text-sm text-gray-600 mt-auto flex justify-between w-full">
                <span>Số lượng: 6</span>{" "}
                <span className="font-semibold">
                  {priceFormat(300000, "VND")}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
