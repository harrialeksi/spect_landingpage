function About() {
  return (
    <div className="bg-[#1B1B1B] h-full grid grid-cols-3 gap-4 p-12">
      <div className="lg:col-span-2 md:col-span-3 sm:hidden">
        <img src="/screen.svg" />
      </div>
      <div className="lg:col-span-1 md:col-span-3 sm:col-span-3 p-4 my-6">
        <p className="text-5xl font-semibold mt-8 leading-normal lg:text-left sm:text-center md:text-center">
          Interface, <br /> tailored for <br /> Web3
        </p>
        <p className="lg:text-left sm:text-center md:text-center text-zinc-600  mt-6 lg:w-4/5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, odio
          perferendis dolor adipisci modi iusto esse ut id, eligendi placeat non
          quas blanditiis velit distinctio ab, voluptatum fugiat tempore!
          Eligendi!
        </p>
      </div>
    </div>
  );
}

export default About;
