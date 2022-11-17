import styled from "styled-components";
import Typewriter from "typewriter-effect";

export const GradientWord = styled.span`
  background: linear-gradient(360deg, #ff008a -16.67%, #4200ff 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

export const PinkBlur = styled.div`
  filter: blur(120px);
  border-radius: 100px;
  background: linear-gradient(360deg, #ff008a -16.67%, #4200ff 100%);
`;

export const VioletBlur = styled.div`
  filter: blur(150px);
  height: 200px;
  width: 200px;
  border-radius: 100px;
  background: linear-gradient(126.86deg, #5200ff 0%, #a900ff 100%);
`;

function HeroSection() {
  return (
    <div className="h-full relative">
      <VioletBlur className="absolute top-0 left-0 blur-xl" />
      <PinkBlur className="absolute right-0 bottom-48 h-1/6 w-1/6 opacity-50" />
      <PinkBlur className="absolute bottom-36 left-72 h-24 w-24" />
      <div className="lg:mt-24 md:mt-12 sm:mt-12 flex flex-col text-center items-center z-20">
        <div className="flex flex-col mx-auto py-4 mb-10 ">
          <h1 className="md:leading-normal sm:leading-normal lg:leading-tight lg:text-6xl md:text-5xl sm:text-5xl font-bold z-30">
            Built for <GradientWord>DAOs</GradientWord> <br /> that change the
            world
          </h1>
          <h2 className="text-center lg:w-3/5 sm:w-4/5 md:4/5 mx-auto mt-4 text-zinc-400">
            Spect helps DAO contributors form circles that manage grants,
            bounties and onboarding
          </h2>
        </div>
        <div className="mb-12 flex flex-row gap-6 z-20">
          <a href="https://www.youtube.com/playlist?list=PLdwhfxtIkROmkPUhWwFzwp61ollQf_R44">
            <button
              className="
              px-8
              py-3
              rounded-xl
              text-md
              text-zinc-400
              text-bold
              bg-white
              bg-opacity-5
              hover:bg-opacity-10
              hover:text-white
              duration-700"
            >
              Watch Demo
            </button>
          </a>
          <a href="https://circles.spect.network/">
            <button
              className="
              px-8
              py-3
              rounded-xl
              text-md
              text-purple
              text-bold
              bg-purple
              bg-opacity-5
              hover:bg-opacity-25
              duration-700"
            >
              Launch App
            </button>
          </a>
        </div>
        <img src="/earth.svg" className="lg:w-[50%] mx-auto" />
        <div className="absolute bottom-0 bg-gradient-to-t from-black to h-24 w-full z-60" />
      </div>
    </div>
  );
}

export default HeroSection;
