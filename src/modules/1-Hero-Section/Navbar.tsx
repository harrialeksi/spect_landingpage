import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full flex h-18 items-center lg:justify-between sm:justify-center md:justify-center top-0 p-6 z-10">
      <div className="flex flex-row gap-4 text-white items-center text-xl lg:ml-36">
        <Link to={"/"}>
          <img src="/logo.svg" className="h-10" />
        </Link>
      </div>
      <div className="flex flex-row items-center gap-2 sm:hidden md:hidden lg:mr-36">
        <Link to={"/features"}>
          <button className="px-6 py-3 rounded-xl text-md text-zinc-400 hover:text-white hover:bg-white hover:bg-opacity-5 duration-700">
            Features
          </button>
        </Link>
        <Link to={"/pricing"}>
          <button className="px-6 py-3 rounded-xl text-md text-zinc-400 hover:text-white hover:bg-white hover:bg-opacity-5 duration-700">
            Pricing
          </button>
        </Link>
        <a href="https://docs.spect.network/spect-docs/introduction/how-it-works">
          <button className="px-6 py-3 rounded-xl text-md text-zinc-400 hover:text-white hover:bg-white hover:bg-opacity-5 duration-700">
            Docs
          </button>
        </a>
        <a href="https://circles.spect.network/">
          <button className="px-8 py-3 rounded-xl text-md text-purple text-bold bg-purple bg-opacity-5 hover:bg-opacity-25 duration-700">
            Launch App
          </button>
        </a>
      </div>
    </div>
  );
}
