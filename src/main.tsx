import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "./components/ui/provider";
import CentralNavigation from "./routes/CentralNavigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SkeletonTheme>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <CentralNavigation />
        </Provider>
      </QueryClientProvider>
    </SkeletonTheme>
  </StrictMode>
);
