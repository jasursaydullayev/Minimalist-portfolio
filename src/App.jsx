import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
// Pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Manage from "./components/Manage";
import Fylo from "./components/Fylo";
import Bookmark from "./components/Bookmark";
import Insure from "./components/Insure";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "contact",
          element: <ContactMe />,
        },
        {
          path: "portfolio/manage",
          element: <Manage />,
        },
        {
          path: "portfolio/bookmark",
          element: <Bookmark />,
        },
        {
          path: "portfolio/fylo",
          element: <Fylo />,
        },
        {
          path: "portfolio/insure",
          element: <Insure />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
