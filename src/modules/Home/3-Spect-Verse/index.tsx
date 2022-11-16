import Organize from "./Organize";
import Integrations from "./Integrations";
import Retro from "./Retro";
import Customize from "./Customize";
import Automation from "./Automate";

function SpectVerse() {
  return (
    <div className="h-full grid grid-cols-2 gap-4 m-3 my-8">
      <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 bg-gradientTwo rounded-xl">
        <Organize />
      </div>
      {/* <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 bg-gradientTwo rounded-xl">
        <Customize />
      </div>
      <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 bg-[#0E0E0E] rounded-xl">
        <Integrations />
      </div>
      <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 bg-[#0E0E0E] rounded-xl">
        <Automation />
      </div>
      <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 bg-gradientTwo rounded-xl">
        <Retro />
      </div> */}
    </div>
  );
}

export default SpectVerse;
