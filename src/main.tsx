import { createRoot } from "react-dom/client";

import "./index.scss";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routing.tsx";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={appRouter} />
);
