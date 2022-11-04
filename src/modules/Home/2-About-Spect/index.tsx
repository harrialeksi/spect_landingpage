function About() {
  return (
    <div className="bg-[#1B1B1B] h-full grid grid-cols-3 gap-4 p-12">
      <div className="lg:col-span-2 md:hidden sm:hidden">
        <img src="/screen.svg" />
      </div>
      <div className="lg:col-span-1 md:col-span-3 sm:col-span-3 p-4 my-6">
        <p className="text-5xl font-bold sm:mt-8 md:mt-8 lg:mt-24 leading-normal lg:text-left sm:text-center md:text-center">
          An experience that delights
        </p>
        <p className="lg:text-left sm:text-center md:text-center text-zinc-500  mt-6 lg:w-4/5">
          Happy contributors build successful DAOs. We’re building an experience
          that makes it possible to operate a DAO with the least amount of
          stress.
        </p>
      </div>
    </div>
  );
}

export default About;
