import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToHash from "./components/ScrollToHash.tsx";

const App = () => (
  <BrowserRouter>
    <ScrollToHash />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/sobre-nosotros" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
