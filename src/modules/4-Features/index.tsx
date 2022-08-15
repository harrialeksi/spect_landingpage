import styled from "styled-components";
import { MacCommandOutlined } from "@ant-design/icons";

const Card = styled.div`
  box-shadow: 0px 10px 15px black;
`;

export default function Features() {
  return (
    <div className="h-full bg-zinc-900 p-4">
      <p className="text-5xl text-center font-semibold my-20 leading-normal">
        For the buidlers, By the buidlers
      </p>
      <div className="h-full grid grid-cols-2 gap-4 m-3 px-4">
        <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 p-8 lg:mx-20">
          <Card className="w-full bg-gradientTwo rounded-2xl p-8 flex flex-col gap-4 items-center text-center">
            <MacCommandOutlined
              style={{ fontSize: "2.5rem" }}
              className="opacity-70"
            />
            <p className="text-xl text-zinc-300">Keyboard Friendly</p>
            <p className="text-zinc-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quis velit perferendis temporibus aliquam explicabo.{" "}
            </p>
          </Card>
        </div>
        <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 p-8 lg:mx-20">
          <Card className="w-full bg-gradientTwo rounded-2xl p-8 flex flex-col gap-4 items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              height={"2.5rem"}
              opacity="0.7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            <p className="text-xl text-zinc-300">Dark-Light Mode</p>
            <p className="text-zinc-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quis velit perferendis temporibus aliquam explicabo.{" "}
            </p>
          </Card>
        </div>
        <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 p-8 lg:mx-20">
          <Card className="w-full bg-gradientTwo rounded-2xl p-8 flex flex-col gap-4 items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              height={"2.5rem"}
              opacity="0.7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            <p className="text-xl text-zinc-300">On-chain Credentialing</p>
            <p className="text-zinc-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quis velit perferendis temporibus aliquam explicabo.{" "}
            </p>
          </Card>
        </div>
        <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 p-8 lg:mx-20">
          <Card className="w-full bg-gradientTwo rounded-2xl p-8 flex flex-col gap-4 items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              height={"2.5rem"}
              opacity="0.7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <p className="text-xl text-zinc-300">24x7 Support</p>
            <p className="text-zinc-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quis velit perferendis temporibus aliquam explicabo.{" "}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
