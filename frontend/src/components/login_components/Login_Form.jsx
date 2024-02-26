import { Link } from "react-router-dom";
import Login_Illustration from "./Login_Illustration";

function Login_Form() {
  return (
    <div>
      <div className="flex h-screen">
        {/*<!-- Left Pane -->*/}
        <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
          <div className="max-w-md text-center">
            <Login_Illustration />
          </div>
        </div>
        {/*<!-- Right Pane -->*/}
        <div className="w-full lg:w-1/2  flex items-center justify-center">
          <div className="max-w-md w-full neumorphism rounded-lg px-10 py-10">
            <h1 className="text-3xl font-semibold mb-6 text-darkpurple text-center">
              Login Account
            </h1>
            <h1 className="text-md font-semibold mb-6 text-slateblue text-center">
              Welcome back to Study Brain
            </h1>
            <form action="#" method="POST" className="space-y-4">
              {/*<!-- Your form elements go here -->*/}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-darkpurple"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 p-2 w-full border rounded-md focus:border-taupegray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-frenchgray transition-colors duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-darkpurple"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 w-full border rounded-md focus:border-taupegray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-frenchgray transition-colors duration-300"
                />
              </div>
              <div className="mt-4 text-sm text-taupegray text-start">
                <a href="#" className=" hover:underline ml-1">
                  Forgot your password?
                </a>
              </div>
              <div>
                <Link to="/todo" className="no-underline">
                  <button
                    type="submit"
                    className="w-full bg-indigodye p-2 rounded-md text-white font-bold active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out"
                  >
                    Sign In
                  </button>
                </Link>
              </div>
            </form>
            <div className="text-center text-sm mt-8">
              <p>Doesn&apos;t have an account?</p>
              <Link to="/signup" className="no-underline">
                <button
                  type="submit"
                  className="w-full bg-transparent border-indigodye border-2 text-darkpurple p-2 rounded-md font-bold  mt-4 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out"
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login_Form;
