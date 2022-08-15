import { Container } from "./Integrations";
import styled from "styled-components";
import { SettingOutlined } from "@ant-design/icons";

const SpectCard = styled.div`
  padding: 1rem;
  border-radius: 0.7rem;
  background-color: #161616;
  min-height: 4rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: black 0px 10px 25px;
`;

const rolesArray = ["steward", "member", "contributor", "visitor"];
const tokenArray = ["DAI", "MATIC"];

export default function Customize() {
  return (
    <>
      <Container>
        <div className="flex flex-row mb-8">
          <p className="text-5xl font-semibold leading-normal">
            Customize
            <br />
            <p className="text-2xl text-zinc-500 text-center">
              Every. Damn. Thing.
            </p>
          </p>
        </div>
        <div className="text-zinc-400 text-center items-center mb-10 w-[70%]">
          Spect offers huge customizability in terms of task management,
          payments, user interface.
        </div>
        <SpectCard className="w-full">
          <p className=" text-2xl text-zinc-300 mb-4">Invite</p>
          <div>
            <p className="text-md text-zinc-400">
              Invite peers to join the circle
            </p>
            <p className=" text-xl text-zinc-400 mt-4">Choose Role</p>
            <div className="flex flex-row gap-3 mt-3">
              {rolesArray.map((chain) => {
                return (
                  <div
                    key={chain}
                    className="text-sm bg-purple bg-opacity-10 text-purple rounded-2xl px-3 py-1"
                  >
                    {chain}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-row gap-4 items-center text-xl text-zinc-400 mt-4 mb-3">
              Customize Invite <SettingOutlined style={{fontSize: "1rem"}}/>{" "}
            </div>
            <button className="text-md w-full bg-purple bg-opacity-10 text-purple rounded-xl px-6 py-3">Generate invite</button>
          </div>
        </SpectCard>
      </Container>
    </>
  );
}
