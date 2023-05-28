import { Route, Routes } from "react-router-dom";
import "./App.css";
import FooterCom from "./components/FooterCom";
import NavBarCom from "./components/NavBarCom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
// import { Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="bg-gray-400">
      <NavBarCom />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
      <h1>hello</h1>
      <FooterCom />
    </div>
  );
}

export default App;
