import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./screens/Home.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "./providers/theme/ThemeProvider.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { Favorites } from "./screens/Favorites.tsx";
import { PAGE } from "./config/page.config.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={PAGE.HOME} element={<Home />} />
            <Route path={PAGE.FAVORITES} element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
