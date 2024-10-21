import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import { ArtCategories } from "./config";
import "./index.css";
import About from "./pages/About";
import Art from "./pages/Art";
import CategoryGallery from "./pages/CategoryGallery";
import Contact from "./pages/Contact";
import Didactics from "./pages/Didactics";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "tworczosc",
        element: <Art />,
        children: ArtCategories.map((item) => ({
          path: item.path,
          element: <CategoryGallery category={item.category} />, // Passing propsValue as prop
        })),
      },
      {
        path: "dydaktyka",
        element: <Didactics />,
      },
      {
        path: "o-mnie",
        element: <About />,
      },
      {
        path: "kontakt",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Root />
    </RouterProvider>
  </React.StrictMode>
);
