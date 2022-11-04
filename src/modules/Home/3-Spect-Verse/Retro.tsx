import { Container } from "./Integrations";

export default function Retro() {
  return (
    <>
      <Container>
        <div className="flex flex-row mb-16">
          <p className="text-4xl font-semibold">Retro it</p>
        </div>
        <div className="text-zinc-400 text-center items-center w-[80%]">
          Reward contributors retroactively to incentivize great work on any EVM
          chain with any token. You can even plug in your native DAO token!
        </div>
        <div className="mt-12 flex flex-row items-center">
          <img src="/crypto.svg" className="h-48" />
        </div>
      </Container>
    </>
  );
}
