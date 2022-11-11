import styled from "styled-components";
import { PinkBlur, VioletBlur } from "../Home/1-Hero-Section";
import { GradientWord, Card } from "./Sorms";

import { BiSelectMultiple } from "react-icons/bi";
import { FaAward } from "react-icons/fa";
import { MdOutlinePublishedWithChanges } from "react-icons/md";

const features = [
  {
    icon: "Pay",
    title: "Pay multiple Cards at once",
    content:
      "Using Batch Pay, you can pay as many people as you want, provided the tasks they have completed have them as the assignee and have the reward already set.",
    link: "https://docs.spect.network/spect-docs/features/what-is-a-project/batch-pay",
  },
  {
    icon: "Kudos",
    title: "Mint Kudos for Contributors",
    content:
      "Mint Kudos on successful completion of tasks, bounties or milestones using MintKudos",
    link: "https://docs.spect.network/spect-docs/features/what-is-a-project/proof-of-work",
  },
  {
    icon: "Customize",
    title: "Customize your Project with Views",
    content:
      "Create Views on Projects & Upgrade your productivity by Filtering, Searching, Grouping & Sorting Cards.",
    link: "",
  },
];

export function Projects() {
  return (
    <div className="relative mt-12">
      <VioletBlur className="absolute top-0 left-0 blur-xl" />
      <PinkBlur className="absolute right-0 bottom-48 h-1/6 w-1/6 opacity-50" />
      <div className="grid grid-cols-4 gap-4 p-12">
        <div className="lg:col-span-2 md:col-span-4 sm:col-span-4">
          <img
            src="/cards.svg"
            className="lg:h-[36rem] md:h-[22rem] sm:h-[22rem]"
          />
        </div>

        <div className="lg:col-span-2 md:col-span-4 sm:col-span-4 p-4 my-6 lg:mr-24">
          <p className="text-2xl lg:text-left sm:text-center md:text-center text-zinc-500  sm:mt-8 md:mt-8 lg:mt-12 lg:w-4/5">
            Explore
          </p>
          <GradientWord className="lg:text-8xl md:text-5xl sm:text-5xl sm:text-center md:text-center lg:text-left font-bold my-4">
            Projects
          </GradientWord>
          <p className="text-lg text-zinc-400 leading-normal lg:text-left sm:text-center md:text-center">
            This is where actual Tasks, Grants and Bounties are managed using
            different views such as Kanban, List, Gantt and Tables. Paying cards
            is made easy using Batch Pay.
          </p>
          <div className="my-8 flex flex-row gap-4">
            <a href="https://docs.spect.network/spect-docs/features/what-is-a-project">
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
                <BiSelectMultiple
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    margin: "0px auto",
                  }}
                />
              )}
              {feat.icon == "Kudos" && (
                <FaAward
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    margin: "0px auto",
                  }}
                />
              )}
              {feat.icon == "Customize" && (
                <MdOutlinePublishedWithChanges
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
