export default function Navbar() {
  return (
    <div className="w-full flex h-18 items-center lg:justify-between sm:justify-center top-0 p-6 z-10">
      <div className="flex flex-row gap-4 text-white items-center text-xl lg:ml-36">
        <img src="/logo.svg" className="h-10" />
        <p className="font-semibold text-xl">Spect Network</p>
      </div>
      <a href="https://circles.spect.network/">
        <button
          className="
        lg:mr-36
        px-8
        py-3
        rounded-xl
        text-md
        text-purple
        text-bold
        bg-purple
        bg-opacity-5
        hover:bg-opacity-25
        duration-700
        sm:hidden
        md:hidden"
        >
          Launch App
        </button>
      </a>
    </div>
  );
}
