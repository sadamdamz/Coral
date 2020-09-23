import React from "react";
import Home from "./Client/Home/index";
import About from "./Client/About/index";
import Contact from "./Client/Contact/index";
import ProjectDetails from "./Client/ProjectDetails/index";

const routes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    component: Home,
  },
  {
    path: "/aboutus",
    exact: true,
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    exact: true,
    name: "Contact",
    component: Contact,
  },
  {
    path: "/project-details",
    exact: true,
    name: "Project-Details",
    component: ProjectDetails,
  },
]

export default routes;