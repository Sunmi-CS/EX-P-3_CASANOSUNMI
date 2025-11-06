import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Countries from "./pages/Countries";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">🌍 World Explorer</Link>
          <div>
            <Link className="nav-link d-inline text-white mx-2" to="/">Home</Link>
            <Link className="nav-link d-inline text-white mx-2" to="/countries">Countries</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>
    </>
  );
}

export default App;
