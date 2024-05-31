import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import NavbarCom from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
        <NavbarCom />
        <Routes>
          <Route path="/" element={<HomePage />} />{" "}
          <Route path="/register" element={<Register />} />{" "}
          <Route path="/login" element={<Login />} />{" "}
        </Routes>{" "}
        <Footer />
      </Router>{" "}
    </div>
  );
}

export default App;
