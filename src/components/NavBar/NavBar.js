import "./NavBar.css";
import { useState } from "react";
function NavBar() {
  const [showNav, setShowNav] = useState(false);
  const [showProj, setShowProj] = useState(false);
  const [showProjTwo, setShowProjTwo] = useState(false);
  return (
    <div id="navId">
      <button
        className="navBtn"
        onClick={() => {
          setShowNav(!showNav);
        }}
      >
        Main
      </button>
      <div className="btnDiv">
        {showNav && (
          <button
            id="projectOne"
            className="navBtn projOne"
            onClick={() => {
              setShowProj(!showProj);
            }}
          >
            proj-1
          </button>
        )}
        {showProj && showNav && (
          <div className="btnDiv">
            <button className="projOne navBtn">About</button>
            <button className="projOne navBtn">GitHub</button>
          </div>
        )}
      </div>
      <div className="btnDiv">
        {showNav && (
          <button
            className="navBtn projOne"
            onClick={() => {
              setShowProjTwo(!showProjTwo);
            }}
          >
            proj-1
          </button>
        )}
        {showProjTwo && showNav && (
          <div className="btnDiv">
            <button className="projOne navBtn">About</button>
            <button className="projOne navBtn">GitHub</button>
          </div>
        )}
      </div>
      {showNav && <button className="navBtn">GitHub Repo</button>}
    </div>
  );
}

export { NavBar };
