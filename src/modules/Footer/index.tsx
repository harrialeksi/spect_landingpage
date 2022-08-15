export default function Footer() {
  return (
    <div className="h-full flex bg-gradientTwo h-[20rem] justify-center p-12 items-center">
      <div className="sm:hidden md:hidden mt-16">
        <img src="/3dlogo.svg" className="h-72 w-72 opacity-80" />
      </div>
      <div className="text-xl text-zinc-400 flex flex-col gap-1 mt-4">
        <a href="https://twitter.com/joinSpect">
          <p className="hover:text-purple">Twitter</p>
        </a>
        <a href="https://github.com/spect-ai">
          <p className="hover:text-purple">GitHub</p>
        </a>
        <a href="https://discord.com/invite/sbPnAdKA6c">
          <p className="hover:text-purple">Discord</p>
        </a>
        <a href="https://mirror.xyz/chaks.eth/us5rOm1jSsvmvqBOmef_SZSP6zzbNeo7ay-_DkacC64">
          <p className="hover:text-purple">Mirror</p>
        </a>
        <a href="https://gitcoin.co/grants/4201/spect-network-tribes">
          <p className="hover:text-purple">Gitcoin</p>
        </a>
        <a href="https://snapshot.org/#/spect.eth">
          <p className="hover:text-purple">Snapshot</p>
        </a>
      </div>
    </div>
  );
}
