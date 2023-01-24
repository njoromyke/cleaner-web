import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";

function RouterComponent() {
  const routes = [
    {
      path: "/",
      element: <Home />,
      index: true,
    },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default RouterComponent;
