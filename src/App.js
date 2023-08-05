import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Hotels, List } from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotels />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
