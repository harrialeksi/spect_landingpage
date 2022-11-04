import { CloseCircleOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

interface Props {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
}

export function Navbar({ menuOpen, setMenuOpen }: Props) {
  return (
    <div className="w-full flex h-18 items-center justify-between top-0 p-6 z-10">
      <div className="flex flex-row gap-4 text-white items-center text-xl lg:ml-36 z-20">
        <Link to={"/"}>
          <img src="/logo.svg" className="h-10" />
        </Link>
      </div>
      <button
        className="px-8 py-3 rounded-xl lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <MenuOutlined />
      </button>
      <div className="flex flex-row items-center gap-2 sm:hidden md:hidden lg:mr-36">
        {/* <Link to={"/features"}>
          <button className="px-6 py-3 rounded-xl text-md text-zinc-400 hover:text-white hover:bg-white hover:bg-opacity-5 duration-700">
            Features
          </button>
        </Link> */}
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

export function MobileNavbar({ menuOpen, setMenuOpen }: Props) {
  
  return (
    <div className="w-full h-full bg-gradientTwo z-40 duration-700">
      <div className="mt-8 mx-auto flex flex-col p-8 gap-8">
        <button
          onClick={() => {
            setMenuOpen(false);
          }}
          className="text-zinc-400"
        >
          <CloseCircleOutlined style={{ fontSize: "2rem" }} />
        </button>
        <Link to={"/pricing"}>
          <p className="p-6 rounded-xl text-xl text-zinc-400 hover:text-white hover:bg-white hover:bg-opacity-5 duration-700">
            Pricing
          </p>
        </Link>
        <a href="https://docs.spect.network/spect-docs/introduction/how-it-works">
          <p className="p-6 rounded-xl text-xl text-zinc-400 hover:text-white hover:bg-white hover:bg-opacity-5 duration-700">
            Docs
          </p>
        </a>
        <a href="https://circles.spect.network/">
          <p className="p-6 rounded-xl text-xl text-purple text-bold hover:bg-purple hover:bg-opacity-5 duration-700">
            Launch App
          </p>
        </a>
      </div>
    </div>
  );
}
