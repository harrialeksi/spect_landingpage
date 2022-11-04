import { CheckOutlined } from "@ant-design/icons";
import { PinkBlur, VioletBlur } from "../1-Hero-Section";
import Navbar from "../1-Hero-Section/Navbar";

const featuresArray = [
  "Unlimited workspaces",
  "Gasless transactions on Polygon",
];

export default function Pricing() {
  return (
    <div className="h-full relative">
      <Navbar />
      <VioletBlur className="absolute top-0 left-0 blur-xl" />
      <PinkBlur className="absolute right-0 bottom-48 h-1/6 w-1/6 opacity-50" />
      <PinkBlur className="absolute bottom-36 left-72 h-24 w-24" />
      <div className="flex flex-col text-center items-center z-20">
        <p>Recommended</p>
        <div className="bg-red flex flex-col">
          <h1>Public</h1>
          <p>Free</p>
          <a href="https://circles.spect.network/">
            <button className="px-8 py-3 rounded-xl text-md text-purple text-bold bg-purple bg-opacity-5 hover:bg-opacity-25 duration-700">
              Get Started
            </button>
          </a>
          {featuresArray.map((feature) => {
            return (
              <div>
                <CheckOutlined />
                <p>{feature}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
