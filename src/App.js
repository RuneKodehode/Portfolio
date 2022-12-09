import { NavBar } from "./components/NavBar/NavBar.js";
import { About } from "./components/About/About.js";
import { Projects } from "./components/Projects/Projects.js";
import { Icons } from "./components/Icons/Icons.js";
function App() {
  return (
    <div className="App">
      <div id="header">
        <NavBar />
        <h1>Rune</h1>
        <Projects />
        <About />
        <Icons />
      </div>
    </div>
  );
}

export default App;
