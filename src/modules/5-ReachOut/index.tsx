import styled from "styled-components";

const Card = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: solid 2px rgba(255, 255, 255, 0.06);
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
            <p className="text-4xl mb-8 p-4 text-center leading-normal">
              Are you ready to take your DAO to the next level?
            </p>
            <p className="text-zinc-500 w-3/5 text-center">
              Have questions? Ping us in our discord server
            </p>
            <a href="https://circles.spect.network/">
              <button className="text-md mt-12 w-full bg-purple bg-opacity-10 hover:bg-opacity-20 text-purple rounded-xl px-6 py-3 duration-700">
                Launch App
              </button>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}
