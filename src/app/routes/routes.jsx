import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import { isAdmin } from "../../helpers/utils/auth";
import Dashboard from "../../pages/admin/dashboard/Dashboard";
import NewService from "../../pages/admin/jobs/NewService";
import { ADMIN_ROLE } from "../../helpers/constants";
import DashboardPage from "../../pages/admin/dashboard/DashboardPage";

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
          role: ADMIN_ROLE,
        },
        {
          path: "jobs/new",
          element: <NewService />,
          role: ADMIN_ROLE,
        },
      ],
    },
  ];

  return (
    <Routes>
      {routes.map(
        (route, index) =>
          isAdmin(route.role) && (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              index={route.index}
            >
              {route.children && (
                <>
                  {route.children.map((child, index) => (
                    <Route
                      key={index}
                      path={child.path}
                      element={child.element}
                    />
                  ))}
                </>
              )}
            </Route>
          )
      )}
    </Routes>
  );
}

export default RouterComponent;
