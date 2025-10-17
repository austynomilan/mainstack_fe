import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "./components/ui/provider";
import CentralNavigation from "./routes/CentralNavigation";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider >
      <CentralNavigation />
    </Provider>
  </StrictMode>
);
