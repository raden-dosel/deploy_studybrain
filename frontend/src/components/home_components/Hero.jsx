import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import Illustration from "./Illustration";

function Hero() {
  const [typeEffect] = useTypewriter({
    words: ["Students", "Workers", "Anyone"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div className="text-darkpurple">
      <div className="max-w-[1240px] w-full h-screen mx-auto grid lg:grid-cols-2">
        <div className="text-start flex flex-col justify-center items-center lg:items-start">
          <h1 className="md:text-6xl sm:text-5xl text-4xl text-slateblue font-bold px-2 py-1">
            StudyBrain:
          </h1>
          <h2 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-0 px-2 py-1 ">
            Personalize
          </h2>
          <div className="flex justify-center items-center lg:items-start px-2">
            <p className="md:text-4xl sm:text-3xl text-2xl py-1 font-bold">
              Study Planner for
            </p>
            <span className="md:text-4xl pl-2 sm:text-3xl text-2xl py-1 font-bold ml-0">
              {typeEffect}
            </span>
          </div>
          <div className="max-w-[600px] py-2 text-center lg:text-left">
            <p className="md:text-2xl sm:text-xl text-lg font-bold text-taupegray px-2">
              Studying with an organized schedule and disciplined attitude could
              result to productivity and an academic achievement.
            </p>
          </div>
          <Link to="/login" className="no-underline">
            <button className="bg-indigodye w-[175px] rounded-md font-medium ml-4 my-6 py-2 px-3 text-white active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out">
              Get started
            </button>
          </Link>
        </div>
        <div className="hidden lg:block mt-36">
          <Illustration />
        </div>
      </div>
    </div>
  );
}

export default Hero;
