import { Route, Routes } from "react-router-dom";
import { ADMIN_ROLE } from "../../helpers/constants";
import Dashboard from "../../pages/admin/dashboard/Dashboard";
import DashboardPage from "../../pages/admin/dashboard/DashboardPage";
import NewService from "../../pages/admin/jobs/NewService";
import Home from "../../pages/home/Home";

function RouterComponent() {
  const routes = [
    {
      path: "/",
      element: <Home />,
      index: true,
    },
    {
      path: "admin",
      element: <Dashboard />,
      children: [
        {
          path: "dashboard",
          element: <DashboardPage />,
          index: true,
        },
        {
          path: "jobs/new",
          element: <NewService />,
        },
      ],
    },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={route.element}
          index={route.index}
        >
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
