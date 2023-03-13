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
          className="w-16 h-12 sm:w-32 text-black font-bold  bg-white  rounded-lg flex hover:invert active:animate-ping m-1"
        >
          <button aria-label="Home button" className="rounded-lg w-full h-full">
            <BiHomeAlt2 className="w-10 h-12 sm:w-32  mr-auto ml-auto" />
          </button>
        </Link>
        <button
          to="/menu"
          className="w-16 h-12 rounded-lg font-bold text-black text-center  text-xs bg-white sm:w-32  sm:h-12 sm:text-lg hover:invert active:animate-ping m-1"
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
            <Link to="/ProjectOne">
              <button
                aria-label="Parallax text button"
                className="w-16 h-12 rounded-lg text-black text-center font-bold  text-xs bg-white  sm:w-32  sm:h-12 sm:text-lg hover:invert active:animate-ping m-1"
                onClick={() => {
                  setHideClose((prevHideClose) =>
                    prevHideClose !== 1 ? 1 : 0
                  );
                }}
              >
                Parallax
              </button>
            </Link>
          )}
          {showNav && hideClose === 1 && (
            <div aria-label="Show Parallax website" className="flex flex-col">
              <Link to="/AboutProjOne" className="w-auto h-auto">
                <button className=" w-16 h-10 rounded-lg text-black text-center  text-xs bg-slate-400 font-bold  hover:invert sm:w-32  sm:h-12 sm:text-lg m-1">
                  info
                </button>
              </Link>
              <a
                href="https://github.com/RuneKodehode/Parallax"
                target="_blank"
                rel="noreferrer noopener"
                className="w-16 h-auto"
              >
                <button
                  aria-label="Button to Parallax Github"
                  className=" w-16 h-10 rounded-lg text-black text-center  text-xs bg-slate-400 font-bold  hover:invert sm:w-32  sm:h-12 sm:text-lg m-1"
                >
                  Github
                </button>
              </a>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          {showNav && (
            <Link to="/ProjectTwo" className="">
              <button
                aria-label="Pokedex text button"
                className="w-16 h-12 rounded-lg text-black text-center font-bold  text-xs bg-white  sm:w-32  sm:h-12 sm:text-lg hover:invert active:animate-ping m-1"
                id="pokedexBtn"
                onClick={() => {
                  setHideClose((prevHideClose) =>
                    prevHideClose !== 2 ? 2 : 0
                  );
                }}
              >
                Pokedex
              </button>
            </Link>
          )}
          {showNav && hideClose === 2 && (
            <div className="flex flex-col">
              <Link to="/AboutProjTwo" className="w-auto h-auto ">
                <button
                  aria-label="show Pokedex"
                  className=" w-16 h-10 rounded-lg text-black text-center  text-xs bg-slate-400 font-bold  hover:invert sm:w-32  sm:h-12 sm:text-lg m-1"
                >
                  info
                </button>
              </Link>
              <a
                href="https://github.com/RuneKodehode/Pokedex"
                target="_blank"
                rel="noreferrer noopener"
                className=""
              >
                <button
                  aria-label="Link to Pokedex Github"
                  className=" w-16 h-10 rounded-lg text-black text-center  text-xs bg-slate-400 font-bold  hover:invert sm:w-32  sm:h-12 sm:text-lg m-1"
                >
                  Github
                </button>
              </a>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          {showNav && (
            <Link to="/Breakout" className=" w-aut h-auto">
              <button
                aria-label="Button to show Breakout text"
                id="breakout"
                className="w-16 h-12 rounded-lg text-black text-center font-bold  text-xs bg-white  sm:w-32  sm:h-12 sm:text-lg hover:invert active:animate-ping m-1"
                onClick={() => {
                  setHideClose((prevHideClose) =>
                    prevHideClose !== 3 ? 3 : 0
                  );
                }}
              >
                Breakout
              </button>
            </Link>
          )}
          {showNav && hideClose === 3 && (
            <div className="flex flex-col">
              <Link to="/AboutBreakout" className="w-auto h-auto ">
                <button
                  aria-label="Button to Play Breakout"
                  className=" w-16 h-10 rounded-lg text-black text-center  text-xs bg-slate-400 font-bold  hover:invert sm:w-32  sm:h-12 sm:text-lg m-1"
                >
                  info
                </button>
              </Link>
              <a
                href="https://github.com/RuneKodehode/breakout"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button
                  aria-label="Button to Breakout Github link"
                  className=" w-16 h-10 rounded-lg text-black text-center  text-xs bg-slate-400 font-bold  hover:invert sm:w-32  sm:h-12 sm:text-lg m-1"
                >
                  Github
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { NavBar };
