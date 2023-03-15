import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Body from "./components/body/Body";
import Impressum from "./components/Impressum";
import { useMediaQuery } from "./utils/useMediaQuery";
import Error from "./components/Error";

const Container = () => {
  const mobileMQ = useMediaQuery("(max-width: 881px)");

  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      {mobileMQ ? <Contact /> : ""}
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "impressum",
        element: <Impressum />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
