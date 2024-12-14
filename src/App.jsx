import { Home } from "./pages/Home";
import { PlanAVisit } from "./pages/PlanAVisit";
import { Hours } from "./pages/Hours";
import { Team } from "./pages/Team";
import { Services } from "./pages/Services";
import { RootLayout } from "./layout/RootLayout";
import { NotFound } from "./pages/NotFound";
import { MissionTestimonial } from "./pages/MissionTestimonial";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="our-team" element={<Team />} />
        <Route path="hours" element={<Hours />} />
        <Route path="plan-a-visit" element={<PlanAVisit />} />
        <Route path="mission-testimonials" element={<MissionTestimonial />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    ),
    { basename: "/whmc-website" } // Set basename here in options
  );
  console.log("App.jsx has been loaded");
  return <RouterProvider router={router} />;
}

export default App;
