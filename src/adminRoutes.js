import React from "react";
import Dashboard from "./Admin/Container/index";
import Leads from "./Admin/Components/LeadList";
import BannerList from "./Admin/Components/BannerList";
import AddBanner from "./Admin/Components/AddBanner";

const routes = [
  {
    path: "/cc-admin/",
    exact: true,
    name: "Dashboard",
  },
  {
    path: "/cc-admin/dashboard",
    exact: true,
    name: "Dashboard",
    component: Leads,
  },
  {
    path: "/cc-admin/dashboard/leads",
    exact: true,
    name: "Leads",
    component: Leads,
  },
  {
    path: "/cc-admin/dashboard/banner-list",
    exact: true,
    name: "Banner",
    component: BannerList,
  },
  {
    path: "/cc-admin/dashboard/add-banner",
    exact: true,
    name: "Banner",
    component: AddBanner,
  },
]

export default routes;