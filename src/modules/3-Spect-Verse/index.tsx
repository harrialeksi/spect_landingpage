import Organize from "./Organize";
import Integrations from "./Integrations";

function SpectVerse() {
  return (
    <div className="h-full grid grid-cols-2 gap-4 m-3 my-8">
      <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 bg-zinc-900">
        <Organize />
      </div>
      <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 bg-[#0B0B0B]">
        <Integrations />
      </div>
      <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 bg-green-100">
        hey
      </div>
      <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 bg-blue-100">
        hey
      </div>
      <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 bg-blue-100">
        hey
      </div>
    </div>
  );
}

export default SpectVerse;
