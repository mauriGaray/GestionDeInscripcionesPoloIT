import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "/logo.png";
import Profile from "/profile.png";

export const Navbar = () => {
  const [menuMob, setMenuMob] = useState(true);

  return (
    <nav className="bg-indigo-100">
      <div className="mx-auto max-w-7xl px-2 lg:px-6 sm:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              id="menuButton"
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-neutral-950 hover:bg-stone-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMenuMob(!menuMob)}>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center md:justify-start lg:items-stretch ">
            <Link to={"/"}>
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto md:mr-8 lg:mr-16"
                  src={Logo}
                  alt="Logo"
                />
              </div>
            </Link>
            <div className="hidden md:flex lg:block ">
              <div className="flex space-x-4">
                <li className="text-white list-none">
                  <Link to={"/"}>
                    <button className="text-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-bold text-base">
                      Proyectos en proceso
                    </button>
                  </Link>
                </li>
                <li className="text-white list-none">
                  <Link to={"/"}>
                    <button className="text-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-bold text-base">
                      Nosotros
                    </button>
                  </Link>
                </li>
                <li className="text-white list-none">
                  <Link to={"/"}>
                    <button className="text-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-bold text-base">
                      Contacto
                    </button>
                  </Link>
                </li>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex absolute inset-y-0 right-0 items-center pr-2 font-bold text-lg md:flex  lg:static lg:inset-auto lg:ml-6 lg:pr-0">
            <button className="relative ml-3 text-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-bold text-base">
              <li className="list-none">
                <Link to={"/login"}>Iniciar sesión</Link>
              </li>
            </button>
          </div>
        </div>
      </div>

      {menuMob ? (
        <div className="hidden"></div>
      ) : (
        <div className="lg:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <li className="text-white list-none">
              <Link to={"/"}>
                <button className="text-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  font-bold text-base">
                  Proyectos en proceso
                </button>
              </Link>
            </li>
            <li className="text-white list-none">
              <Link to={"/"}>
                <button className="text-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  font-bold text-base">
                  Nosotros
                </button>
              </Link>
            </li>
            <li className="text-white list-none">
              <Link to={"/"}>
                <button className="text-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  font-bold text-base">
                  Contacto
                </button>
              </Link>
            </li>
          </div>
        </div>
      )}
    </nav>
  );
};
