import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import ContactUs from "./components/contactUs";
import AboutUs from "./components/aboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
