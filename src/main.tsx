import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./screens/Home.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "./providers/theme/ThemeProvider.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

import { PAGE } from "./config/page.config.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Favorites } from "./screens/favorites/Favorites.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  </StrictMode>
);
