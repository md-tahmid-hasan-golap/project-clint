import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Components/Home";
import ExploreGardeners from "../Components/ExploreGardeners";
import BrowseTips from "../Components/BrowseTips";
import ShareTip from "../Components/ShareTip";
import MyTips from "../Components/MyTips";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/exploreGardeners",
        Component: ExploreGardeners,
      },
      {
        path: "/browseTips",
        Component: BrowseTips,
      },
      {
        path: "/shareGardenTip",
        element: (
          <PrivateRoute>
            <ShareTip></ShareTip>
          </PrivateRoute>
        ),
      },
      {
        path: "/myTips",
        element: (
          <PrivateRoute>
            <MyTips></MyTips>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
