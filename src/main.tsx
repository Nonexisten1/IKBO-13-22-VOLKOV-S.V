import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Example from "./example.tsx";
import Example2 from "./example2.tsx";
import Example3 from "./example3.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
  },
  {
    path: "example",
    element: <Example></Example>
  },
  {
    path: "example2",
    element: <Example2></Example2>
  },
  {
    path: "example3",
    element: <Example3></Example3>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
