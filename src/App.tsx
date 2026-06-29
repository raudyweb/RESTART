import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import FoodTruck from "./pages/FoodTruck.tsx";
import MacuBakery from "./pages/MacuBakery.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToHash from "./components/ScrollToHash";

const App = () => (
<BrowserRouter>
  <ScrollToHash />
  <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/sobre-nosotros" element={<About />} />
      <Route 
        path="/carta" 
        element={<a href="/carta.pdf" target="_blank" rel="noopener noreferrer" />}
      />
      <Route path="/food-truck" element={<FoodTruck />} />
      <Route path="/macu-bakery" element={<MacuBakery />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
