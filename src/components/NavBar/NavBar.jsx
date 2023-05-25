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
        <Link to="/" className=" py-2 w-24 ">
          <a className="navbuttons rounded grid mx-auto py-2 w-24 focus:invert border border-opacity-0 hover:border hover:border-orange-400 text-center ">
            Menu
          </a>
          {/* Adjust the size and spacing as needed */}
        </Link>
        <ul className="sub-menu ease-in-out  duration-700">
          <div className="flex">
            <Link
              to="/ProjectOne"
              className="navbuttons rounded-l-lg py-2 w-24 focus:invert text-center "
            >
              Parallax
            </Link>
            <Link
              to="/ProjectTwo"
              className="navbuttons py-2 w-24 focus:invert text-center"
              id="pokedexBtn"
            >
              Pokedex
            </Link>

            <Link
              to="/Breakout"
              className="navbuttons py-2 w-24 focus:invert text-center"
            >
              Breakout
            </Link>
            <Link
              to="/Collatz"
              className="navbuttons py-2 w-24 focus:invert text-center"
            >
              Collatz
            </Link>

            <Link
              to="/Piano"
              className="navbuttons py-2 w-24 focus:invert text-center"
            >
              Piano
            </Link>
            <Link
              to="/Rover"
              className="navbuttons rounded-r-lg py-2 w-24 focus:invert text-center"
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
