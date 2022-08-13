export default function Navbar() {
  return (
    <div className="w-full flex sticky h-16 items-center justify-between top-0 p-3 px-6">
      <div className="flex flex-row gap-4 text-white text-xl">
        <img src="/logo.svg" className="h-8" />
        <h1>Spect Network</h1>
      </div>
      <a href="https://circles.spect.network/">
        <button
          className="
        px-4
        py-2
        rounded-xl
        text-md
        text-purple
        text-bold
        bg-purple
        bg-opacity-10
        hover:bg-opacity-20
        duration-700"
        >
          Launch App
        </button>
      </a>
    </div>
  );
}
