function About() {
  return (
    <div className="w-full bg-gradient-to-r from-indigodye to-darkpurple py-16 px-4">
      <div className="flex flex-col items-center">
        <h1 className="text-periwinkle md:text-5xl sm:text-4xl text-2xl font-bold py-2">
          Developers of the Website
        </h1>
      </div>
      <div className="max-w-[1140px] mx-auto mt-20 grid md:grid-cols-3 gap-8">
        <div className="w-full md:border-r border-frenchgray flex flex-col p-4 my-8 md:my-0">
          <img
            className="md:w-36 w-28 mx-auto mt-[-3rem] bg-transparent"
            src="https://i.imgur.com/Sef9g9n.png"
            alt="/"
          />
          <h2 className="md:text-2xl text-lg text-white font-bold text-center mt-6">
            Raden Cedrick Dosel
          </h2>
          <p className="text-frenchgray text-center md:text-xl text-md mt-2">
            Computer Science Student
          </p>
        </div>
        <div className="w-full md:border-r border-frenchgray flex flex-col p-4 my-8 md:my-0">
          <img
            className="md:w-36 w-28 mx-auto mt-[-3rem] bg-transparent"
            src="https://i.imgur.com/86PCIwg.png"
            alt="/"
          />
          <h2 className="md:text-2xl text-lg text-white font-bold text-center mt-6">
            Princess Nicole Puente
          </h2>
          <p className="text-frenchgray text-center md:text-xl text-md mt-2">
            Computer Science Student
          </p>
        </div>
        <div className="w-full flex flex-col p-4 my-8 md:my-0">
          <img
            className="md:w-36 w-28 mx-auto mt-[-3rem] bg-transparent"
            src="https://i.imgur.com/dENuEwc.png"
            alt="/"
          />
          <h2 className="md:text-2xl text-lg text-white font-bold text-center mt-6">
            Krystel Ann Timado
          </h2>
          <p className="text-frenchgray text-center md:text-xl text-md mt-2">
            Computer Science Student
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
