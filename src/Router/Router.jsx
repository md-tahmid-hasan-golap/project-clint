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
import ActiveGargenrs from "../Components/ActiveGargenrs";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/activeGargenrs"),
        Component: Home,
      },
      {
        path: "/exploreGardeners",
        loader: () => fetch("http://localhost:3000/activeGargenrs?show=all"),
        Component: ExploreGardeners,
      },
      {
        path: "/browseTips",
        loader: () => fetch("http://localhost:3000/ShareGardenTip"),
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
        path: "activeGardenrs",
        Component: ActiveGargenrs,
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
