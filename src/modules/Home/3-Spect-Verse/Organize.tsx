import styled from "styled-components";

const TaskCard = styled.div`
  margin: 5rem 2rem;
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
    <TaskCard>
      <div className="grid grid-cols-6">
        <img
          src="./crypto1.svg"
          className="lg:col-span-1 md:hidden sm:hidden opacity-20"
        />
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 flex flex-col mx-auto align-center">
          <p className="text-2xl font-semibold text-zinc-400 leading-normal text-center mb-8 mt-4">
            Used by and Partnered with the best
          </p>
          <div className="flex lg:flex-row md:flex-row sm:flex-col gap-16 mx-auto items-center mt-8">
            <img
              src="/push.svg"
              className="h-10 cursor-pointer"
              onClick={() =>
                window.open("https://twitter.com/pushprotocol", "_blank")
              }
            />
            <img
              src="/gtc.svg"
              className="h-12 cursor-pointer"
              onClick={() =>
                window.open("https://twitter.com/gitcoin", "_blank")
              }
            />
            <div
              className="text-center text-2xl align-middle text-white cursor-pointer"
              onClick={() =>
                window.open("https://twitter.com/mintkudosXYZ", "_blank")
              }
            >
              🎉 Mintkudos
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-row sm:flex-col gap-16 mx-auto items-center mt-8">
            <img
              src="/krebit.svg"
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
          </div>
        </div>
        <img
          src="./crypto2.svg"
          className="lg:col-span-1 md:hidden sm:hidden opacity-20"
        />
      </div>
    </TaskCard>
  );
}
