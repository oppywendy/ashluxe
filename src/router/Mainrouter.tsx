import { createBrowserRouter } from "react-router-dom";
import Layout from "../Block/Layout";
import Homescreen from "../page/Homescreen";
import NigeriaXBrazil from "../component/NigeriaXBrazil";
import NigeriaXBrazilYellow from "../component/NigeriaXBrazilYellow";
import KnittedNeck from "../component/KnittedNeck";
import KnittedNeckBlue from "../component/KnittedNeckBlue";
import CartPage from "../component/CartPage";
import Testing from "../component/Testing";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homescreen />,
      },
      {
        path: "/Nigeria-X-Brazil-white",
        element: <NigeriaXBrazil />,
      },
      {
        path: "/Nigeria-X-Brazil-yellow",
        element: <NigeriaXBrazilYellow />,
      },
      {
        path: "/knitted-neck-rib",
        element: <KnittedNeck />,
      },
      {
        path: "/knitted-neck-rib-blue",
        element: <KnittedNeckBlue />,
      },
      {
        path: "/cartpage",
        element: <CartPage />,
      },
      {
        path: "/testing",
        element: <Testing />,
      },
    ],
  },
]);
