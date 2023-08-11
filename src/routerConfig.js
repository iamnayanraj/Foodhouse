import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import ContactUs from "./components/contactUs";
import AboutUs from "./components/aboutUs";
import Error from "./components/error";
import Body from "./components/body";
import RestaurantMenu from "./components/restaurantMenu";
import Cart from "./components/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
