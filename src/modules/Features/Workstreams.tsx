import { FaCoins } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

import styled from "styled-components";
import { PinkBlur, VioletBlur } from "../Home/1-Hero-Section";
import { FaEthereum } from "react-icons/fa";

export const GradientWord = styled.h1`
  background: linear-gradient(180deg, #4200ff 0%, #ffffff 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

export const Card = styled.div`
  box-shadow: 0px 2px 10px rgb(0, 0, 0, 0.4);
  &:hover {
    box-shadow: 0px 1px 15px rgb(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.01);
  }
  min-height: 1rem;
  cursor: pointer;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const features = [
  {
    icon: "Pay",
    title: "Pay on any EVM Chain",
    content:
      "Spect network now supports payments on all EVM chains  namely Optimism, Arbitrium, Avalanche, Polygon, BNB, Gnosis ( formerly x-Dai ) and Ethereum. You can also import your custom token & use them.",
    link: "https://docs.spect.network/spect-docs/features/workstream/customize#set-your-preferred-payment-chain-and-token",
  },
  {
    icon: "Roles",
    title: "Roles with granular permissions",
    content:
      "You can create as many roles as you want and set granular permissions for every role. You can write detailed descriptions for every role.",
    link: "https://docs.spect.network/spect-docs/features/workstream/roles",
  },
  {
    icon: "Retro",
    title: "Retro it - The Web3 way",
    content:
      "Retro can be used to distribute compensation based on the contributions of individuals in a team over a period of time.",
    link: "https://docs.spect.network/spect-docs/features/workstream/retro",
  },
];

export function Workstream() {
  return (
    <div className="mt-24">
      <div className="grid grid-cols-4 gap-4 p-12 relative">
        <VioletBlur className="absolute top-0 left-0 blur-xl" />
        <PinkBlur className="absolute right-0 bottom-48 h-1/6 w-1/6 opacity-50" />
        <div className="lg:col-span-2 md:col-span-4 sm:col-span-4 p-4 my-6 lg:ml-24">
          <p className="text-2xl lg:text-left sm:text-center md:text-center text-zinc-500 sm:mt-8 md:mt-8 lg:mt-12 lg:w-4/5">
            Create
          </p>
          <GradientWord className="lg:text-8xl md:text-5xl sm:text-5xl sm:text-center md:text-center lg:text-left font-bold my-4">
            Circles
          </GradientWord>
          <p className="text-lg text-zinc-400 leading-normal lg:text-left sm:text-center md:text-center">
            Circle maps to a DAO. Similarly, Workstreams are Circles inside the
            Parent Circles. Workstream can map to sub-DAOs or Guilds based on
            your use case.
          </p>
          <div className="my-8 flex flex-row gap-4">
            <a href="https://docs.spect.network/spect-docs/features/workstream">
              <button
                className="
              px-8
              py-3
              rounded-xl
              text-md
              text-zinc-400
              text-bold
              hover:bg-white
              hover:bg-opacity-5
              hover:text-white
              duration-700"
              >
                Explore Docs
              </button>
            </a>
            <a href="https://youtu.be/XLr7NA7z4ZY">
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
                View Demo
              </button>
            </a>
          </div>
        </div>
        <div className="lg:col-span-2 md:col-span-4 sm:col-span-4 z-20">
          <img src="/circle-nav.svg" className="lg:h-[36rem] md:h-[22rem] sm:h-[22rem] z-20" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 lg:mx-60 sm:mx-6 md:mx-6">
        {features.map((feat) => (
          <Card
            onClick={() => {
              window.open(feat.link);
            }}
            className="lg:col-span-1 sm:col-span-3 md:col-span-3 rounded-xl hover:-translate-y-3 duration-700 text-center items-center"
          >
            <div className="text-purple p-2">
              {feat.icon == "Pay" && (
                <FaEthereum
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    margin: "0px auto",
                  }}
                />
              )}
              {feat.icon == "Roles" && (
                <IoMdSettings
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    margin: "0px auto",
                  }}
                />
              )}
              {feat.icon == "Retro" && (
                <FaCoins
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    margin: "0px auto",
                  }}
                />
              )}
            </div>
            <h2 className="text-2xl text-zinc-200 mt-4 leading-normal">
              {feat.title}
            </h2>
            <div className="text-sm text-zinc-400 py-2">{feat.content}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
