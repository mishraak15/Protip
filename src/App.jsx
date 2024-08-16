import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Help from "./pages/Help/Help";
import New from "./pages/New/New";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </div>
  );
}

export default App;
