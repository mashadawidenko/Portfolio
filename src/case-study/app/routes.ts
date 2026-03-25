import { createBrowserRouter } from "react-router";
import { FlowguardCaseStudy } from "./components/flowguard/FlowguardCaseStudy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: FlowguardCaseStudy,
  },
  {
    path: "/flowguard",
    Component: FlowguardCaseStudy,
  },
]);
