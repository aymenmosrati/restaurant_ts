import React, { Suspense, Fragment, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

export const RenderRoutes = ({ routes }: any) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {routes.map((route: any, i: any) => {
        const Guard = route.guard || Fragment;
        const MainLayout = route.layout || Fragment;
        const Component = route.component;
        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Guard>
                <MainLayout>
                  <Component />
                </MainLayout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

export const routes = [
  {
    path: "/",
    // guard: GuestGuard,
    component: lazy(() => import("./pages/Auth/Login")),
  },
  {
    path: "/Home",
    component: lazy(() => import("./pages/Dashboard")),
    layout: MainLayout,
  },
  {
    path: "/Orders",
    component: lazy(() => import("./pages/Dashboard")),
    layout: MainLayout,
  },
  {
    path: "/MenuOperations",
    component: lazy(() => import("./pages/Dashboard")),
    layout: MainLayout,
  },
  {
    path: "/RestaurantInfo",
    component: lazy(() => import("./pages/Dashboard")),
    layout: MainLayout,
  },
  {
    path: "/RestaurantOpenClose",
    component: lazy(() => import("./pages/Dashboard")),
    layout: MainLayout,
  },
  {
    path: "/Accounting",
    component: lazy(() => import("./pages/Dashboard")),
    layout: MainLayout,
  },
  {
    path: "/WorkingHours",
    component: lazy(() => import("./pages/Dashboard")),
    layout: MainLayout,
  },
  {
    path: "/PaymentMethods",
    component: lazy(() => import("./pages/Dashboard")),
    layout: MainLayout,
  },
  {
    path: "/RestaurantReview",
    component: lazy(() => import("./pages/Dashboard")),
    layout: MainLayout,
  },
  {
    path: "/Requests",
    component: lazy(() => import("./pages/Dashboard")),
    layout: MainLayout,
  },
  {
    path: "/LiveHelp",
    component: lazy(() => import("./pages/Dashboard")),
    layout: MainLayout,
  },
];

export default routes;
