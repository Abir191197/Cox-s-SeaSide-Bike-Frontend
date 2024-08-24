import { StrictMode } from "react";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/route";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <ToastContainer />
      </PersistGate>
    </Provider>
  </StrictMode>
);
