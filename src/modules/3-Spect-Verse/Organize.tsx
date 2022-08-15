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
  display: flex;
  flex-direction: column;
  width: 35rem;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
  padding: 3rem 0rem;
  .gradient-text {
    background: linear-gradient(180deg, #5200ff 0%, #a900ff 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`;

export default function Organize() {
  return (
    <>
      <TaskCard>
        <div className="flex flex-row mb-8">
          <p className="text-4xl font-semibold">
            Organize <span className="gradient-text">Tasks, Bounties </span>{" "}
          </p>
        </div>
        <div className="text-zinc-400 text-center my-4 items-center w-[30rem]">
          Create Tasks, Bounties & organize them the way you want. Classify the
          gigs using tags, status, card type, applications, deadline and much
          more.
        </div>
        <SpectCard>
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
        </SpectCard>
      </TaskCard>
    </>
  );
}
