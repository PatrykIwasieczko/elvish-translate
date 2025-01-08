import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { BrowserRouter } from "react-router-dom";

import PiwikPro from "@piwikpro/react-piwik-pro";

PiwikPro.initialize(
  import.meta.env.VITE_PIWIK_PRO_KEY,
  import.meta.env.VITE_PIWIK_PRO_URL
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
