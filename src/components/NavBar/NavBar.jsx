import { useState } from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt2, BiGame } from "react-icons/bi";

function NavBar() {
  const [showNav, setShowNav] = useState(false);
  const [hideClose, setHideClose] = useState(0);

  return (
    <div className="grid row-start-3 col-start-1 sm:row-start-1 sm:col-start-1">
      <div className="flex sm:flex-col" id="navbar">
        <Link
          to="/"
          className="w-16 h-12 sm:w-32 text-black font-bold  bg-white  rounded-lg flex hover:border-orange-600 hover:border-2 active:scale-90 m-1"
        >
          <BiHomeAlt2 className="w-16 h-12 sm:w-32 sm:h-12  mr-auto ml-auto" />
        </Link>
        <button
          to="/menu"
          className="w-16 h-12 rounded-lg font-bold text-black text-center  text-xs bg-white sm:w-32  sm:h-12 sm:text-lg hover:border-orange-600 hover:border-2 active:scale-90 m-1"
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
              className="grid place-content-center w-16 h-12 rounded-lg text-black text-center font-bold  text-xs bg-white  sm:w-32  sm:h-12 sm:text-lg hover:border-orange-600 hover:border-2 active:scale-90 m-1"
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
                className="grid place-content-center w-16 h-10 rounded-lg text-black  text-xs active:scale-90 bg-slate-400 border-2gi border-orange-400 hover:border-orange-600 hover:border-2 font-bold  hover:border-orange-600 hover:border-2 sm:w-32  sm:h-12 sm:text-lg mx-1"
              >
                info
              </Link>
              <a
                href="https://github.com/RuneKodehode/Parallax"
                target="_blank"
                rel="noreferrer noopener"
                className="grid place-content-center w-16 h-10 rounded-lg active:scale-90 text-black text-center  text-xs bg-slate-400 border-2gi border-orange-400 hover:border-orange-600 hover:border-2 font-bold  hover:border-orange-600 hover:border-2 sm:w-32  sm:h-12 sm:text-lg mx-1"
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
              className="grid place-content-center w-16 h-12 rounded-lg text-black text-center font-bold  text-xs bg-white  sm:w-32  sm:h-12 sm:text-lg hover:border-orange-600 hover:border-2 active:scale-90 m-1"
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
                className="grid place-content-center w-16 h-10 rounded-lg text-black text-center active:scale-90 text-xs bg-slate-400 border-2gi border-orange-400 hover:border-orange-600 hover:border-2 font-bold  hover:border-orange-600 hover:border-2 sm:w-32  sm:h-12 sm:text-lg mx-1"
              >
                info
              </Link>
              <a
                href="https://github.com/RuneKodehode/Pokedex"
                target="_blank"
                rel="noreferrer noopener"
                className="grid place-content-center w-16 h-10 rounded-lg text-black text-center active:scale-90 text-xs bg-slate-400 border-2gi border-orange-400 hover:border-orange-600 hover:border-2 font-bold  hover:border-orange-600 hover:border-2 sm:w-32  sm:h-12 sm:text-lg mx-1"
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
              className="grid place-content-center w-16 h-12 rounded-lg text-black text-center font-bold  text-xs bg-white  sm:w-32  sm:h-12 sm:text-lg hover:border-orange-600 hover:border-2 active:scale-90 m-1"
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
                className="grid place-content-center w-16 h-10 rounded-lg text-black text-center active:scale-90 text-xs bg-slate-400 border-2gi border-orange-400 hover:border-orange-600 hover:border-2 font-bold  hover:border-orange-600 hover:border-2 sm:w-32  sm:h-12 sm:text-lg mx-1"
              >
                info
              </Link>
              <a
                href="https://github.com/RuneKodehode/breakout"
                target="_blank"
                rel="noreferrer noopener"
                className="grid place-content-center w-16 h-10 rounded-lg text-black text-center active:scale-90 text-xs bg-slate-400 border-2gi border-orange-400 hover:border-orange-600 hover:border-2 font-bold  hover:border-orange-600 hover:border-2 sm:w-32  sm:h-12 sm:text-lg mx-1"
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
