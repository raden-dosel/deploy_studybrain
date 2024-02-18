function Cards() {
  return (
    <div className="w-full py-[10rem] bg-gradient-to-r from-indigodye to-darkpurple text-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-36 mx-auto mt-[-3rem] bg-transparent"
            src="https://i.imgur.com/8xB4tl8.png"
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center border-b border-frenchgray py-8">
            Write Notes
          </h2>
          <p className="text-center text-xl py-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
            consequuntur.
          </p>
          <button className="bg-slateblue lg:w-[175px] md:w-[120px] lg:h-[48px] md:h-[72px] rounded-md font-medium mx-auto my-6 py-3 px-6 text-white active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out">
            Start Studying
          </button>
        </div>
        {/* Card 2 */}
        <div className="w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-36 mx-auto mt-[-3rem] bg-transparent"
            src="https://i.imgur.com/y8WBnf3.png"
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center border-b border-frenchgray py-8">
            Write Notes
          </h2>
          <p className="text-center text-xl py-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
            consequuntur.
          </p>
          <button className="bg-slateblue lg:w-[175px] md:w-[120px] lg:h-[48px] md:h-[72px] rounded-md font-medium mx-auto my-6 py-3 px-6 text-white active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out">
            Manage Events
          </button>
        </div>
        {/* Card 3 */}
        <div className="w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-36 mx-auto mt-[-3rem] bg-transparent"
            src="https://i.imgur.com/cZOpLoU.png"
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center border-b border-frenchgray py-8">
            Write Notes
          </h2>
          <p className="text-center text-xl py-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
            consequuntur.
          </p>
          <button className="bg-slateblue lg:w-[175px] md:w-[120px] lg:h-[48px] md:h-[72px] rounded-md font-medium mx-auto my-6 py-3 px-6 text-white active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out">
            Set Goals
          </button>
        </div>
        {/* Card 4 */}
        <div className="w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-36 mx-auto mt-[-3rem] bg-transparent"
            src="https://i.imgur.com/iaDZLT1.png"
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center border-b border-frenchgray py-8">
            Write Notes
          </h2>
          <p className="text-center text-xl py-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
            consequuntur.
          </p>
          <button className="bg-slateblue lg:w-[175px] md:w-[120px]  lg:h-[48px] md:h-[72px] rounded-md font-medium mx-auto my-6 py-3 px-6 text-white active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out">
            Track Progress
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
