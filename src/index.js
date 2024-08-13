import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import LayoutComponent from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import CartPage from "./pages/CartPage";
import "./scss/app.scss";
import HomePage from "./pages/HomePage";
import GlobalContext from "./context";
import DetailPizzaPage from "./pages/DetailPizzaPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/pizza/:id",
        element: <DetailPizzaPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalContext>
        <RouterProvider router={router} />
      </GlobalContext>
    </Provider>
  </React.StrictMode>
);
