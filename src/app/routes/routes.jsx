import { Route, Routes } from "react-router-dom";
import { ADMIN_ROLE } from "../../helpers/constants";
import Dashboard from "../../pages/admin/dashboard/Dashboard";
import DashboardPage from "../../pages/admin/dashboard/DashboardPage";
import NewService from "../../pages/admin/jobs/NewService";
import Home from "../../pages/home/Home";
import Jobs from "../../pages/admin/jobs/Jobs";
import Bookings from "../../pages/admin/bookings/Bookings";
import Users from "../../pages/admin/users/Users";
import ViewListing from "../../pages/home/ViewListing";
import Payment from "../../pages/payment/Payment";
import MyBookings from "../../pages/my-bookings/MyBookings";
import ViewPdf from "../../pages/pdf/ViewPdf";

function RouterComponent() {
  const routes = [
    {
      path: "/",
      element: <Home />,
      index: true,
    },
    {
      path: "/:id",
      element: <ViewListing />,
    },
    {
      path: "/payments/:id",
      element: <Payment />,
    },
    {
      path: "/bookings/mine",
      element: <MyBookings />,
    },
    {
      path: "pdf",
      element: <ViewPdf />,
    },

    {
      path: "admin",
      element: <Dashboard />,
      children: [
        {
          path: "/admin/dashboard",
          element: <DashboardPage />,
          index: true,
        },
        {
          path: "jobs",
          element: <Jobs />,
        },
        {
          path: "jobs/new",
          element: <NewService />,
        },
        {
          path: "jobs/edit/:id",
          element: <NewService />,
        },
        {
          path: "bookings",
          element: <Bookings />,
        },
        {
          path: "users",
          element: <Users />,
        },
      ],
    },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} index={route.index}>
          {route.children && (
            <>
              {route.children.map((child, index) => (
                <Route key={index} path={child.path} element={child.element} />
              ))}
            </>
          )}
        </Route>
      ))}
    </Routes>
  );
}

export default RouterComponent;
