import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const GradientWord = styled.span`
  background: linear-gradient(360deg, #ff008a -16.67%, #4200ff 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

export const PinkBlur = styled.div`
  filter: blur(120px);
  border-radius: 100px;
  background: linear-gradient(360deg, #ff008a -16.67%, #4200ff 100%);
  z-index: 2;
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
      <Navbar />
      <VioletBlur className="absolute top-0 left-0 blur-xl" />
      <PinkBlur className="absolute right-0 bottom-48 h-1/6 w-1/6 opacity-50" />
      <PinkBlur className="absolute bottom-36 left-72 h-24 w-24" />
      <div className="mt-24 flex flex-col text-center items-center">
        <div className="flex flex-col mx-auto py-4 mb-10 ">
          <p className="leading-normal text-6xl font-bold ">
            Buidl the world of <GradientWord>Web3</GradientWord>
            <br />
            With Spect
          </p>
          <p className="text-center lg:w-2/5 sm:w-4/5 md:4/5 mx-auto mt-4 text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            placeat voluptate vel blanditiis recusandae illo laboriosam
            perspiciatis! Tempora veritatis itaque, optio dicta et consequuntur
            illo corporis perferendis natus, magni id.
          </p>
        </div>

        <div className="mb-12 flex flex-row gap-6">
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
              hover:bg-opacity-25
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
