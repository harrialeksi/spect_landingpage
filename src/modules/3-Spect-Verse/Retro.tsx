import { VioletBlur } from "../1-Hero-Section";
import { Container } from "./Integrations";

export default function Retro() {
  return (
    <>
      <Container>
        <VioletBlur className="absolute left-12 top-12" />
        <div className="flex flex-row mb-8">
          <p className="text-5xl font-semibold">Retro it</p>
        </div>
        <div className="text-zinc-400 text-center items-center w-[70%]">
          Reward contributors retroactively to incentivize great work on any EVM
          chain with any token. You can even plug in your native DAO token!
        </div>
        <div className="mt-12 flex flex-row items-center">
          <img src="/crypto.svg" className="h-72" />
        </div>
      </Container>
    </>
  );
}
