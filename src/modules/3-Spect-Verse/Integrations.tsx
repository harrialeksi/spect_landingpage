import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
  padding: 3rem 0rem;
  position: relative;
  span {
    background: linear-gradient(180deg, #4200ff 0%, #ffffff 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`;

export default function Integrations() {
  return (
    <>
      <Container>
        <div className="flex flex-row mb-8">
          <p className="text-3xl font-semibold">
            Integrate like a <span>Pro</span>
          </p>
        </div>
        <div className="text-zinc-400 text-center items-center w-[70%]">
          Pay out contributors using Gnosis Safe. Track your code via GitHub.
          Seamlessly integrate with Discord, Orca & Coordinape as well.
        </div>
        <div className="mt-5 flex flex-col items-center gap-5">
          <div className="flex flex-row gap-10 items-center">
            <img src="/github.svg" className="h-20" />
            <img src="/coordinape.svg" className="h-8" />
            <img src="/guild.svg" className="h-12" />
          </div>
          <div className="flex flex-row gap-10 items-center">
            <img src="/gnosis.svg" className="h-10" />
            <img src="/discord.svg" className="h-20" />
            <img src="/orca.svg" className="h-8" />
          </div>
        </div>
      </Container>
    </>
  );
}
