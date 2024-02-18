import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaDribbbleSquare,
} from "react-icons/fa";
import Logo from "../Logo";

function Footer() {
  return (
    <div className="w-full bg-darkpurple">
      <div className="max-w-[1240px] bg-darkpurple mx-auto py-6 grid md:px-4 md:grid-cols-2 lg:grid-cols-3 gap-8 text-platinum">
        <div>
          <Logo />
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            provident reprehenderit facere, iste atque voluptatum!
          </p>
          <div className="flex justify-between my-6 ">
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div className="px-8">
            <h6 className="font-medium text-taupegray">Features</h6>
            <ul>
              <li className="py-2 text-sm">Library</li>
              <li className="py-2 text-sm">Schedule</li>
              <li className="py-2 text-sm">To-Do</li>
              <li className="py-2 text-sm">Progress</li>
            </ul>
          </div>
          <div className="px-8">
            <h6 className="font-medium text-taupegray">Website</h6>
            <ul>
              <li className="py-2 text-sm">Home</li>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Features</li>
              <li className="py-2 text-sm">Contact</li>
            </ul>
          </div>
          <div className="px-8">
            <h6 className="font-medium text-taupegray">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claims</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Footer;
