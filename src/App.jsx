import { lazy } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const RootLayout = lazy(() => import("./layouts/RootLayout"));
const Home = lazy(() => import("./pages/Home"));
const TourDetails = lazy(() => import("./pages/TourDetails"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: ":id",
          element: <TourDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
