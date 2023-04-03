import "../src/Style/App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./screens/About";
import { Contact } from "./screens/Contact";
import { Home } from "./screens/Home";
import { Api } from "./screens/Api";
import { Error } from "./screens/Error";
import  Footer from "./components/Footer";



function App() {
 
  return (
    <div >
      <Router>
        <NavBar></NavBar>
        <Routes>
        
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/Api" element={<Api/>}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      </Router>
      <div className="fo container-fluid  bg-secondary bg-gradient text-white d-flex align-items-end"><Footer></Footer></div>
      
    </div>
  );
}

export default App;
