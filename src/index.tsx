import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Animals } from "./pages/Animals";
import { AnimalInfo } from "./pages/AnimalInfo";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  { path: "/", element: <Home></Home>, errorElement: <Error></Error> },
  {
    path: "/animals",
    element: <Animals></Animals>,
    errorElement: <Error></Error>,
    children: [],
  },
  {
    path: "/animals/:id",
    element: <AnimalInfo></AnimalInfo>,
    errorElement: <Error></Error>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
