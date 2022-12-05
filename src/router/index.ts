import React from "react";

export interface IRouteBase {
  path: string;
  component?: any;
  // 302 跳转
  redirect?: string;

  meta?: IRouteMeta;
}
export interface IRouteMeta {
  title: string;
  icon?: string;
}
export interface IRoute extends IRouteBase {
  children?: IRoute[];
}
const routes: IRoute[] = [
  {
    path: "/login",
    component: React.lazy(() => import("../pages/login")),
    meta: {
      title: "123",
    },
  },
  {
    path: "/manage",
    component: React.lazy(() => import("../layout")),
    children: [
      {
        path: "home",
        component: React.lazy(() => import("../pages/home")),
      },
      {
        path: "client",
        component: React.lazy(() => import("../pages/client")),
      },
      {
        path: "cleaner",
        component: React.lazy(() => import("../pages/cleaner")),
      },
      {
        path: "message",
        component: React.lazy(() => import("../pages/message")),
      },
      {
        path: "shopping",
        component: React.lazy(() => import("../pages/shopping")),
      },
      {
        path: "order",
        component: React.lazy(() => import("../pages/order")),
      },
    ],
  },
];
export default routes;
