import styled from "styled-components";

const Card = styled.div`
  background: linear-gradient(
    253.34deg,
    rgba(51, 0, 134, 0.244) 0%,
    rgba(127, 0, 171, 0.16) 97.76%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 3rem;
  padding: 3rem 0rem;
  width: 70vw;
  z-index: 2;
`;

export default function ReachOut() {
  return (
    <div className="h-full flex">
      <div className="m-8 mx-auto items-center relative">
        <Card>
          <div className="flex flex-col items-center">
            <p className="text-4xl mb-8 p-4 text-center">
              Time to check out Spect !
            </p>
            <p className="text-zinc-500 w-[20rem] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              consequuntur quaerat. Excepturi, odit!
            </p>
            <a href="https://circles.spect.network/">
              <button className="text-md mt-12 w-[10rem] bg-purple bg-opacity-10 hover:bg-opacity-20 text-purple rounded-xl px-6 py-3 duration-700">
                Launch App
              </button>
            </a>
            <p className="text-zinc-500 w-[20rem] text-center mt-8">
              How about a 1-1 demo ? Ping us in our discord server
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
