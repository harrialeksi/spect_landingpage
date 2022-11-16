import styled from "styled-components";
import Typewriter from "typewriter-effect";

const tagsArray = [
  "Bounty",
  "Applications Open",
  "UI/UX",
  "Frontend",
  "Figma",
  "Design",
  "Responsive",
  "0.017 ETH",
];

const SpectCard = styled.div`
  margin-top: 2rem;
  border: solid 2px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 0.7rem;
  &:hover {
    border: solid 2px rgba(255, 255, 255, 0.1);
    transition-duration: 0.7s;
  }
  min-height: 4rem;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: black 0px 10px 25px;
  position: relative;
`;

const Avatar = styled.img`
  border-radius: 2rem;
  height: 2rem;
  width: 2rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

const TaskCard = styled.div`
  margin: 3rem;
  padding-top: 3rem;
  text-align: center;
  .words {
    overflow: hidden;
    height: 7rem;
  }
  span {
    display: block;
    font-size: 6rem;
    font-weight: bold;
    animation: spin_words 6s infinite;
    background: linear-gradient(180deg, #5200ff 0%, #a900ff 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
  @keyframes spin_words {
    30% {
      transform: translateY(-112%);
    }
    45% {
      transform: translateY(-100%);
    }
    60% {
      transform: translateY(-212%);
    }
    75% {
      transform: translateY(-200%);
    }
    90% {
      transform: translateY(-312%);
    }
    100% {
      transform: translateY(-300%);
    }
  }
`;

export default function Organize() {
  return (
    <>
      <TaskCard>
        <div className="grid grid-cols-3">
          <img
            src="/crypto1.svg"
            className="opacity-20 lg:col-span-1 md:hidden sm:hidden w-4/5"
          />
          <div className="flex flex-col mb-8 items-center lg:col-span-1 md:col-span-3 sm:col-span-3">
            <p className="text-4xl font-semibold leading-normal text-center">
              WTF is Spect ?
            </p>
            <p className="text-zinc-400 text-center my-8 items-center sm:w-4/5 md:w-4/5">
              Spect is a platform for your DAO to create and manage
            </p>
            <div className="words">
              <span>Tasks</span>
              <span>Sorms</span>
              <span>Bounties</span>
              <span>Grants</span>
            </div>
          </div>
          <img
            src="/crypto2.svg"
            className="opacity-20 lg:col-span-1 md:hidden sm:hidden w-4/5 ml-8"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-2xl font-semibold text-zinc-400 leading-normal text-center">
            Trusted By
          </p>
          <div className="flex flex-row gap-16 mx-auto items-center mt-8">
            <img
              src="/krebit-icon.png"
              className="h-12 cursor-pointer"
              onClick={() =>
                window.open("https://mobile.twitter.com/krebitid", "_blank")
              }
            />
            <img
              src="/biconomy.svg"
              className="h-8 cursor-pointer"
              onClick={() =>
                window.open("https://mobile.twitter.com/biconomy", "_blank")
              }
            />
            <img
              src="/alchemix.svg"
              className="h-12 cursor-pointer"
              onClick={() =>
                window.open("https://mobile.twitter.com/AlchemixFi", "_blank")
              }
            />
          </div>
        </div>
        {/* <div className="text-zinc-400 text-center my-4 items-center sm:w-4/5 md:w-4/5 lg:w-2/5">
          Create Tasks, Bounties & organize them the way you want. Manage your
          projects and bounties all in one place to increase visibility among
          your DAO contributors.
        </div> */}
        {/* <SpectCard>
          <div className="text-2xl mb-10">
            <Typewriter
              options={{
                strings: ["Design an NFT Marketplace"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <Avatar src="/ape.png" />
          <div className="flex flex-row flex-wrap gap-2">
            {tagsArray.map((tag) => {
              return (
                <p
                  key={tag}
                  className="
                  flex
                  text-sm
                  text-zinc-400
                  hover:text-purple
                  px-2
                  py-1
                  bg-zinc-800
                  hover:bg-opacity-10
                  hover:bg-purple
                  rounded-2xl"
                >
                  {tag}
                </p>
              );
            })}
          </div>
        </SpectCard> */}
      </TaskCard>
    </>
  );
}
