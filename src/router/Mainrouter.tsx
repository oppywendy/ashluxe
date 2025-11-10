import { createBrowserRouter } from "react-router-dom";
import Layout from "../Block/Layout";
import Homescreen from "../page/Homescreen";
import NigeriaXBrazil from "../component/NigeriaXBrazil";
import NigeriaXBrazilYellow from "../component/NigeriaXBrazilYellow";
import KnittedNeck from "../component/KnittedNeck";
import KnittedNeckBlue from "../component/KnittedNeckBlue";
import CartPage from "../component/CartPage";
import AshluxeWomen from "../component/AshluxeWomen";
import AshluxeBodysuit from "../component/AshluxeBodysuit";
import TrackJacket from "../component/TrackJacket";
import Maxi from "../component/Maxi";
import Metallic from "../component/Metallic";
import MaskGraphic from "../component/MaskGraphic";
import TriangleHoodie from "../component/TriangleHoodie";
import BoldLogoHoodie from "../component/BoldLogoHoodie";
import NigXBrazilShort from "../component/NigXBrazilShort";
import MonogramDenimJacket from "../component/MonogramDenimJacket";
import MonogramDenimPant from "../component/MonogramDenimPant";
import AshluxePatchLogoTshirt from "../component/AshluxePatchLogoTshirt";
import ParadiseSilverSurfer from "../component/ParadiseSilverSurfer";
import American24Jersey from "../component/American24Jersey";
import BrownQuiltedLeatherSlide from "../component/BrownQuiltedLeatherSlide";
import BlackQuiltedLeatherSlide from "../component/BlackQuiltedLeatherSlide";
import BlueQuiltedLeatherSlide from "../component/BlueQuiltedLeatherSlide";
import GreenEmblemLeatherSlide from "../component/GreenEmblemLeatherSlide";

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
        path: "/Ashluxe-Woman-A-Bling-Star-Layered-Crop-Tee",
        element: <AshluxeWomen />,
      },
      {
        path: "/Ashluxe-Bodysuit",
        element: <AshluxeBodysuit />,
      },
      {
        path: "/Ashluxe-Female-Printed-Track-Jacket-Pink-Flower-Aop",
        element: <TrackJacket />,
      },
      {
        path: "/Ashluxe-Maxi-Long-Dress",
        element: <Maxi />,
      },
      {
        path: "/Metallic-Small-Logo-Sweatshirt",
        element: <Metallic />,
      },
      {
        path: "/Mask-Graphic-Sweatshirt",
        element: <MaskGraphic />,
      },
      {
        path: "/Triangle-Logo-Hoodie",
        element: <TriangleHoodie />,
      },
      {
        path: "/Ashluxe-Bold-Logo-Hoodie",
        element: <BoldLogoHoodie />,
      },
      {
        path: "/Nigeria_X_Brazil_Football_Shorts",
        element: <NigXBrazilShort />,
      },
      {
        path: "/Ashluxe_Monogram_Denim_Jacket",
        element: <MonogramDenimJacket />,
      },
      {
        path: "/Ashluxe_Monogram_Denim_Pant",
        element: <MonogramDenimPant />,
      },
      {
        path: "/Ashluxe_Patch_Logo_T-shirt",
        element: <AshluxePatchLogoTshirt />,
      },
      {
        path: "/Ashluxe_Paradise_Silver_Surfer",
        element: <ParadiseSilverSurfer />,
      },
      {
        path: "/Ash_American_24_Jersey",
        element: <American24Jersey />,
      },
      {
        path: "/Brown_Ashluxe_Paradise_Quilted_Leather_Slides",
        element: <BrownQuiltedLeatherSlide />,
      },
      {
        path: "/Black_Ashluxe_Paradise_Quilted_Leather_Slides",
        element: <BlackQuiltedLeatherSlide />,
      },
      {
        path: "/Blue_Ashluxe_Paradise_Quilted_Leather_Slides",
        element: <BlueQuiltedLeatherSlide />,
      },
      {
        path: "/Ashluxe_Emblem_Leather_Slides",
        element: <GreenEmblemLeatherSlide />,
      },
    ],
  },
]);
