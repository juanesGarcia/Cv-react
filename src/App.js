import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./screens/About";
import { Contact } from "./screens/Contact";
import { Home } from "./screens/Home";
import { Api } from "./screens/Api";
import  Footer from "./components/Footer";

function App() {

  return (
    <div>
  
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/Api" element={<Api/>}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
