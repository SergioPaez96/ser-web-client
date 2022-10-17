// LAYOUT
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

// ADMIN PAGES
import Admin from "../pages/Admin";
import SignIn from "../pages/Admin/SignIn";
import Users from "../pages/Admin/Users";
import MenuWeb from "../pages/Admin/MenuWeb";

// CLIENT PAGES
import Home from "../pages/Home";
import Contact from "../pages/Contact";

// OTHER
import Error404 from "../pages/Error404";

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: Admin,
        exact: true,
      },
      {
        path: "/admin/login",
        component: SignIn,
        exact: true,
      },
      {
        path: "/admin/users",
        component: Users,
        exact: true,
      },
      {
        path: "/admin/menu",
        component: MenuWeb,
        exact: true,
      },
    ],
  },
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: false,
      },
      {
        path: "/contact",
        component: Contact,
        exact: false,
      },
    ],
  },
];

// const routesClient = [
//   {
//     path: "/",
//     layout: LayoutBasic,
//     component: Home
//   },
//   {
//     path: "/contact",
//     layout: LayoutBasic,
//     component: Contact
//   },
//   {
//     path: "/login",
//     layout: LayoutPruebas,
//     component: SignIn
//   }
// ];

// const routes = [...routesAdmin, ...routesClient]

export default routes;
