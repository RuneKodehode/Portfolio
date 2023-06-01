import { NavBar } from "./components/NavBar/NavBar.jsx";
import { Home } from "./components/Pages/Home";
import { ProjectOne } from "./components/Pages/ProjectOne.jsx";
import { ProjectTwo } from "./components/Pages/ProjectTwo.jsx";
import { Breakout } from "./components/Pages/Breakout.jsx";
import { Collatz } from "./components/Pages/Collatz.jsx";
import { Piano } from "./components/Pages/Piano.jsx";
import { Rover } from "./components/Pages/Rover.jsx";
import { Contact } from "./components/Pages/Contact.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Router>
        <div className="grid sm:grid-rows-[14%_minmax(150px,_auto)_0px] grid-rows-[15%_minmax(150px,_auto)_150px] grid-cols-[7%_minmax(5px,_2fr)_7%] sm:grid-cols-[7%_minmax(5px,_2fr)_16%] h-[100dvh]">
          <NavBar />
          <div className="grid row-start-1 row-span-2 sm:row-span-1 col-start-1 sm:col-span-3 sm:col-start-1 w-screen h-screen">
            <Routes className="flex">
              <Route path="/" element={<Home />} />
              <Route path="/ProjectOne" element={<ProjectOne />} />
              <Route path="/ProjectTwo" element={<ProjectTwo />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Breakout" element={<Breakout />} />
              <Route path="/Collatz" element={<Collatz />} />
              <Route path="/Piano" element={<Piano />} />
              <Route path="/Rover" element={<Rover />} />
              <Route
                path="*"
                element={
                  <div>
                    <h1>404</h1> <p>Page not found</p>
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
