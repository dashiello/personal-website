import OtherProjectsPage from "@/components/pages/otherProjects/otherProjectsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/otherProjects")({
  component: OtherProjects,
});

function OtherProjects() {
  return <OtherProjectsPage />;
}
