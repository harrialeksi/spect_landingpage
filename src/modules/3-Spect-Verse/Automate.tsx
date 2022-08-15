import { Container } from "./Integrations";
import { VioletBlur } from "../1-Hero-Section";

export default function Automation() {
  return (
    <>
      <Container>
        <VioletBlur className="absolute left-12 top-36" />
        <div className="flex flex-row mb-8">
          <p className="text-4xl font-semibold">Automate the flow</p>
        </div>
        <div className="text-zinc-400 text-center items-center w-[70%]">
          Lorem Epsum
        </div>
        <div>
          <img src="/automate.svg" className="h-[25rem]"/>
        </div>
      </Container>
    </>
  );
}
