import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
function NavBarTwo() {
  return (
    <div className="grid row-start-1 col-start-3 col-end-2  sm:col-end-3 w-full">
      <div className="flex self-start justify-self-end text-white flex-col -mr-6 sm:mr-0">
        <a
          href="https://github.com/RuneKodehode?tab=repositories"
          target="_blank"
          rel="noreferrer noopener"
          className="grid place-content-center rounded-lg text-black text-center active:scale-90 text-xs bg-white hover:border-orange-600 hover:border-2 font-bold  hover:border-orange-600 hover:border-2 sm:w-32  sm:h-12 sm:text-lg m-1"
        >
          <AiFillGithub className="h-10 w-16" />
        </a>
        <Link
          to="/Contact"
          className="grid place-content-center rounded-lg h-10 w-16 text-black active:scale-90 text-center  text-xs bg-white hover:border-orange-600 hover:border-2 font-bold  hover:border-orange-600 hover:border-2 sm:w-32  sm:h-12 sm:text-lg m-1"
        >
          contact
        </Link>
      </div>
    </div>
  );
}

export { NavBarTwo };
