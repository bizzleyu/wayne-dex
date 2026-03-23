import React from "react";
import ConnectWallet from "../ConnectWallet";

const Header = () => {
  return (
    <header className="flex justify-between py-6">
      <div className="transition-all delay-150 duration-300 ease-in-out text-3xl hover:text-4xl cursor-pointer font-bold tracking-wider text-[#d946ef] drop-shadow-md ">
        Wayne Dex
      </div>
      <div className="text-lt">
        <ConnectWallet />
      </div>
    </header>
  );
};

export default Header;
