import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/skills" element={<Skills />} /> */}

        <Route
          path="*"
          element={<h1 className="text-3xl">Page non trouvée</h1>}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
