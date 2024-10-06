import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SlotsPage from "./pages/SlotsPage/SlotsPage";
import DicePage from "./pages/DicePage/DicePage";
import FAQPage from "./pages/FAQPage/FAQPage";
import KenoPage from "./pages/KenoPage/KenoPage";
import MainPage from "./pages/MainPage/MainPage";
import MinesPage from "./pages/MinesPage/MinesPage";
import OpenSlotsPage from "./pages/OpenSlotsPage/OpenSlotsPage";
import PromoCodePage from "./pages/PromoCodePage/PromoCodePage";
import RafflePage from "./pages/RafflePage/RafflePage";
import ReferalsPage from "./pages/ReferalsPage/ReferalsPage";
import TournamentPage from "./pages/TournamentPage/TournamentPage";
import WheelPage from "./pages/WheelPage/WheelPage";
import BonusPage from "./pages/BonusPage/BonusPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import TextPage from "./pages/TextPage/TextPage";
import BubblesPage from "./pages/BubblesPage/BubblesPage";

export const appRouter = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<p>Loading....</p>}>
        <App />
      </Suspense>
    ),
    path: "/",
    children: [
      {
        element: <SlotsPage />,
        path: "/slots",
      },
      {
        element: <DicePage />,
        path: "/dice",
      },
      {
        element: <FAQPage />,
        path: "/faq",
      },
      {
        element: <KenoPage />,
        path: "/keno",
      },
      {
        element: <MainPage />,
        path: "/",
      },
      {
        element: <MinesPage />,
        path: "/mines",
      },
      {
        element: <OpenSlotsPage />,
        path: "/open-slots",
      },
      {
        element: <PromoCodePage />,
        path: "/promo",
      },
      {
        element: <RafflePage />,
        path: "/raffle",
      },
      {
        element: <ReferalsPage />,
        path: "/referals",
      },
      {
        element: <TournamentPage />,
        path: "/tournament",
      },
      {
        element: <WheelPage />,
        path: "/wheel",
      },
      {
        element: <BonusPage />,
        path: "/bonus",
      },
      {
        element: <ProfilePage />,
        path: "/profile",
      },
      {
        element: <TextPage />,
        path: "/text-page",
      },
      {
        element: <BubblesPage />,
        path: "/bubbles",
      },
    ],
  },
]);
