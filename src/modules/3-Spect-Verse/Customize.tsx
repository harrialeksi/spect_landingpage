import { Container } from "./Integrations";

export default function Customize() {
  return (
    <>
      <Container>
        <div className="flex flex-row mb-8">
          <p className="text-5xl font-semibold">Retro it</p>
        </div>
        <div className="text-zinc-400 text-center items-center w-[70%]">
          Pay out contributors using Gnosis Safe. Track your code via GitHub.
          Seamlessly integrate with Discord, Orca & Coordinape as well.
        </div>
      </Container>
    </>
  );
}
