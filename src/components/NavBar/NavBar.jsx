import { useState } from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt2, BiGame } from "react-icons/bi";

function NavBar() {
  const [showNav, setShowNav] = useState(false);
  const [hideClose, setHideClose] = useState(0);

  return (
    <div className="grid row-start-3 col-start-1 sm:row-start-1 sm:col-start-1">
      <div
        className="flex sm:flex-col  whitespace-nowrap overflow-auto w-screen sm:overflow-visible"
        id="navbar"
      >
        <Link
          to="/"
          className="w-16 h-12 sm:w-32   bg-white rounded-lg flex hover:border-orange-600 hover:border-2 active:scale-90 m-1 border-2 border-black  "
        >
          <BiHomeAlt2 className="grid self-center w-16 h-12 sm:w-32 sm:h-12" />
        </Link>
        <button
          to="/menu"
          className="w-16 h-12 rounded-lg  text-center  text-xs bg-white sm:w-32  sm:h-12 sm:text-xl hover:border-orange-600 hover:border-2 active:scale-90 m-1  border-2 border-black"
          aria-label="open or close the navigation menu"
          onClick={() => {
            setShowNav(!showNav);
            setHideClose(0);
          }}
        >
          projects
        </button>
        <div className="flex flex-col">
          {showNav && (
            <Link
              to="/ProjectOne"
              className="grid place-content-center w-16 h-12 rounded-lg  text-center  text-xs bg-white  sm:w-32  sm:h-12 sm:text-xl hover:border-orange-600 hover:border-2 active:scale-90 m-1  border-2 border-black"
              onClick={() => {
                setHideClose((prevHideClose) => (prevHideClose !== 1 ? 1 : 0));
              }}
            >
              Parallax
            </Link>
          )}
          {showNav && hideClose === 1 && (
            <div aria-label="Show Parallax website" className="flex flex-col">
              <Link
                to="/AboutProjOne"
                className="grid place-content-center w-16 h-10 rounded-lg   text-xs active:scale-90 bg-neutral-200 border-2gi  hover:border-orange-600 hover:border-2   sm:w-32  sm:h-12 sm:text-xl mx-1  border-2 border-black"
              >
                info
              </Link>
              <a
                href="https://github.com/RuneKodehode/Parallax"
                target="_blank"
                rel="noreferrer noopener"
                className="grid place-content-center w-16 h-10 rounded-lg active:scale-90  text-center  text-xs bg-neutral-200 border-2gi  hover:border-orange-600 hover:border-2   sm:w-32  sm:h-12 sm:text-xl mx-1  border-2 border-black"
              >
                Github
              </a>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          {showNav && (
            <Link
              to="/ProjectTwo"
              className="grid place-content-center w-16 h-12 rounded-lg  text-center  text-xs bg-white  sm:w-32  sm:h-12 sm:text-xl hover:border-orange-600 hover:border-2 active:scale-90 m-1  border-2 border-black"
              id="pokedexBtn"
              onClick={() => {
                setHideClose((prevHideClose) => (prevHideClose !== 2 ? 2 : 0));
              }}
            >
              Pokedex
            </Link>
          )}
          {showNav && hideClose === 2 && (
            <div className="flex flex-col">
              <Link
                to="/AboutProjTwo"
                className="grid place-content-center w-16 h-10 rounded-lg  text-center active:scale-90 text-xs bg-neutral-200 border-2gi  hover:border-orange-600 hover:border-2   sm:w-32  sm:h-12 sm:text-xl mx-1  border-2 border-black"
              >
                info
              </Link>
              <a
                href="https://github.com/RuneKodehode/Pokedex"
                target="_blank"
                rel="noreferrer noopener"
                className="grid place-content-center w-16 h-10 rounded-lg  text-center active:scale-90 text-xs bg-neutral-200 border-2gi  hover:border-orange-600 hover:border-2   sm:w-32  sm:h-12 sm:text-xl mx-1  border-2 border-black"
              >
                Github
              </a>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          {showNav && (
            <Link
              to="/Breakout"
              className="grid place-content-center w-16 h-12 rounded-lg  text-center  text-xs bg-white  sm:w-32  sm:h-12 sm:text-xl hover:border-orange-600 hover:border-2 active:scale-90 m-1  border-2 border-black"
              onClick={() => {
                setHideClose((prevHideClose) => (prevHideClose !== 3 ? 3 : 0));
              }}
            >
              Breakout
            </Link>
          )}
          {showNav && hideClose === 3 && (
            <div className="flex flex-col">
              <Link
                to="/AboutBreakout"
                className="grid place-content-center w-16 h-10 rounded-lg  text-center active:scale-90 text-xs bg-neutral-200 border-2gi  hover:border-orange-600 hover:border-2  hover:border-orange-600 hover:border-2 sm:w-32  sm:h-12 sm:text-xl mx-1  border-2 border-black"
              >
                info
              </Link>
              <a
                href="https://github.com/RuneKodehode/breakout"
                target="_blank"
                rel="noreferrer noopener"
                className="grid place-content-center w-16 h-10 rounded-lg  text-center active:scale-90 text-xs bg-neutral-200 border-2gi  hover:border-orange-600 hover:border-2  hover:border-orange-600 hover:border-2 sm:w-32  sm:h-12 sm:text-xl mx-1  border-2 border-black"
              >
                Github
              </a>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          {showNav && (
            <Link
              to="/Collatz"
              className="grid place-content-center w-16 h-12 rounded-lg  text-center  text-xs bg-white  sm:w-32  sm:h-12 sm:text-xl hover:border-orange-600 hover:border-2 active:scale-90 m-1  border-2 border-black"
              onClick={() => {
                setHideClose((prevHideClose) => (prevHideClose !== 4 ? 4 : 0));
              }}
            >
              Collatz
            </Link>
          )}
          {showNav && hideClose === 4 && (
            <div className="flex flex-col">
              <Link
                to="/AboutCollatz"
                className="grid place-content-center w-16 h-10 rounded-lg  text-center active:scale-90 text-xs bg-neutral-200 border-2gi  hover:border-orange-600 hover:border-2  hover:border-orange-600 hover:border-2 sm:w-32  sm:h-12 sm:text-xl mx-1  border-2 border-black"
              >
                info
              </Link>
              <a
                href="https://github.com/RuneKodehode/Collatz"
                target="_blank"
                rel="noreferrer noopener"
                className="grid place-content-center w-16 h-10 rounded-lg  text-center active:scale-90 text-xs bg-neutral-200 border-2gi  hover:border-orange-600 hover:border-2  hover:border-orange-600 hover:border-2 sm:w-32  sm:h-12 sm:text-xl mx-1  border-2 border-black"
              >
                Github
              </a>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          {showNav && (
            <Link
              to="/Piano"
              className="grid place-content-center w-16 h-12 rounded-lg  text-center  text-xs bg-white  sm:w-32  sm:h-12 sm:text-xl hover:border-orange-600 hover:border-2 active:scale-90 m-1  border-2 border-black"
              onClick={() => {
                setHideClose((prevHideClose) => (prevHideClose !== 5 ? 5 : 0));
              }}
            >
              Piano
            </Link>
          )}
          {showNav && hideClose === 5 && (
            <div className="flex flex-col">
              <Link
                to="/AboutPiano"
                className="grid place-content-center w-16 h-10 rounded-lg  text-center active:scale-90 text-xs bg-neutral-200 border-2gi  hover:border-orange-600 hover:border-2  hover:border-orange-600 hover:border-2 sm:w-32  sm:h-12 sm:text-xl mx-1  border-2 border-black"
              >
                info
              </Link>
              <a
                href="https://github.com/RuneKodehode/Drums"
                target="_blank"
                rel="noreferrer noopener"
                className="grid place-content-center w-16 h-10 rounded-lg  text-center active:scale-90 text-xs bg-neutral-200 border-2gi  hover:border-orange-600 hover:border-2  hover:border-orange-600 hover:border-2 sm:w-32  sm:h-12 sm:text-xl mx-1  border-2 border-black"
              >
                Github
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { NavBar };
