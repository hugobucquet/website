import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research";
import Riddles from "./pages/Riddles";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/riddles" element={<Riddles />} />
      </Routes>
    </Router>
  );
}

export default App;