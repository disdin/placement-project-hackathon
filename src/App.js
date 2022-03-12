import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Hiring from "./pages/Hiring";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/student" element={<Students />}></Route>
          <Route path="/hiring" element={<Hiring />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
