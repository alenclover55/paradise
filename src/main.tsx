import { createRoot } from "react-dom/client";

import "./index.scss";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routing.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
