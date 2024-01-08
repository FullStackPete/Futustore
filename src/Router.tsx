import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      errorElement:<ErrorPage/>
    }
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
