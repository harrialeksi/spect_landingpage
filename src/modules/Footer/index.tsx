import styled from "styled-components";
import { VioletBlur, PinkBlur } from "../1-Hero-Section";

const GradientWord = styled.span`
  background: linear-gradient(360deg, #ff008a -16.67%, #4200ff 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

export default function Footer() {
  return (
    <div className="h-full flex flex-col bg-black justify-center m-12 items-center relative">
      <div className="flex flex-col items-center my-8">
        <h1 className="p-8 lg:w-[35rem] text-center md:leading-normal sm:leading-normal lg:leading-normal lg:text-5xl md:text-4xl sm:text-4xl font-bold">
          Are you ready to take your <GradientWord>DAO </GradientWord>to the
          next level?
        </h1>
        <div className="mb-12 flex flex-row gap-6">
          <a href="https://docs.spect.network/spect-docs/introduction/how-it-works">
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
              hover:text-white
              duration-700"
            >
              Explore Docs
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
        <p className="text-zinc-500">Got questions ? Ping us in our Discord</p>
      </div>
      <VioletBlur className="absolute bottom-0 left-0" />
      <PinkBlur className="absolute bottom-36 right-0 h-48 w-48 opacity-75" />
      <div className="text-xl text-zinc-300 flex flex-row flex-wrap justify-center gap-8 my-10 z-20">
        <a href="https://twitter.com/joinSpect">
          <p className="hover:text-purple">Twitter</p>
        </a>
        <a href="https://github.com/spect-ai">
          <p className="hover:text-purple">GitHub</p>
        </a>
        <a href="https://discord.com/invite/sbPnAdKA6c">
          <p className="hover:text-purple">Discord</p>
        </a>
        <a href="https://mirror.xyz/chaks.eth/us5rOm1jSsvmvqBOmef_SZSP6zzbNeo7ay-_DkacC64">
          <p className="hover:text-purple">Mirror</p>
        </a>
        <a href="https://gitcoin.co/grants/4201/spect-network-tribes">
          <p className="hover:text-purple">Gitcoin</p>
        </a>
        <a href="https://snapshot.org/#/spect.eth">
          <p className="hover:text-purple">Snapshot</p>
        </a>
        <a href="https://www.youtube.com/channel/UCUXOC62aiZqT_ijL-dz379Q">
          <p className="hover:text-purple">Youtube</p>
        </a>
      </div>
      <div>
        <img src="/footer.svg" className="h-16" />
      </div>
    </div>
  );
}
