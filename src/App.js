import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import translations from "./utils/translations";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    document.title = translations[language].title;
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar toggleLanguage={toggleLanguage} language={language} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home translations={translations[language]} />} />
          <Route path="/projects" element={<Projects translations={translations[language]} />} />
          <Route path="/about" element={<About translations={translations[language]} />} />
          <Route path="/cv" element={<Resume translations={translations[language]} />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
