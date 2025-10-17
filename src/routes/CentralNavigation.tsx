import App from "@/App";
import Layout from "@/layout/Layout";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function CentralNavigation() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default CentralNavigation;
