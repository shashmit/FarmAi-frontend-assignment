import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import OutputBox from "./page/OutputBox";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/output" element={<OutputBox />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
