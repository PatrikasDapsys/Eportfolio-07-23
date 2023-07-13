import { useState } from "react";
import HomePage from "./components/HomePage";
import MouseTracker from "./components/MouseTracker";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <Router>
      <div className="relative overflow-hidden min-h-screen">
        <MouseTracker isDarkMode={isDarkMode}/>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <HomePage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
