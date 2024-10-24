import { Home } from "./pages/Home";
import { PlanAVisit } from "./pages/PlanAVisit";
import { Hours } from "./pages/Hours";
import { Team } from "./pages/Team";
import { Services } from "./pages/Services";
import { RootLayout } from "./layout/RootLayout";
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
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
