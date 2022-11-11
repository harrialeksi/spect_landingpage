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
        <div className="flex flex-row mb-16">
          <p className="text-4xl font-semibold leading-normal text-center">
            Integrate like a <span>Pro</span>
          </p>
        </div>
        <div className="text-zinc-400 text-center items-center w-[80%]">
          Pay out contributors using Gnosis Safe. Track your code via GitHub. Token gate your workspace via Guild.
          Seamlessly integrate with Discord to enhance communication, fetch roles & much more.
        </div>
        <div className="mt-12 flex flex-col items-center gap-5">
          <div className="flex flex-col gap-4 justify-between items-center">
            <img src="/github.svg" className="h-16" />
            <img src="/discord.svg" className="h-16" />
            <img src="/gnosis.svg" className="h-8" />
            <img src="/guild.svg" className="h-12" />
          </div>
        </div>
      </Container>
    </>
  );
}

{
  /* <img src="/coordinape.svg" className="h-8" />
      <img src="/orca.svg" className="h-32" /> */
}
