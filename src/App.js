import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Pinfo } from "./screens/Pinfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./screens/About";
import { Contact } from "./screens/Contact";
import { Home } from "./screens/Home";

function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
