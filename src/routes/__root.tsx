import Sidebar from "@/components/layout/sidebar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Sidebar>
        <Outlet />
      </Sidebar>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
});
