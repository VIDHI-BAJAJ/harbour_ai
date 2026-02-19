import { Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import "./index.css";
import Pricing from "./pages/pricing";

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
