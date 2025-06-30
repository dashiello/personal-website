import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const root = document.querySelector(":root");
if (root) {
  const localColorScheme = localStorage.getItem("color-scheme");
  if (localColorScheme) {
    root.className = localColorScheme;
  } else {
    const prefersDarkColorScheme = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );

    if (prefersDarkColorScheme.matches) {
      root.className = "dark";
    } else {
      root.className = "light";
    }
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
