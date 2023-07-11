import HomePage from "./components/HomePage";
import MouseTracker from "./components/MouseTracker";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="relative overflow-hidden min-h-screen">
        <MouseTracker />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
