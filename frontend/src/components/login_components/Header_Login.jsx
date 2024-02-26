import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header_Login() {
  return (
    <div className="text-darkpurple">
      <div className="max-w-[1240px] mx-auto mt-4  flex md:span-cols-2 justify-between items-center">
        <div className="flex items-start lg:w-full md:w-44 w-32 mx-2 md:mx-4">
          <Logo />
        </div>
        <div>
          <Link to="/" className="no-underline">
            <button className="bg-indigodye w-[80px] mx-2 lg:w-[175px] md:w-[110px] md:mx-4 rounded-md font-medium py-2 px-3 text-white active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header_Login;
