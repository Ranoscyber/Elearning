import { useState } from "react";
import { Link, Links, NavLink } from "react-router-dom";

function Header() {

  const [isActiveNavbar,SetIsActiveNavbar] = useState(false)
  
  return (
    <>
  {/* Big Devide Navigation bar */}
      <header className=" font-jost flex justify-between items-center px-2 lg:px-10 border-b border-gray-200 py-5">
        <div className="flex gap-5">
          <button onClick={() => SetIsActiveNavbar(true)} className="inline-block lg:hidden hover:bg-gray-200 p-2 rounded-full hover:text-fuchsia-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>

            <h1 className="text-2xl font-bold">SonarCyber</h1>
          
        </div>

        <ul className="hidden lg:flex gap-5">
          <li>
            <NavLink to="/"
              className="hover:bg-gray-200 hover:text-fuchsia-800 rounded-full py-2 px-4 aria-[current=page]:underline"
              
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Learns"
              className="hover:bg-gray-200 hover:text-fuchsia-800 rounded-full py-2 px-4 aria-[current=page]:underline"
             
            >
              Learn
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact"
              className="hover:bg-gray-200 hover:text-fuchsia-800 rounded-full py-2 px-4 aria-[current=page]:underline"
              href=""
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/About"
              className="hover:bg-gray-200 hover:text-fuchsia-800 rounded-full py-2 px-4 aria-[current=page]:underline"
              href=""
            >
              About
            </NavLink>
          </li>
        </ul>

        <div className="flex gap-5">
          <button className="hover:bg-gray-200 p-2 rounded-full hover:text-fuchsia-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>

          <button className="hover:bg-gray-200 p-2 rounded-full hover:text-fuchsia-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>

          <button className="hover:bg-gray-200 p-2 rounded-full hover:text-fuchsia-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
        </div>
      </header>

{/* Small Devide Slidebar */}
      <header className={`${isActiveNavbar ? '-left-0' : '-left-full'} transition-all duration-300 ease-in-out p-4 bg-white border-r border-gray-300 z-[99] text-black min-h-screen absolute top-0 w-[260px]`}>
        <div className="flex justify-end">
          <button onClick={() => SetIsActiveNavbar(false)} className="hover:bg-gray-50 hover:text-fuchsia-800 w-10 h-10 rounded-full border p-2 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-5 mt-4">
            <a href="" className="hover:text-fuchsia-800 hover:bg-gray-200 rounded-lg p-2 transition-all">Home</a>
            <a href="" className="hover:text-fuchsia-800 hover:bg-gray-200 rounded-lg p-2 transition-all">Learn</a>
            <a href="" className="hover:text-fuchsia-800 hover:bg-gray-200 rounded-lg p-2 transition-all">Contact</a>
            <a href="" className="hover:text-fuchsia-800 hover:bg-gray-200 rounded-lg p-2 transition-all">About</a>
        </div>

      </header>
    </>
  );
}

export default Header;
