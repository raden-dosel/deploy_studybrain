import Logo from "./Logo";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

function Main_Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center mt-4 max-w-[1240px] mx-auto px-4 text-darkpurple bg-indigodye rounded-xl shadow-md">
      <div className="flex lg:w-full md:w-44 w-32 mx-2 md:mx-4">
        <Logo />
      </div>

      <ul className=" space-x-4 font-semibold text-platinum hidden md:flex">
        <Link to="/" className="no-underline">
          <li className="p-4 hover:cursor-pointer hover:scale-[1.10] duration-150 hover:shadow-md ">
            Home
          </li>
        </Link>
        <Link to="/note" className="no-underline">
          <li className="p-4 hover:cursor-pointer hover:scale-[1.10] duration-150 hover:shadow-md">
            Library
          </li>
        </Link>

        <Link to="/event" className="no-underline">
          <li className="p-4 hover:cursor-pointer hover:scale-[1.10] duration-150 hover:shadow-md">
            Events
          </li>
        </Link>
        <Link to="/todo" className="no-underline">
          <li className="p-4 hover:cursor-pointer hover:scale-[1.10] duration-150 hover:shadow-md">
            Goals
          </li>
        </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      {/*menu element*/}
      <div
        className={
          nav
            ? "fixed md:hidden left-0 top-0 py-4 min-w-[50%] h-full border-r border-r-platinum bg-lavender ease-in-out duration-500"
            : "fixed left-[-100%] ease-in-out duration-500"
        }
      >
        <div className="ml-4">
          <Logo />
        </div>
        <ul className="p-4 text-sm uppercase font-semibold text-platinum">
          <Link to="/" className="no-underline">
            <li className="p-4 border-b border-frenchgray hover:cursor-pointer hover:scale-[1.10] duration-150 hover:shadow-md">
              Home
            </li>
          </Link>
          <Link to="/note" className="no-underline ">
            <li className="p-4 border-b border-frenchgray hover:cursor-pointer hover:scale-[1.10] duration-150 hover:shadow-md">
              Library
            </li>
          </Link>
          <Link to="/event" className="no-underline">
            <li className="p-4 border-b border-frenchgray hover:cursor-pointer hover:scale-[1.10] duration-150 hover:shadow-md">
              Events
            </li>
          </Link>
          <Link to="/todo" className="no-underline">
            <li className="p-4  hover:cursor-pointer hover:scale-[1.10] duration-150 hover:shadow-md">
              Goals
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Main_Header;
