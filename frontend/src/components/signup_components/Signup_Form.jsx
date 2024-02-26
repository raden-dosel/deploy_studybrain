import { Link } from "react-router-dom";

function Signup_Form() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="max-w-lg w-full neumorphism rounded-lg px-10 py-10">
          <h1 className="text-3xl font-bold mb-6 text-darkpurple text-center">
            Sign Up Account
          </h1>
          <h1 className="text-md font-semibold mb-6 text-slateblue text-center">
            Join us in our journey to make learning fun
          </h1>
          <form action="#" method="POST" className="my-4 mx-auto w-full">
            {/*<!-- Your form elements go here -->*/}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-darkpurple"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md focus:border-taupegray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-frenchgray transition-colors duration-300"
              />
            </div>
            <div className="my-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-darkpurple"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md focus:border-taupegray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-frenchgray transition-colors duration-300"
              />
            </div>
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
            <div className="my-2">
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
          </form>
          <div>
            <Link to="/login" className="no-underline">
              <button
                type="submit"
                className="w-full bg-indigodye p-2 rounded-md text-white font-bold active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out"
              >
                Submit
              </button>
            </Link>
          </div>
          <div className="text-center text-sm mt-8">
            <p>Already have an account?</p>
            <Link to="/login" className="no-underline">
              <button
                type="submit"
                className="w-full bg-transparent text-indigodye border-indigodye border-2 p-2 rounded-md font-bold  mt-4 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup_Form;
