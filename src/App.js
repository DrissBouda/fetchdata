import './App.css';
// import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"
import Music from "./pages/Music"
import Bouda from "./pages/Bouda"
import Search from "./pages/Search"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Music />}></Route>
          <Route path="/music" element={<Music />}></Route>
          <Route path="/phpliste" element={<Bouda />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
