import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Animals } from "./pages/Animals";
import { AnimalInfo } from "./pages/AnimalInfo";
import { zooLoader } from "./loaders/zooLoader";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  { path: "/", element: <Home></Home>, errorElement: <Error></Error> },
  {
    path: "/animals",
    element: <Animals></Animals>,
    errorElement: <Error></Error>,
    loader: zooLoader,
  },
  {
    path: "/animals/:id",
    element: <AnimalInfo></AnimalInfo>,
    loader: zooLoader,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
