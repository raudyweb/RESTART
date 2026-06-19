import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Carta from "./pages/Carta.pdf";
import FoodTruck from "./pages/FoodTruck.tsx";
import MacuBakery from "./pages/MacuBakery.tsx";
import NotFound from "./pages/NotFound.tsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/sobre-nosotros" element={<About />} />
      <Route path="/carta" element={<Carta />} />
      <Route path="/food-truck" element={<FoodTruck />} />
      <Route path="/macu-bakery" element={<MacuBakery />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
export default App;
