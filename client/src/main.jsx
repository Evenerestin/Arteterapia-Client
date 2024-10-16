import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import { ArtCategories } from "./config";
// import ArtCategories from "./childComponents";
import DashboardCategory from "./components/DashboardCategory";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";
import About from "./pages/About";
import Art from "./pages/Art";
import CategoryGallery from "./pages/CategoryGallery";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Didactics from "./pages/Didactics";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
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
        path: "logowanie",
        element: <LogIn />,
      },
      {
        path: "panel",
        element: <ProtectedRoute element={<Dashboard />} />,
        children: ArtCategories.map((item) => ({
          path: item.path,
          element: <DashboardCategory category={item.category} />,
        })),
        // children: [
        //   {
        //     path: "/malarstwo",
        //   },
        //   {
        //     path: "/rzezba",
        //   },
        //   {
        //     path: "/malarstwo",
        //   },
        // ]
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router}>
    <Root />
  </RouterProvider>
  // </React.StrictMode>
);
