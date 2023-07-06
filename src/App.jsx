import LandingPage from "./components/LandingPage";
import MouseTracker from "./components/MouseTracker";

function App() {


  return (
    <>
      <div className="relative overflow-hidden min-h-screen">
        <MouseTracker />
        <LandingPage />
      </div>
    </>
  );
}

export default App;
