import "./App.css";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import SearchAppBar from "./components/AppBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
