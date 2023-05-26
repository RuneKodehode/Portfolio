import { useState } from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt2, BiGame } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

function NavBar() {
  const [showNav, setShowNav] = useState(false);
  const [hideClose, setHideClose] = useState(0);

  return (
    <div className="fixed sm:flex flex-col w-screen bg-yellow-200 bg-opacity-25 h-0 ">
      <div className="menu mx-auto" tab-index="0">
        <div className="flex justify-center gap-0.5 mb-0">
          <Link to="/" className=" py-2 w-24 ">
            <a className="navbuttons rounded grid mx-auto py-2 w-24 focus:invert border border-opacity-0 hover:border hover:border-orange-400 text-center ">
              Home
            </a>
          </Link>
          <Link to="/Contact" className=" py-2 w-24 ">
            <a className="navbuttons rounded grid mx-auto py-2 w-24 focus:invert border border-opacity-0 hover:border hover:border-orange-400 text-center ">
              Contact
            </a>
          </Link>
          <div className="py-2 w-24">
            <a
              href="https://github.com/RuneKodehode?tab=repositories"
              target="_blank"
              className="navbuttons rounded grid mx-auto py-2 w-24 focus:invert border border-opacity-0 hover:border hover:border-orange-400 text-center "
            >
              GitHub
            </a>
          </div>
        </div>
        <ul className="sub-menu ease-in-out  duration-700">
          <div className="flex gap-0.5">
            <Link
              to="/ProjectOne"
              className="navbuttons rounded py-2 w-24 focus:invert text-center "
            >
              Parallax
            </Link>
            <Link
              to="/ProjectTwo"
              className="navbuttons rounded py-2 w-24 focus:invert text-center"
              id="pokedexBtn"
            >
              Pokedex
            </Link>

            <Link
              to="/Breakout"
              className="navbuttons rounded py-2 w-24 focus:invert text-center"
            >
              Breakout
            </Link>
            <Link
              to="/Collatz"
              className="navbuttons rounded py-2 w-24 focus:invert text-center"
            >
              Collatz
            </Link>

            <Link
              to="/Piano"
              className="navbuttons rounded py-2 w-24 focus:invert text-center"
            >
              Piano
            </Link>
            <Link
              to="/Rover"
              className="navbuttons rounded py-2 w-24 focus:invert text-center"
            >
              Mission
            </Link>
          </div>
        </ul>
      </div>
      {/* LEGACY NAVBAR */}
    </div>
  );
}

export { NavBar };
