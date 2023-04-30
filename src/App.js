import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import ListMovies from "./Components/ListMovies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Trailer from "./Components/Trailer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<ListMovies />} />
          <Route path="/trailer/:id" element={<Trailer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
