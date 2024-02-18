function Newsletter() {
  return (
    <div className="w-full py-16 px-4 text-darkpurple">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items center justify-between w-full">
            <input
              className="p-3 flex my-6 w-full rounded-md text-darkpurple"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-slateblue w-[175px] rounded-md font-medium ml-4 my-6 py-2 px-3 text-white active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out">
              Notify me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-slateblue">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
