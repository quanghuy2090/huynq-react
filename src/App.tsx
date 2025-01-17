import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ClientLayout from "./layouts/ClientLayout";
import ClientAntdLayout from "./layouts/ClientAntdLayout";
import { Toaster } from "react-hot-toast";
import ProductDetail from "./pages/ProductDetail";
import { RegisterAntd } from "./pages/antd/RegisterAntd";
import { LoginAntd } from "./pages/antd/LoginAntd";

function App() {
  const routeConfig = [
    {
      path: "",
      element: <ClientLayout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/about", element: <About /> },
        { path: "/product/:id", element: <ProductDetail /> },
      ],
    },
    {
      path: "antd",
      element: <ClientAntdLayout />,
      children: [
        { path: "", element: <Homepage /> },
        { path: "about", element: <About /> },
        { path: "register", element: <RegisterAntd /> },
        { path: "login", element: <LoginAntd /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ];

  const routes = useRoutes(routeConfig);

  return (
    <main>
      {routes}
      <Toaster />
    </main>
  );
}

export default App;
