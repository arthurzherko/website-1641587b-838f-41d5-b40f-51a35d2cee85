import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Reasons } from "./pages/reasons";
import { Fun } from "./pages/fun";

const Routes = () => (
  <RouterRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/reasons" element={<Reasons />} />
    <Route path="/fun" element={<Fun />} />
  </RouterRoutes>
);

export { Routes };