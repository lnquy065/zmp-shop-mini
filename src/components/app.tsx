import React, { lazy, Suspense, useEffect } from "react";
import { Route } from "react-router-dom";
import {
  App,
  ZMPRouter,
  AnimationRoutes,
  SnackbarProvider,
  Spinner,
} from "zmp-ui";
import { RecoilRoot, useRecoilState } from "recoil";
import HomePage from "../pages";
import ProductPicker from "./product-picker";
import DetailProduct from "../pages/detail-product";
import api from "zmp-sdk";
import Header from "./header";
import { ConfigProvider, getConfig } from "./config-provider";
import { getRandomInt, hexToRgb } from "../utils";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  listAddress,
  listCategories,
  listNameStore,
  numLogo,
  numStoreBanner,
} from "../dummy/constants";
import { createProductCategoriesDummy } from "../dummy/utils";
import { Store } from "../models";
import { useCategories } from "../hooks/useCategories";
import { storeState } from "../state";
import useProducts from "../hooks/useProducts";
import { ShopApp } from "./shop-app";
import axios from "axios";
import apiClient from "../configs/api-client";
import { AuthenticateSchema } from "../interfaces/AuthenticateSchema";

const FinishOrder = React.lazy(() => import("../pages/finish-order"));

const queryClient = new QueryClient();

import sdk from "zmp-sdk";
import CategoryPage from "../pages/category";
import { UserPage } from "../pages/user";
import { SearchPage } from "../pages/search";

const MyApp = () => {
  useEffect(() => {
    api.login();
    apiClient
      .post<AuthenticateSchema>("Authenticate", {
        username: "user",
        password: "1234567890",
      })
      .then((res) => {
        sdk.setStorage({
          data: {
            shopToken: res.data.data.token,
          },
          success: (data) => {
            const { errorKeys } = data;
          },
          fail: (error) => {
            console.log(error);
          },
        });
      });
  }, []);

  return (
    <RecoilRoot>
      <ConfigProvider
        cssVariables={{
          "--zmp-primary-color": getConfig((c) => c.template.primaryColor),
          "--zmp-primary-color-rgb": hexToRgb(
            getConfig((c) => c.template.primaryColor)
          ),
        }}
      >
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <ShopApp>
            <App>
              <Suspense
                fallback={
                  <div className=" w-screen h-screen flex justify-center items-center">
                    <Spinner />
                  </div>
                }
              >
                <SnackbarProvider>
                  <ZMPRouter>
                    <Header />
                    <AnimationRoutes>
                      <Route path="/" element={<HomePage></HomePage>}></Route>
                      <Route
                        path="/finish-order"
                        element={<FinishOrder></FinishOrder>}
                      ></Route>
                      <Route
                        path="/detail-product/:productId"
                        element={<DetailProduct></DetailProduct>}
                      ></Route>
                      <Route
                        path="/category"
                        element={<CategoryPage></CategoryPage>}
                      ></Route>
                      <Route
                        path="/user"
                        element={<UserPage></UserPage>}
                      ></Route>
                      <Route
                        path="/search"
                        element={<SearchPage></SearchPage>}
                      ></Route>
                    </AnimationRoutes>
                    <ProductPicker />
                  </ZMPRouter>
                </SnackbarProvider>
              </Suspense>
            </App>
          </ShopApp>
        </QueryClientProvider>
      </ConfigProvider>
    </RecoilRoot>
  );
};
export default MyApp;
