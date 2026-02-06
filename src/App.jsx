import React, { useState } from "react";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import WomensHealth from "./components/WomensHealth";
import MenstrualTracker from "./components/MenstrualTracker";
import HealthTracker from "./components/HealthTracker";
import SafetySupport from "./components/SafetySupport";
import Education from "./components/Education";
import Financial from "./components/Financial";
import Community from "./components/Community";

export default function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [page, setPage] = useState("home");

  function renderPage() {
    switch (page) {
      case "womenHealth":
        return <WomensHealth />;
      case "education":
        return <Education />;
      case "healthTracker":
        return <HealthTracker />;
      case "safety":
        return <SafetySupport />;
      case "finance":
        return <Financial />;
      case "community":
        return <Community />;
      default:
        return <Home setPage={setPage} />;
    }
  }

  function handleChecked() {
    setIsClicked(true);
  }

  return isClicked ? (
    <div>
      <Navbar page={page} setPage={setPage} /> {renderPage()}
    </div>
  ) : (
    <Landing onCheck={handleChecked} />
  );
}
