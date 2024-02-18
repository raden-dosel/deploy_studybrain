import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../Logo";
function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center mt-4 max-w-[1240px] mx-auto px-4 text-darkpurple">
      <Logo />
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resource</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
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
        <ul className="p-4 text-sm uppercase">
          <li className="p-4 border-b border-frenchgray">Home</li>
          <li className="p-4 border-b border-frenchgray">Company</li>
          <li className="p-4 border-b border-frenchgray">Resource</li>
          <li className="p-4 border-b border-frenchgray">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
